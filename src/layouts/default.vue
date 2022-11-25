<template>
  <header>
    <div class="header-navbar">
      <div class="flex items-center">
        <img src="https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/4c9bc131-9503-4708-b528-e19b66f0eb80.webp" alt="" width="40" height="40" />
        <span>
          TickNet
        </span>
      </div>
      <div class="flex">
        <span>
          123
        </span>
      </div>
    </div>
  </header>
  <main class="main-container">
    <RouterView />
  </main>
</template>

<style scoped>
.header-navbar {
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
}
@media screen and (max-width: 768px) {
  .header-navbar {
    padding: 0 2rem
  }
}
</style>
