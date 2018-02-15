<template lang="pug">
.square-box(v-bind:style="styleObject")
  slot
</template>

<script lang="coffee">
export default
  name: 'SquareBox'
  introduction: "TODO"
  token: """
    <square-box></square-box>
  """
  description: """
    <p>TODO</p>
  """
  props:
    fixLength:
      type: String
      required: true
      validator: (val) ->
        ['width', 'height'].includes(val)
      note: "fix length. 'width' or 'height'."
  data: ->
    length: undefined
  computed:
    styleObject: ->
      return {} if _.isUndefined(@length)
      {
        width: @length + 'px'
        height: @length + 'px'
      }
  methods:
    calcLength: ->
      if @fixLength == 'width'
        @length = @$el.clientWidth
      else
        @length = @$el.clientHeight
  mounted: ->
    @calcLength()


</script>

<style lang="stylus" scoped>
.square-box {}
</style>
