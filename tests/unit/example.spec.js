import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Content from '@/components/Content.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Content.vue', () => {
  it('does input exist', () => {
    const wrapper = shallowMount(Content, {
      data () {
        return { showInput: true }
      }
    })
    expect(wrapper.find('input').isVisible()).toBe(true)
  })
})

