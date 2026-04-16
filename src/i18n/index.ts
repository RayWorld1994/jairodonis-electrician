import { useAppSelector } from '../store/hooks'
import { es } from './es'
import { en } from './en'

export function useT() {
  const lang = useAppSelector((state) => state.language.lang)
  return lang === 'en' ? en : es
}
