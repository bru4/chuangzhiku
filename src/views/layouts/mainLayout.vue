<template>
  <Row id="app" class="main-layout">
      <Col :span="leftSpan" class="left-panel"></Col>
      <Col :span="rightSpan"></Col>
  </Row>
</template>

<script>
import '@/assets/styles/layout/mainLayout.scss'

export default {
  name: 'mainLayout',
  data () {
    return {
      leftSpan: 4,
      rightSpan: 20
    }
  },
  computed: {},
  methods: {}
}
</script>
