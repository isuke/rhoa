import { shallow } from 'vue-test-utils'
import SingleSubmitButton from '../src/components/SingleSubmitButton.vue'

describe 'SingleSubmitButton.vue', =>
  wrapper = shallow SingleSubmitButton,
    listeners:
      click:
        (event) ->
          new Promise (resolve, _reject) =>
            window.completeProcess = true
            resolve("this event is #{event}")
    slots:
      default: 'This is Button'

  it "render a form with class 'single-submit-button'", =>
    expect(wrapper.is('button')).toBe true
    expect(wrapper.hasClass('single-submit-button')).toBe true
    # expect(wrapper.text()).toBe 'This is Button'

  context "when click the compnent", =>
    window.completeProcess = false

    button = wrapper.find('button')
    button.trigger('click')

    expect(window.completeProcess).toBe true
