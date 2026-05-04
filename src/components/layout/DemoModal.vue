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

        <template v-if="!isSuccess">
          <div class="demo-modal__head">
            <h3 class="demo-modal__title">
              {{ t.demoModal.title }}
            </h3>

            <p class="demo-modal__subtitle">
              {{ t.demoModal.subtitle }}
            </p>
          </div>

          <form class="demo-modal__form" @submit.prevent="submit" novalidate>
            <div class="demo-modal__grid">
              <div class="demo-field">
                <input
                  v-model.trim="form.firstName"
                  type="text"
                  class="demo-field__input"
                  :class="{ 'demo-field__input--error': errors.firstName }"
                  :placeholder="t.demoModal.fields.firstName"
                  :disabled="isSubmitting"
                  @input="errors.firstName = false"
                />

                <div v-if="errors.firstName" class="demo-field__error">
                  {{ t.demoModal.errors.required }}
                </div>
              </div>

              <div class="demo-field">
                <input
                  v-model.trim="form.lastName"
                  type="text"
                  class="demo-field__input"
                  :class="{ 'demo-field__input--error': errors.lastName }"
                  :placeholder="t.demoModal.fields.lastName"
                  :disabled="isSubmitting"
                  @input="errors.lastName = false"
                />

                <div v-if="errors.lastName" class="demo-field__error">
                  {{ t.demoModal.errors.required }}
                </div>
              </div>

              <div class="demo-field">
                <div
                  ref="phoneFieldRef"
                  class="phone-field"
                  :class="{ 'phone-field--error': errors.phone }"
                >
                  <button
                    type="button"
                    class="phone-select"
                    :disabled="isSubmitting"
                    @click="togglePhoneDropdown"
                  >
                    <span class="phone-select__value">
                      <img
                        :src="selectedPhoneCountry.flag"
                        :alt="selectedPhoneCountry.label"
                        class="phone-select__flag"
                      />
                      <span>{{ selectedPhoneCountry.label }}</span>
                      <span>{{ selectedPhoneCountry.prefix }}</span>
                    </span>

                    <span
                      class="phone-select__arrow"
                      :class="{ 'phone-select__arrow--open': isPhoneDropdownOpen }"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3.5 5.5L7 9L10.5 5.5"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    v-if="isPhoneDropdownOpen"
                    class="phone-select__dropdown"
                  >
                    <button
                      v-for="country in phoneCountries"
                      :key="country.code"
                      type="button"
                      class="phone-select__option"
                      :class="{
                        'phone-select__option--active':
                          country.code === selectedPhoneCountry.code
                      }"
                      @click="selectPhoneCountry(country)"
                    >
                     <span class="phone-select__option-main">
                      <img
                        :src="country.flag"
                        :alt="country.label"
                        class="phone-select__flag"
                      />
                      <span>{{ country.label }}</span>
                    </span>

                      <span class="phone-select__prefix">
                        {{ country.prefix }}
                      </span>
                    </button>
                  </div>

                  <input
                    ref="phoneRef"
                    v-model="form.phone"
                    class="phone-field__input"
                    :class="{ 'phone-field__input--empty': isPhoneEmpty }"
                    type="tel"
                    :placeholder="selectedPhoneCountry.placeholder"
                    :disabled="isSubmitting"
                    @input="errors.phone = false"
                  />
                </div>

                <div v-if="errors.phone" class="demo-field__error">
                  {{ t.demoModal.errors.required }}
                </div>
              </div>

              <div class="demo-field">
                <input
                  v-model.trim="form.email"
                  type="email"
                  autocomplete="email"
                  class="demo-field__input"
                  :class="{ 'demo-field__input--error': errors.email }"
                  :placeholder="t.demoModal.fields.email"
                  :disabled="isSubmitting"
                  @input="errors.email = false"
                />

                <div v-if="errors.email" class="demo-field__error">
                  {{ t.demoModal.errors.email }}
                </div>
              </div>

              <div class="demo-field demo-field--full">
                <input
                  v-model.trim="form.company"
                  type="text"
                  class="demo-field__input"
                  :class="{ 'demo-field__input--error': errors.company }"
                  :placeholder="t.demoModal.fields.company"
                  :disabled="isSubmitting"
                  @input="errors.company = false"
                />

                <div v-if="errors.company" class="demo-field__error">
                  {{ t.demoModal.errors.required }}
                </div>
              </div>
            </div>

            <div class="demo-field demo-field--full">
              <textarea
                v-model.trim="form.comment"
                class="demo-field__textarea"
                :placeholder="t.demoModal.fields.comment"
                :disabled="isSubmitting"
              />
            </div>

            <p v-if="submitError" class="demo-modal__error-global">
              {{ submitError }}
            </p>

            <label class="demo-modal__consent">
              <input
                v-model="isConsentAccepted"
                type="checkbox"
                class="demo-modal__checkbox-hidden"
              />

              <span class="demo-modal__checkbox"></span>

              <span class="demo-modal__consent-text">
                {{ t.demoModal.consent }}
              </span>
            </label>

            <p v-if="consentError" class="demo-modal__consent-error">
              {{ consentError }}
            </p>

            <div class="demo-modal__footer">
              <p class="demo-modal__note">
                {{ t.demoModal.note }}
              </p>

              <BaseButton
                variant="primary"
                type="submit"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? t.demoModal.submitLoading : t.demoModal.submit }}
              </BaseButton>
            </div>
          </form>
        </template>

        <div v-else class="demo-modal__success">
          <div ref="successIconRef" class="demo-modal__success-icon"></div>

          <h3 class="demo-modal__title">
            {{ t.demoModal.successTitle }}
          </h3>

          <p class="demo-modal__subtitle">
            {{ t.demoModal.successText }}
          </p>

          <BaseButton variant="primary" type="button" @click="close">
            {{ t.demoModal.close }}
          </BaseButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useLocale } from '../../composables/useLocale'
