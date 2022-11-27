<script setup lang="ts">
</script>

<template>
  <div class="img-container" />
  <img src="/process2.png" class="img">
  <div class="process-title">
    招新流程
  </div>
  <div class="process-container">
    <div class="process-item">
      <img src="/apply.png" width="100">
      <div class="mt-1rem">
        12月1日开始
      </div>
      <div class="mt-1rem font-bold">
        申请岗位
      </div>
    </div>
    <div class="flex justify-center items-center" >
      <van-icon name="arrow" size="30"/>
      <van-icon name="arrow-down" size="30"/>
    </div>
    <div class="process-item">
      <img src="/write.png" width="100">
      <div class="mt-1rem">
        12月8日开始
      </div>
      <div class="mt-1rem font-bold">
        准备笔试
      </div>
    </div>
    <div class="flex justify-center items-center" >
      <van-icon name="arrow" size="30"/>
      <van-icon name="arrow-down" size="30"/>
    </div>
    <div class="process-item">
      <img src="/face.png" width="100">
      <div class="mt-1rem">
        12月9日
      </div>
      <div class="mt-1rem font-bold">
        准备面试
      </div>
    </div>
    <div class="flex justify-center items-center" >
      <van-icon name="arrow" size="30"/>
      <van-icon name="arrow-down" size="30"/>
    </div>
    <div class="process-item">
      <img src="/finish.png" width="100">
      <div class="mt-1rem">
        12月14日
      </div>
      <div class="mt-1rem font-bold">
        公布招新结果
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  background-position: center;
  background-image: url("/process.png");
  height: 300px;
}
.img {
  display: none;
}
.process-title {
  width: 80vw;
  margin: 3rem auto;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.process-container {
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.process-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 200px;
  height: 200px;
  align-items: center;
}
:deep(.van-icon-arrow-down) {
  display: none;
}
@media screen and (max-width: 768px) {
  .img-container {
    display: none;
  }
  .img {
    display: block;
  }
  .process-container {
    width: 200px;
    flex-wrap: wrap;
  }
  :deep(.van-icon-arrow) {
    display: none;
  }
  :deep(.van-icon-arrow-down) {
    display: block;
    margin: 1rem 0;
  }
}
</style>
