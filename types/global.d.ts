import type { Airsoft } from '../src/domain'

declare global {
  interface Window {
    domain: Airsoft;
  }
}
