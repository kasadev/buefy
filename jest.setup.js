import { configureCompat } from '@vue/compat'
import { config } from '@vue/test-utils'

configureCompat({
    MODE: 3,
    ATTR_FALSE_VALUE: false,
    RENDER_FUNCTION: false
})
config.renderStubDefaultSlot = true
