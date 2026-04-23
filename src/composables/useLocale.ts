import { computed, ref } from 'vue'
import ru from '../locales/ru'
import en from '../locales/en'
import kz from '../locales/kz'

const messages = {
  ru,
  en,
  kz,
} as const

const currentLocale = ref<'ru' | 'en' | 'kz'>('ru')

export function useLocale() {
  const t = computed(() => messages[currentLocale.value])

  const setLocale = (locale: 'ru' | 'en' | 'kz') => {
    currentLocale.value = locale
  }

  return {
    t,
    locale: currentLocale,
    setLocale,
  }
}