# Rhoa

[![wercker status](https://app.wercker.com/status/3f53885ec26792f3a8ce6007e22348e4/s/master "wercker status")](https://app.wercker.com/project/byKey/3f53885ec26792f3a8ce6007e22348e4)

A Vue.js 2.0 usueful mini components for Web.

[Document](https://isuke.github.io/rhoa-doc/)

## Usage

### CDN

```html
<script srt="https://cdn.jsdelivr.net/npm/vue">
<script src="https://cdn.jsdelivr.net/npm/rhoa@v0.0.2/dist/rhoa.min.js"></script>
<script>
  window.Rhoa.default.install(Vue, {})
</script>
```

### NPM

```sh
$ npm install rhoa --save
# or
$ yarn add -D rhoa
```

```html
<template>
  <div class="main">
    <smart-link href="/logout" method="delete" text="Log out" is-reseted-style></smart-link>
  </div>
</template>

<script>
import * as rhoa from 'rhoa'

export default = {
  components: {
    'smart-link': rhoa.SmartLink
  }
};
</script>
```

## Test

```sh
yarn run test
```
