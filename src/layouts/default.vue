<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const activeIndex = ref(route.path)
const handleSelect = (key: string, keyPath: string[]) => {
  router.push(key)
}
</script>

<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img src="https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/4c9bc131-9503-4708-b528-e19b66f0eb80.webp" alt="" width="58" height="58"/>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/team">团队介绍</el-menu-item>
      <el-menu-item index="/process">招新流程</el-menu-item>
    </el-menu>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
:deep(.el-menu) {
  padding: 0 15vw;
}
.flex-grow {
  /*flex-grow: 1;*/
}
.logo {
  width:58px;
  height: 58px;
}
@media screen and (max-width: 768px) {

}
</style>
