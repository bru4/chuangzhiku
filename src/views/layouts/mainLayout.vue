<template>
  <Row class="main-layout" id="app">
    <Menu mode="horizontal" theme="dark" active-name="1">
        <Menu-item name="1">
            <i class="fa fa-dashboard"></i>
            控制面板
        </Menu-item>
        <Menu-item name="2">
            <i class="fa fa-envira"></i>
            品牌管理
        </Menu-item>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <Menu-group title="使用">
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item name="3-4">用户留存</Menu-item>
                <Menu-item name="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu>
        <Submenu name="3" class="pull-right">
            <template slot="title">
                <i class="fa fa-user-o"></i>
                管理员
            </template>
            <Menu-group title="设置">
                <Menu-item name="3-1">账号设置</Menu-item>
            </Menu-group>
            <Menu-group title="注销">
                <Menu-item name="3-2">注销</Menu-item>
            </Menu-group>
        </Submenu>
    </Menu>

    <Row type="flex" justify="center" class="main-layout-container">
        <Col span="20">内容</Col>
    </Row>
  </Row>
</template>

<script>
import '@/assets/styles/layout/mainLayout.scss'

export default {
  name: 'mainLayout',
  data () {
    return {
    }
  }
}
</script>
