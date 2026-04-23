<template>
  <transition name="demo-modal-fade">
    <div
      v-if="modelValue"
      class="demo-modal"
      @click.self="close"
    >
      <div class="demo-modal__dialog" role="dialog" aria-modal="true">
        <button
          type="button"
          class="demo-modal__close"
          aria-label="Close modal"
          @click="close"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <div class="demo-modal__head">
          <h3 class="demo-modal__title">
            {{ t.demoModal.title }}
          </h3>

          <p class="demo-modal__subtitle">
            {{ t.demoModal.subtitle }}
          </p>
        </div>

        <form class="demo-modal__form" @submit.prevent="submit">
          <div class="demo-modal__grid">
            <div class="demo-field">
              <input
                v-model.trim="form.firstName"
                type="text"
                class="demo-field__input"
                :placeholder="t.demoModal.fields.firstName"
              />
            </div>

            <div class="demo-field">
              <input
                v-model.trim="form.lastName"
                type="text"
                class="demo-field__input"
                :placeholder="t.demoModal.fields.lastName"
              />
            </div>

            <div class="demo-field">
              <input
                v-model="form.phone"
                type="tel"
                inputmode="tel"
                autocomplete="tel"
                class="demo-field__input"
                :placeholder="t.demoModal.fields.phone"
                @input="formatPhone"
              />
            </div>

            <div class="demo-field">
              <input
                v-model.trim="form.email"
                type="email"
                autocomplete="email"
                class="demo-field__input"
                :class="{ 'demo-field__input--error': emailError }"
                :placeholder="t.demoModal.fields.email"
                @blur="validateEmail"
              />
              <div v-if="emailError" class="demo-field__error">
                {{ t.demoModal.emailError }}
              </div>
            </div>

            <div class="demo-field demo-field--full">
              <input
                v-model.trim="form.company"
                type="text"
                class="demo-field__input"
                :placeholder="t.demoModal.fields.company"
              />
            </div>
          </div>

          <div class="demo-field demo-field--full">
            <textarea
              v-model.trim="form.comment"
              class="demo-field__textarea"
              :placeholder="t.demoModal.fields.comment"
            />
          </div>

          <div class="demo-modal__footer">
            <p class="demo-modal__note">
              {{ t.demoModal.note }}
            </p>

            <BaseButton
              variant="primary"
              type="submit"
            >
              {{ t.demoModal.submit }}
            </BaseButton>
          </div>
        </form>
      </div>

      <transition name="demo-toast-fade">
        <div v-if="showToast" class="demo-toast">
          {{ t.demoModal.success }}
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../../composables/useLocale'
import BaseButton from '../ui/BaseButton.vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'submit', value: {
    firstName: string
    lastName: string
    phone: string
    email: string
    company: string
    comment: string
  }): void
}>()

const { t } = useLocale()

const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  comment: '',
})

const emailError = ref(false)
const showToast = ref(false)
let toastTimer: ReturnType<typeof setTimeout> | null = null

const close = () => {
  emit('update:modelValue', false)
}

const resetForm = () => {
  form.firstName = ''
  form.lastName = ''
  form.phone = ''
  form.email = ''
  form.company = ''
  form.comment = ''
  emailError.value = false
}

const formatPhone = (e: Event) => {
  const input = e.target as HTMLInputElement

  let value = input.value.replace(/\D/g, '').slice(0, 11)

  if (value.startsWith('8')) value = '7' + value.slice(1)
  if (value && !value.startsWith('7')) value = '7' + value.slice(0, 10)

  let formatted = '+7'

  if (value.length > 1) {
    formatted += ' (' + value.slice(1, 4)
  }
  if (value.length >= 4) {
    formatted += ') ' + value.slice(4, 7)
  }
  if (value.length >= 7) {
    formatted += '-' + value.slice(7, 9)
  }
  if (value.length >= 9) {
    formatted += '-' + value.slice(9, 11)
  }

  input.value = formatted
  form.phone = formatted
}

const validateEmail = () => {
  if (!form.email) {
    emailError.value = false
    return true
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailError.value = !emailRegex.test(form.email)
  return !emailError.value
}

const showSuccessToast = () => {
  showToast.value = true

  if (toastTimer) {
    clearTimeout(toastTimer)
  }

  toastTimer = setTimeout(() => {
    showToast.value = false
  }, 2600)
}

const submit = () => {
  if (!validateEmail()) return

  emit('submit', { ...form })
  close()
  showSuccessToast()
  resetForm()
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

watch(
  () => props.modelValue,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)

  if (toastTimer) {
    clearTimeout(toastTimer)
  }
})
</script>

<style scoped>
.demo-modal {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(6, 14, 32, 0.68);
  backdrop-filter: blur(10px);
}