import BaseButton from '../ui/BaseButton.vue'
import lottie from 'lottie-web'
import successCheck from '../../assets/animations/success-check.json'
import IMask from 'imask'
import flagKz from '@/assets/flags/kz.svg'
import flagRu from '@/assets/flags/ru.svg'
import flagUz from '@/assets/flags/uz.svg'
import flagKg from '@/assets/flags/kg.svg'
import flagOther from '@/assets/flags/other.svg'

const MAIL_API_URL = 'https://idmx.kz/mail/send.php'

type PhoneCountry = {
  code: string
  label: string
  flag: string
  prefix: string
  mask: string
  placeholder: string
}

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const { t } = useLocale()

const phoneCountries = computed(() => [
  {
    code: 'KZ',
    label: 'KZ',
    flag: flagKz,
    prefix: '+7',
    mask: '+{7} (000) 000-00-00',
    placeholder: '+7 (___) ___-__-__',
  },
  {
    code: 'RU',
    label: 'RU',
    flag: flagRu,
    prefix: '+7',
    mask: '+{7} (000) 000-00-00',
    placeholder: '+7 (___) ___-__-__',
    
  },
  {
    code: 'UZ',
    label: 'UZ',
    flag: flagUz,
    prefix: '+998',
    mask: '+{998} (00) 000-00-00',
    placeholder: '+998 (__) ___-__-__',
  },
  {
    code: 'KG',
    label: 'KG',
    flag: flagKg,
    prefix: '+996',
    mask: '+{996} (000) 000-000',
    placeholder: '+996 (___) ___-___',
  },
  {
    code: 'OTHER',
    label: t.value.phone.other,
    flag: flagOther,
    prefix: '+',
    mask: '+000000000000000',
    placeholder: '+____________',
  },
])

const selectedPhoneCountry = ref<PhoneCountry>(phoneCountries.value[0])
const isPhoneDropdownOpen = ref(false)

const isConsentAccepted = ref(false)
const consentError = ref('')
const phoneRef = ref<HTMLInputElement | null>(null)
const phoneFieldRef = ref<HTMLDivElement | null>(null)
const isPhoneEmpty = ref(true)

let phoneMask: ReturnType<typeof IMask> | null = null

const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  comment: '',
})

const errors = reactive({
  firstName: false,
  lastName: false,
  phone: false,
  email: false,
  company: false,
})

const isSuccess = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')

const successIconRef = ref<HTMLDivElement | null>(null)
let successAnimation: ReturnType<typeof lottie.loadAnimation> | null = null

const togglePhoneDropdown = () => {
  if (isSubmitting.value) return

  isPhoneDropdownOpen.value = !isPhoneDropdownOpen.value
}

const selectPhoneCountry = (country: PhoneCountry) => {
  selectedPhoneCountry.value = country
  isPhoneDropdownOpen.value = false
  errors.phone = false
}

const closePhoneDropdown = (event: MouseEvent) => {
  const target = event.target as Node

  if (!phoneFieldRef.value?.contains(target)) {
    isPhoneDropdownOpen.value = false
  }
}

const clearErrors = () => {
  errors.firstName = false
  errors.lastName = false
  errors.phone = false
  errors.email = false
  errors.company = false
  submitError.value = ''
}

