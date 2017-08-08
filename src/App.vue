<template>
  <main-layout v-if="mainLayoutDisplay" />
  <div id="app" v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import MainLayout from './views/layouts/mainLayout'

export default {
  name: 'app',

  components: {
    MainLayout
  },

  data: () => ({
    mainLayoutDisplay: true
  }),

  mounted: function mounted () {
    this.init()
  },

  methods: {
    init: function () {
      console.log('store', this.$store)
      console.log('router', this.$router)
    }
  },

  watch: {
    '$route' (to, from) {
      this.mainLayoutDisplay = !to.path.match(/\/sign_in/)
    }
  }
}
</script>
