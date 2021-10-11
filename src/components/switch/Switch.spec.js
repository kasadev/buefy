import { flushPromises, shallowMount } from '@vue/test-utils'
import BSwitch from '@components/switch/Switch'

let wrapper

describe('BSwitch', () => {
    beforeEach(() => {
        wrapper = shallowMount(BSwitch, {
            slots: {
                default: [
                    'Control label'
                ]
            }
        })
    })

    it('renders input element by default', () => {
        expect(wrapper.find('input')).toBeTruthy()
        expect(wrapper.classes()).toContain('switch')
    })

    it('updates internal value when v-model is changed', async () => {
        const newValue = 'switch value'
        await wrapper.setProps({ value: newValue })
        expect(wrapper.vm.newValue).toBe(newValue)
    })

    it('emit input event when computedValue is set', async () => {
        const newValue = 'switch value'
        wrapper.vm.computedValue = newValue
        await wrapper.vm.$nextTick()
        const valueEmitted = wrapper.emitted()['input'][0]
        expect(wrapper.vm.newValue).toBe(newValue)
        expect(valueEmitted).toContainEqual(newValue)
    })

    it('method focus() gives focus to the input element', async () => {
        wrapper.vm.$refs.input.focus = jest.fn()
        wrapper.vm.focus()
        await flushPromises()
        expect(wrapper.vm.$refs.input.focus).toHaveBeenCalled()
    })

    it('applies passiveType prop properly', async () => {
        const passiveType = 'is-danger'
        const value = false
        await wrapper.setProps({ passiveType, value })
        const switchElement = wrapper.find('.check')
        expect(switchElement.classes()).toContain('is-danger-passive')
    })

    it('does not have a label at left by default', async () => {
        const value = false
        await wrapper.setProps({ value })
        expect(wrapper.classes()).not.toContain('has-left-label')
    })

    it('has label at left is left-label prop has been sent', async () => {
        const leftLabel = true
        const value = false
        await wrapper.setProps({ leftLabel, value })
        expect(wrapper.classes()).toContain('has-left-label')
    })
})
