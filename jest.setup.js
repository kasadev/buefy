import { configureCompat } from '@vue/compat'
import { config } from '@vue/test-utils'

configureCompat({
    MODE: 2,
    INSTANCE_LISTENERS: false, // https://github.com/vuejs/vue-next/issues/4566#issuecomment-917997056
    ATTR_FALSE_VALUE: false
})
config.renderStubDefaultSlot = true