const close = () => {
  emit('update:modelValue', false)
  isSuccess.value = false
  isSubmitting.value = false
  isPhoneDropdownOpen.value = false
  clearErrors()
  consentError.value = ''
  successAnimation?.destroy()
  successAnimation = null
}

const resetForm = () => {
  form.firstName = ''
  form.lastName = ''
  form.phone = ''
  form.email = ''
  form.company = ''
  form.comment = ''

  selectedPhoneCountry.value = phoneCountries.value[0]
  isPhoneDropdownOpen.value = false

  if (phoneMask) {
    phoneMask.value = ''
  }

  clearErrors()
  isConsentAccepted.value = false
  consentError.value = ''
}

const initPhoneMask = async () => {
  await nextTick()

  if (!phoneRef.value) return

  phoneMask?.destroy()

  phoneMask = IMask(phoneRef.value, {
    mask: selectedPhoneCountry.value.mask,
    lazy: false,
  })

  phoneMask.on('accept', () => {
    form.phone = phoneMask?.value || ''
isPhoneEmpty.value = (phoneMask?.unmaskedValue.length ?? 0) <= 1
    if (errors.phone) {
      errors.phone = (phoneMask?.unmaskedValue.length ?? 0) < 8
    }
  })
}

const destroyPhoneMask = () => {
  phoneMask?.destroy()
  phoneMask = null
}

const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  errors.firstName = !form.firstName.trim()
  errors.lastName = !form.lastName.trim()
  errors.phone = (phoneMask?.unmaskedValue.length ?? 0) < 8
  errors.email = !emailRegex.test(form.email)
  errors.company = !form.company.trim()

  return (
    !errors.firstName &&
    !errors.lastName &&
    !errors.phone &&
    !errors.email &&
    !errors.company
  )
}

const getSubmitErrorMessage = async (response: Response) => {
  try {
    const result = await response.json()

    if (result.errors) {
      return Object.values(result.errors).join('\n')
    }

    return result.message || 'Не удалось отправить заявку.'
  } catch {
    return t.value.demoModal.errors.response
  }
}

const submit = async () => {
  if (isSubmitting.value) return

  const isFormValid = validateForm()
  const isConsentValid = isConsentAccepted.value

  if (!isConsentValid) {
    consentError.value = t.value.demoModal.consentError
  } else {
    consentError.value = ''
  }

  if (!isFormValid || !isConsentValid) return

  submitError.value = ''
  isSubmitting.value = true
  isPhoneDropdownOpen.value = false

  const note = [
    form.company ? `Компания: ${form.company}` : '',
    form.comment ? `Комментарий: ${form.comment}` : '',
  ]
    .filter(Boolean)
    .join('\n\n')

  try {
    const response = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastname: form.lastName,
        firstname: form.firstName,
        phone: form.phone,
        email: form.email,
        note,
      }),
    })

    if (!response.ok) {
      submitError.value = await getSubmitErrorMessage(response)
      return
    }

    const result = await response.json()

    if (!result.success) {
      if (result.errors) {
        submitError.value = Object.values(result.errors).join('\n')
      } else {
        submitError.value = result.message || t.value.demoModal.errors.send
      }
      return
    }

    resetForm()
    isSuccess.value = true
  } catch (error) {
    submitError.value = t.value.demoModal.errors.server
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    if (isPhoneDropdownOpen.value) {
      isPhoneDropdownOpen.value = false
      return
    }

    close()
  }
}

watch(selectedPhoneCountry, async (country) => {
  form.phone = country.prefix + ' '

  await nextTick()
  await initPhoneMask()
})

watch(isSuccess, async (value) => {
  if (!value) return

  await nextTick()

  if (!successIconRef.value) return

  successAnimation?.destroy()

  successAnimation = lottie.loadAnimation({
    container: successIconRef.value,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: successCheck,
  })
})