.demo-modal__dialog {
  position: relative;
  width: min(780px, 100%);
  max-height: calc(100vh - 48px);
  overflow: auto;
    padding: 28px 28px 24px;
  border-radius: 28px;
  border: 1px solid rgba(1, 157, 255, 0.12);
  background:
    radial-gradient(circle at 12% 0%, rgba(119, 203, 255, 0.18), transparent 28%),
    radial-gradient(circle at 88% 0%, rgba(1, 157, 255, 0.08), transparent 22%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(247, 251, 255, 0.98) 100%);
  box-shadow:
    0 24px 80px rgba(5, 14, 28, 0.34),
    0 8px 24px rgba(5, 14, 28, 0.14);
}

.demo-modal__close {
  position: absolute;
  top: 18px;
  right: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(46, 166, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.78);
  color: #5f7286;
  cursor: pointer;
  transition:
    background 0.22s ease,
    border-color 0.22s ease,
    color 0.22s ease,
    transform 0.22s ease;
}

.demo-modal__close:hover {
  background: rgba(255, 255, 255, 0.96);
  border-color: rgba(46, 166, 255, 0.22);
  color: #24384d;
  transform: translateY(-1px);
}

.demo-modal__close svg {
  width: 18px;
  height: 18px;
}

.demo-modal__head {
  margin-bottom: 26px;
  padding-right: 56px;
}

.demo-modal__title {
  margin: 0 0 12px;
  color: #1f2430;
  font-size: clamp(30px, 3.2vw, 36px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.demo-modal__subtitle {
  margin: 0;
  max-width: 600px;
  color: #64788d;
  font-size: 15px;
  line-height: 1.5;
}

.demo-modal__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-modal__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 16px;
}

.demo-field {
  min-width: 0;
}

.demo-field--full {
  grid-column: 1 / -1;
}

.demo-field__input,
.demo-field__textarea {
  width: 100%;
  border: 1px solid rgba(46, 166, 255, 0.12);
  background: rgba(255, 255, 255, 0.82);
  color: #23384d;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.demo-field__input {
  height: 58px;
  padding: 0 18px;
  border-radius: 14px;
  font-size: 16px;
}

.demo-field__textarea {
  min-height: 140px;
  padding: 16px 18px;
  border-radius: 16px;
  resize: vertical;
  font-size: 16px;
  line-height: 1.45;
}

.demo-field__input:focus,
.demo-field__textarea:focus {
  outline: none;
  border-color: rgba(1, 157, 255, 0.34);
  background: #ffffff;
  box-shadow:
    0 0 0 4px rgba(1, 157, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
}

.demo-field__input--error {
  border-color: rgba(224, 75, 75, 0.75);
  box-shadow: 0 0 0 4px rgba(224, 75, 75, 0.08);
}

.demo-field__error {
  margin-top: 8px;
  color: #d44343;
  font-size: 13px;
  line-height: 1.4;
}

.demo-field__input::placeholder,
.demo-field__textarea::placeholder {
  color: #718396;
}

.demo-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 4px;
}

.demo-modal__note {
  margin: 0;
  color: #72859a;
  font-size: 14px;
  line-height: 1.5;
  max-width: 580px;
}

.demo-toast {
  position: fixed;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  z-index: 130;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(20, 30, 46, 0.96);
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: 0 16px 40px rgba(5, 14, 28, 0.34);
}

.demo-modal-fade-enter-active,
.demo-modal-fade-leave-active {
  transition: opacity 0.24s ease;
}

.demo-modal-fade-enter-active .demo-modal__dialog,
.demo-modal-fade-leave-active .demo-modal__dialog {
  transition:
    transform 0.24s ease,
    opacity 0.24s ease;
}

.demo-modal-fade-enter-from,
.demo-modal-fade-leave-to {
  opacity: 0;
}

.demo-modal-fade-enter-from .demo-modal__dialog,
.demo-modal-fade-leave-to .demo-modal__dialog {
  opacity: 0;
  transform: translateY(10px) scale(0.985);
}

.demo-toast-fade-enter-active,
.demo-toast-fade-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.demo-toast-fade-enter-from,
.demo-toast-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
}

@media (max-width: 768px) {
  .demo-modal {
    padding: 14px;
    align-items: flex-end;
  }

  .demo-modal__dialog {
    max-height: calc(100vh - 20px);
    padding: 24px 18px 20px;
    border-radius: 24px 24px 0 0;
  }

  .demo-modal__head {
    margin-bottom: 20px;
    padding-right: 44px;
  }

  .demo-modal__title {
    font-size: 30px;
    line-height: 1.1;
  }

  .demo-modal__subtitle {
    font-size: 15px;
  }

  .demo-modal__grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .demo-field__input {
    height: 52px;
    font-size: 15px;
  }

  .demo-field__textarea {
    min-height: 120px;
    font-size: 15px;
  }

  .demo-modal__footer {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .demo-modal__note {
    max-width: none;
    font-size: 13px;
  }

  .demo-toast {
    left: 14px;
    right: 14px;
    bottom: 14px;
    transform: none;
    text-align: center;
  }

  .demo-toast-fade-enter-from,
  .demo-toast-fade-leave-to {
    transform: translateY(8px);
  }
}
</style>