<template lang="pug">
button.single-submit-button(:disabled="isDisable", @click.prevent="doSubmit")
  slot
</template>

<script lang="coffee">
export default
  name: 'SimgleSubmitButton'
  introduction: "prevent 'Double Submi' button"
  token: """
    <single-submit-button @click="doSomething">
      Click Here!
    </single-submit-button>
  """
  description: """
    The 'doSomthing' should return Promise Object.
    This component is disabled between it clicked and 'doSomething' is completed.
  """
  props:
    disabled:
      type: Boolean
      required: false
      default: false
      note: 'that button is disabled or not'
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
