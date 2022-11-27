<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const activeIndex = ref(route.path)
console.log(route.path)
const handleSelect = (key: string, keyPath: string[]) => {
  router.push(key)
}
const isMobileNavbarShow = ref(false)
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
    <van-nav-bar>
      <template #left>
        <van-icon name="bars" size="25" color="#000000" @click="isMobileNavbarShow = true"/>
      </template>
      <template #title>
        <img src="https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/4c9bc131-9503-4708-b528-e19b66f0eb80.webp" alt="" width="58" height="58"/>
      </template>
    </van-nav-bar>
    <van-popup :show="isMobileNavbarShow" position="top" :style="{ width: '100vw' }">
      <div class="mobile-navbar-logo">
        <img src="https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/4c9bc131-9503-4708-b528-e19b66f0eb80.webp" alt="" class="mobile-img"/>
        <van-icon name="cross" size="20" @click="isMobileNavbarShow = false"/>
      </div>
      <div :class="route.path === '/' ? 'mobile-navbar-active' : 'mobile-navbar'" @click="router.push('/');isMobileNavbarShow = false">
        <span>首页</span>
      </div>
      <div :class="route.path === '/team' ? 'mobile-navbar-active' : 'mobile-navbar'" @click="router.push('/team');isMobileNavbarShow = false">
        <span>团队介绍</span>
      </div>
      <div :class="route.path === '/process' ? 'mobile-navbar-active' : 'mobile-navbar'" @click="router.push('/process');isMobileNavbarShow = false">
        <span>招新流程</span>
      </div>
    </van-popup>
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
:deep(.van-nav-bar) {
  display: none;
}

@media screen and (max-width: 768px) {
  :deep(.el-menu) {
    display: none;
  }
  :deep(.van-nav-bar) {
    display: block;
    height: 58px;
  }
  :deep(.van-nav-bar__content) {
    height: 58px !important;
  }
  .mobile-navbar {
    height: 2.5rem;
    margin: 1rem 0rem;
    padding: 0 1.5rem;
    line-height: 2.5rem;
    /*border-bottom: 1px solid #e8e8e8;*/
  }
  .mobile-navbar-active {
    height: 2.5rem;
    margin: 1rem 0rem;
    padding: 0 1.5rem;
    line-height: 2.5rem;
    /*border-bottom: 1px solid #e8e8e8;*/
    color: #0052D9
  }
  .mobile-navbar-logo {
    height: 3rem;
    margin: 1rem 0rem;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    /*border-bottom: 1px solid #e8e8e8;*/
  }
  :deep(.van-icon) {
    line-height: 2.5rem;
  }
  .mobile-img {
    height: 40px;
    width: 40px;
  }
}
</style>
