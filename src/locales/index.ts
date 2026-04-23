import ru from './ru'
import en from './en'
import kz from './kz'

export type Locale = 'ru' | 'en' | 'kz'

export const messages = {
  ru,
  en,
  kz,
} as const

export type Messages = typeof messages
export type MessageSchema = typeof ru