import { CompatVue } from '@vue/runtime-dom'
const Vue: CompatVue

declare module 'vue' {
  export default Vue
  export * from '@vue/runtime-dom'
}