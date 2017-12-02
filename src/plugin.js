module.exports = {
  install: function(Vue, options) {
    Vue.component('smart-link', require('@components/SmartLink'));
    Vue.component('flexible-image', require('@components/FlexibleImage'));
  }
};
