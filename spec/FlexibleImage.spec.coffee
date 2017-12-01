import { shallow } from 'vue-test-utils'
import FlexibleImage from '../src/components/FlexibleImage.vue'

describe 'FlexibleImage.vue', =>
  wrapper = shallow FlexibleImage,
    propsData:
      href: 'http://placehold.it/350x250'
      width: 100
      height: 120

  it "render a form with class 'flexible-image'", =>
    expect(wrapper.is('div')).toBe true
    expect(wrapper.hasClass('flexible-image')).toBe true
    expect(wrapper.hasStyle('width', '100px')).toBe true
    expect(wrapper.hasStyle('height', '120px')).toBe true

  xdescribe '.image', =>
    image = wrapper.find('.image')

    it 'calc width/height', =>
      expect(image.is('img')).toBe true
      wrapper.setData { image: { width: 350, height: 250 } } # Donen't work.
      wrapper.vm.$options.methods.calcLength()
      expect(image.hasStyle('width', '100px')).toBe false
      expect(image.hasStyle('height', '120px')).toBe true
