import { shallow } from 'vue-test-utils'
import SmartLink from '../src/components/SmartLink.vue'

describe 'SmartLink.vue', =>
  wrapper = shallow SmartLink,
    propsData:
      href: '/'
      method: 'put'
      text: 'Log out'
      token: 'abc'
      tokenName: 'my_authenticity_token'

  it "render a form with class 'smart-link'", =>
    expect(wrapper.is('form')).toBe true
    expect(wrapper.hasClass('smart-link')).toBe true

  describe 'method', =>
    method = wrapper.find('.method')

    it 'have value', =>
      expect(method.hasAttribute('type', 'hidden')).toBe true
      expect(method.hasAttribute('name', '_method')).toBe true
      expect(method.hasAttribute('value', 'PUT')).toBe true

  describe 'token', =>
    token = wrapper.find('.token')

    it 'have value', =>
      expect(token.hasAttribute('type', 'hidden')).toBe true
      expect(token.hasAttribute('name', 'my_authenticity_token')).toBe true
      expect(token.hasAttribute('value', 'abc')).toBe true

  describe 'submit', =>
    submit = wrapper.find('.submit')

    it 'have text', =>
      expect(submit.hasAttribute('type', 'submit')).toBe true
      expect(submit.hasAttribute('value', 'Log out')).toBe true
