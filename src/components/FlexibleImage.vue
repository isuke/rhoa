<template lang="pug">
.flexible-image(:style="{width: width + unit, height: height + unit}")
  img.image(:src="imageUrl" :style="{width: fixedWidth + unit, height: fixedHeight + unit}")
</template>

<script lang="coffee">
export default
  name: 'FlexibleImage'
  introduction: "Zoom in/out the image by centering."
  token: """
    <flexible-image image-url="http://placehold.it/350x250" :width="150" :height="150"></flexible-image>
  """
  description: """
    <p>This placeholder image will zoom in 150px x 150px and centering.</p>
  """
  props:
    imageUrl:
      type: String
      required: true
      note: 'image url'
    width:
      type: Number
      required: true
      note: 'image width'
    height:
      type: Number
      required: true
      note: 'image height'
    unit:
      type: String
      required: false
      default: 'px'
      note: 'unit of image height/width'
  data: ->
    image: null
    fixedWidth: null
    fixedHeight: null
  computed:
    aspectRatio: -> @width / @height
  methods:
    loadImage: ->
      @image = new Image()
      @image.onload = ->
        @calcLength()
    calcLength: ->
      imageAspectRatio = @image.width / @image.height
      @fixedWidth =
        if @aspectRatio < imageAspectRatio
          null
        else
          @width
      @fixedHeight =
        if @aspectRatio < imageAspectRatio
          @height
        else
          null
  mounted: ->
    @loadImage()
</script>

<style lang="stylus" scoped>
.flexible-image
  position: relative
  overflow: hidden
  > .image
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
