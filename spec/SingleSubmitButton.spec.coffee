import { shallow } from 'vue-test-utils'
import SingleSubmitButton from '../src/components/SingleSubmitButton.vue'

describe 'SingleSubmitButton.vue', =>
  wrapper = shallow SingleSubmitButton,
    listeners:
      click: (event) ->
        window.completeProcess = true
    props:
      type: 'submit'
      autofocus: true
      disabled: false
    slots:
      default: '<p>This is Button</p>'

  it "render a form with class 'single-submit-button'", =>
    expect(wrapper.is('button')).toBe true
    expect(wrapper.hasClass('single-submit-button')).toBe true
    # expect(wrapper.text()).toBe 'This is Button'

    # button = wrapper.find('button')
    # expect(wrapper.attributes().type).toBe 'submit'
    # expect(wrapper.attributes().autofocus).toBe true

  context "when click the compnent", =>
    window.completeProcess = false

    button = wrapper.find('button')
    button.trigger('click')

    expect(window.completeProcess).toBe true
