<template lang="pug">
form.smart-link(method="post", :action="href", :class="{'-reset': isResetedStyle}")
  input.method(type="hidden", name="_method", :value="method.toUpperCase()")
  input.token(type="hidden", :name="tokenName", :value="token")
  input.submit(type="submit", :value="text")
</template>

<script lang="coffee">
export default
  name: 'SmartLink'
  introduction: "Link for HTTP method such as 'post'."
  description: """
    TODO
  """
  token: '<smart-link href="/logout" method="delete" text="Log out" is-reseted-style></smart-link>'
  props:
    href:
      type: String
      required: true
      note: "link url"
    method:
      type: String
      required: true
      validator: (val) ->
        ['get', 'post', 'patch', 'put', 'delete'].includes(val)
      note: "HTTP methods kind. 'get', 'post', 'patch', 'put' or 'delete'"
    text:
      type: String
      required: true
      note: "link text"
    token:
      type: String
      required: false
      default: null
      note: "Authenticity Token for CSRF"
    tokenName:
      type: String
      required: false
      default: 'authenticity_token'
      note: "paramater name of 'token'"
    isResetedStyle:
      type: Boolean
      required: false
      default: true
      note: "Style reset or not reset"
</script>

<style lang="stylus">
.smart-link
  &.-reset
    margin: 0
    padding: 0
    border: 0
    font-size: 100%
    font: inherit
    vertical-align: baseline

    > .submit
      border: none
      text-decoration: underline
      cursor: pointer
</style>
