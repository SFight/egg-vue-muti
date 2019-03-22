<template>
  <div id="container">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script type="text/babel">
export default {
  data() {
    return {}
  },
  mounted() {

  }
}
</script>