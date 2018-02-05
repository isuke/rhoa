<template lang="pug">
button.single-submit-button(
  :disabled="isDisable",
  :type="type",
  :autofocus="autofocus",
  @click.prevent="doSubmit"
)
  slot
</template>

<script lang="coffee">
export default
  name: 'SingleSubmitButton'
  introduction: "prevent 'Double Submi' button"
  token: """
    <single-submit-button @click="doSomething">
      Click Here!
    </single-submit-button>
  """
  description: """
    <p>The 'doSomthing' should return Promise Object.</p>
    <p>This component is disabled between it clicked and 'doSomething' is completed.</p>
  """
  props:
    type:
      type: String
      required: false
      default: 'button'
      validator: (val) -> ['button', 'reset', 'submit'].includes(val)
      note: 'this button type'
    autofocus:
      type: Boolean
      required: false
      default: false
      note: 'this button is autofocus or not'
    disabled:
      type: Boolean
      required: false
      default: false
      note: 'this button is disabled or not'
  data: ->
    processing: false
  computed:
    isDisable: -> @disabled || @processing
  methods:
    doSubmit: (event) ->
      @processing = true
      @$listeners.click(event)
        .then  () => @processing = false
        .catch () => @processing = false
</script>

<style lang="stylus" scoped>
.single-submit-button {}
</style>
