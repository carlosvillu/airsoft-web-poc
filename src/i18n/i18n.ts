import { esES } from './es-ES.js'

const langs = { esES }

export const i18n = {
  lang: 'esES',
  t (literal: string) {
    const dic: Record<string, Record<string, string>> = langs[this.lang]
    return dic[literal] ?? `NOT FOUND LITERAL(${literal})`
  }
}