watch(
  () => props.modelValue,
  async (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (isOpen) {
      isSuccess.value = false
      isSubmitting.value = false
      isPhoneDropdownOpen.value = false
      clearErrors()
      consentError.value = ''
      successAnimation?.destroy()
      successAnimation = null

      await initPhoneMask()
    } else {
      destroyPhoneMask()
      isPhoneDropdownOpen.value = false
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  document.addEventListener('click', closePhoneDropdown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', closePhoneDropdown)

  destroyPhoneMask()
  successAnimation?.destroy()
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
    background 0.2s ease,
    opacity 0.2s ease;
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

.demo-field__input:disabled,
.demo-field__textarea:disabled {
  opacity: 0.72;
  cursor: not-allowed;
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

.demo-modal__error-global {
  margin: -2px 0 0;
  padding: 12px 14px;
  border: 1px solid rgba(224, 75, 75, 0.22);
  border-radius: 14px;
  background: rgba(224, 75, 75, 0.07);
  color: #c73535;
  font-size: 14px;
  line-height: 1.45;
  white-space: pre-line;
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

.demo-modal__success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
  padding-top: 8px;
  animation: successFade 0.4s ease;
}

.demo-modal__success-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-modal__success .demo-modal__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 12px;
}

.demo-modal__success .demo-modal__subtitle {
  font-size: 20px;
  line-height: 1.5;
  color: var(--color-subtitle);
  max-width: 420px;
  margin-bottom: 36px;
}

.demo-modal__success .base-button {
  margin-top: 8px;
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

.demo-modal__consent {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-top: 12px;
  cursor: pointer;
}

.demo-modal__consent-checkbox {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  flex: 0 0 auto;
  accent-color: var(--color-primary);
}

.demo-modal__consent-text {
  color: var(--color-subtitle);
  font-size: 13px;
  line-height: 1.4;
}

.demo-modal__consent-error {
  margin: 4px 0 0;
  color: var(--color-red);
  font-size: 12px;
}
.demo-modal__checkbox-hidden {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.demo-modal__checkbox {
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  background: #fff;
  position: relative;
  flex: 0 0 auto;
}


.demo-modal__checkbox-hidden:checked + .demo-modal__checkbox::after {
  content: '';
  position: absolute;
  left: 4px;
  top: 1px;
  width: 6px;
  height: 10px;
  border: solid var(--color-primary); 
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.phone-field {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--white);
  overflow: hidden;
}

.phone-field {
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  min-height: 58px;
  border: 1px solid rgba(46, 166, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
  overflow: visible;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.phone-field:focus-within {
  border-color: rgba(1, 157, 255, 0.34);
  background: #ffffff;
  box-shadow:
    0 0 0 4px rgba(1, 157, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
}

.phone-field--error {
  border-color: rgba(224, 75, 75, 0.75);
  box-shadow: 0 0 0 4px rgba(224, 75, 75, 0.08);
}

.phone-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 138px;
  min-height: 58px;
  padding: 0 14px;
  border: 0;
  border-right: 1px solid rgba(46, 166, 255, 0.12);
  border-radius: 14px 0 0 14px;
  background: rgba(1, 157, 255, 0.06);
  color: #23384d;
  font: inherit;
  cursor: pointer;
  user-select: none;
}

.phone-select:disabled {
  opacity: 0.72;
  cursor: not-allowed;
}

.phone-select__value {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.phone-select__flag {
  font-size: 18px;
  line-height: 1;
}

.phone-select__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: transform 0.25s ease, opacity 0.2s ease;
  opacity: 0.8;
}

.phone-select__arrow--open {
  transform: rotate(180deg);
  opacity: 1;
}

.phone-select__dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 40;
  width: 190px;
  max-height: 260px;
  overflow-y: auto;
  padding: 6px;
  border: 1px solid rgba(46, 166, 255, 0.14);
  border-radius: 16px;
  background: #ffffff;
  box-shadow:
    0 18px 48px rgba(5, 14, 28, 0.18),
    0 8px 18px rgba(5, 14, 28, 0.1);
}

.phone-select__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  padding: 10px 12px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: #23384d;
  font: inherit;
  cursor: pointer;
  transition: background 0.18s ease;
}

.phone-select__option:hover,
.phone-select__option--active {
  background: rgba(1, 157, 255, 0.08);
}

.phone-select__option-main {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
}

.phone-select__prefix {
  color: #72859a;
  font-size: 14px;
  font-weight: 600;
}

.phone-field__input {
  flex: 1;
  min-width: 0;
  height: 58px;
  padding: 0 18px;
  border: 0;
  border-radius: 0 14px 14px 0;
  background: transparent;
  color: #23384d;
  font-size: 16px;
  outline: none;
}

.phone-field__input::placeholder {
  color: #718396;
}

.phone-field__input:disabled {
  opacity: 0.72;
  cursor: not-allowed;
}
.phone-select__flag {
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  border-radius: 4px;
  object-fit: cover;
 
}
.phone-field__input--empty {
  color: var(--color-subtitle);
}

.phone-field__input:focus {
  color: #23384d;
}

@keyframes successFade {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .demo-modal {
    align-items: flex-start;
    padding: max(18px, env(safe-area-inset-top)) 14px max(14px, env(safe-area-inset-bottom));
    overflow-y: auto;
  }

  .demo-modal__dialog {
    width: 100%;
    max-height: none;
    margin: auto 0;
    padding: 24px 18px 20px;
    border-radius: 24px;
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
}
</style>