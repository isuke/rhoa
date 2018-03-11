<template lang="pug">
button.single-submit-button(
  :disabled="isDisable",
  :type="type",
  :autofocus="autofocus",
  v-on="$listeners",
  @click="processing = true"
)
  slot
</template>

<script lang="coffee">
export default
  name: 'SingleSubmitButton'
  introduction: "prevent 'Double Submit' button"
  token: """
    <single-submit-button @click="doSomething">
      Click Here!
    </single-submit-button>
  """
  description: """
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
</script>

<style lang="stylus" scoped>
.single-submit-button {}
</style>
