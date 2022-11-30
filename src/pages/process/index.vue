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
    <div class="flex justify-center items-center icon-container" >
      <van-icon name="arrow" size="30"/>
    </div>
    <div class="process-item">
      <img src="/write.png" width="100">
      <div class="mt-1rem">
        12月8日
      </div>
      <div class="mt-1rem font-bold">
        进行笔试
      </div>
    </div>
    <div class="flex justify-center items-center icon-container" >
      <van-icon name="arrow" size="30"/>
    </div>
    <div class="process-item">
      <img src="/face.png" width="100">
      <div class="mt-1rem">
        12月9日
      </div>
      <div class="mt-1rem font-bold">
        进行面试
      </div>
    </div>
    <div class="flex justify-center items-center icon-container" >
      <van-icon name="arrow" size="30"/>
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
  /*width: 200px;*/
  /*height: 200px;*/
  align-items: center;
}
@media screen and (max-width: 768px) {
  .img-container {
    display: none;
  }
  .img {
    display: block;
  }
  .process-container {
    width: 100vw;
  }
  :deep(.icon-container) {
    display: none;
  }
  .process-item {
    margin-bottom: 2rem;
  }
  .process-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
