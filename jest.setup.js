import { configureCompat } from 'vue'
import { config } from '@vue/test-utils'

configureCompat({
    INSTANCE_LISTENERS: false, // https://github.com/vuejs/vue-next/issues/4566#issuecomment-917997056
})
config.renderStubDefaultSlot = true
