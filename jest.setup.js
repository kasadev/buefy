import { configureCompat } from 'vue'
import { config } from '@vue/test-utils'

configureCompat({
    MODE: 2,
    INSTANCE_LISTENERS: false, // https://github.com/vuejs/vue-next/issues/4566#issuecomment-917997056
    INSTANCE_SCOPED_SLOTS: true // dunno why this is needed it says "INSTANCE_SCOPED_SLOTS compat has been disabled."
})
config.renderStubDefaultSlot = true
