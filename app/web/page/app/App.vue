<template>
  <html v-if="isNode">

  <head>
    <title>{{title || 'Egg + Vue'}}</title>
    <meta name="keywords" :content="keywords">
    <meta name="description" :content="description">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  </head>

  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>

  </html>
  <div v-else-if="!isNode" id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      title: '我是客户端',
      keywords: '这才是关键字',
      description: '这就是描述了哦'
    }
  },
  mounted() {

  },
  computed: {
    isNode() {
      return EASY_ENV_IS_NODE;
    }
  }
}
</script>