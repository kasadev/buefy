import { shallowMount } from '@vue/test-utils'
import BCheckbox from '@components/checkbox/Checkbox'

let wrapper

describe('BCheckbox', () => {
    beforeEach(() => {
        wrapper = shallowMount(BCheckbox)
    })

    it('has an input checkbox', () => {
        expect(wrapper.find('label input[type=checkbox]')).toBeTruthy()
    })

    it('emit input event with value when value change', async () => {
        await wrapper.setProps({ value: true })
        expect(wrapper.vm.computedValue).toBeTruthy()
        wrapper.vm.computedValue = false
        await wrapper.vm.$nextTick()
        const valueEmitted = wrapper.emitted()['input'][0]
        expect(valueEmitted).toContainEqual(false)
    })

    it('method focus() gives focus to the input element', async () => {
        wrapper.vm.$refs.input.focus = jest.fn()
        wrapper.vm.focus()
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.$refs.input.focus).toHaveBeenCalled()
    })
})
