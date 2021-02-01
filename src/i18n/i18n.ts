import { esES } from './es-ES.js'

const langs = { esES }

type LanguagesNames = keyof typeof langs
type Literals = keyof typeof langs.esES
type I18N = {
  lang: LanguagesNames,
  t: (literal: Literals) => string
}

export const i18n: I18N = {
  lang: 'esES',
  t (literal: Literals) {
    const dic: Record<string, string> = langs[this.lang]
    return dic[literal] ?? `NOT FOUND LITERAL(${literal})`
  }
}
