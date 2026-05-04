import { computed, ref } from 'vue'
import ru from '../locales/ru'
import en from '../locales/en'
import kz from '../locales/kz'
import uz from '../locales/uz'

const messages = {
  ru,
  en,
  kz,
  uz,
} as const

const currentLocale = ref<'ru' | 'en' | 'kz' | 'uz'>('ru')

export function useLocale() {
  const t = computed(() => messages[currentLocale.value])

const setLocale = (locale: 'ru' | 'en' | 'kz' | 'uz') => {
  currentLocale.value = locale
}

  return {
    t,
    locale: currentLocale,
    setLocale,
  }
}