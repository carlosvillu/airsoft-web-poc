import { esES } from './es-ES.js'

const langs = { esES }

export const i18n = {
  lang: 'esES',
  t (literal) {
    return langs[this.lang][literal] ?? `NOT FOUND LITERAL(${literal})`
  }
}
