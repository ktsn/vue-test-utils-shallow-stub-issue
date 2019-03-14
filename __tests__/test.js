import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Test from '../src/Test'
import Child from '../src/Child'

it('should stub with component options', () => {
  const wrapper = shallowMount(Test, {
    stubs: {
      Child: Child.options
    }
  })

  console.log(wrapper.html())
  expect(wrapper.html()).not.toContain('This text should not be appeared')
})

it('should stub with component constructor', () => {
  const wrapper = shallowMount(Test, {
    stubs: {
      Child
    }
  })

  console.log(wrapper.html())
  expect(wrapper.html()).not.toContain('This text should not be appeared')
})
