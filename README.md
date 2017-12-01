# Rhoa

[![wercker status](https://app.wercker.com/status/3f53885ec26792f3a8ce6007e22348e4/s/master "wercker status")](https://app.wercker.com/project/byKey/3f53885ec26792f3a8ce6007e22348e4)

A Vue.js 2.0 usueful mini components for Web.

[Document](https://isuke.github.io/rhoa-doc/)

## Usage

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
