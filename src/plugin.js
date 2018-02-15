module.exports = {
  install: function(Vue, options) {
    Vue.component('smart-link', require('@components/SmartLink'));
    Vue.component('flexible-image', require('@components/FlexibleImage'));
    Vue.component('single-submit-button', require('@components/SingleSubmitButton'));
    Vue.component('square-box', require('@components/SquareBox'));
  }
};
