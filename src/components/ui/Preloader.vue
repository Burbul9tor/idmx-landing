<template>
  <transition name="preloader-fade">
    <div v-if="visible" class="preloader">
      <div ref="anim" class="preloader__anim"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import lottie from 'lottie-web'

const props = defineProps<{
  visible: boolean
}>()

const anim = ref<HTMLElement | null>(null)
let instance: ReturnType<typeof lottie.loadAnimation> | null = null

onMounted(() => {
  if (!anim.value) return

  instance = lottie.loadAnimation({
    container: anim.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/preloader.json', // 👉 из public
  })
})

onBeforeUnmount(() => {
  instance?.destroy()
})
</script>

<style scoped>
.preloader {
  transition: opacity 0.4s ease;
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(circle at 50% 40%, #111827 0%, #0b0e14 100%),
    linear-gradient(180deg, #0f172a 0%, #0b0e14 100%);
}

/* контейнер анимации */
.preloader__anim {
  width: 160px;
  height: 160px;
  position: relative;
}

/* мягкое свечение под анимацией */
.preloader__anim::after {
  content: '';
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: rgba(1, 157, 255, 0.15);
  filter: blur(40px);
  z-index: -1;
}

/* плавное исчезновение */
.preloader-fade-enter-active,
.preloader-fade-leave-active {
  transition: opacity 0.4s ease;
}

.preloader-fade-enter-from,
.preloader-fade-leave-to {
  opacity: 0;
}
</style>