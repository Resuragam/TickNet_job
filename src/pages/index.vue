<script setup lang="ts">
const job = reactive([
  {
    id: 1,
    name: '实习生',
    grade: '21级',
    collect: '研发',
    introduce: [
      '1.积极参加工作室的研发沙龙以及会议、活动',
      '2.能利用课余时间努力提高自己的技术水平',
    ],
  },
  {
    id: 2,
    name: '实习生',
    grade: '21级',
    collect: '研发',
    introduce: [
      '1.积极参加工作室的研发沙龙以及会议、活动',
      '2.能利用课余时间努力提高自己的技术水平',
    ],
  },
])
</script>

<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
  </van-swipe>
  <div class="job-container">
    <div class="job-title">
      招新岗位及要求
    </div>
    <div>
      <div v-for="it in job" :key="it.id" class="job-box">
        <div class="job-container-name">
          <span>{{ it.name}}</span>
        </div>
        <div class="job-container-tags">
          <span>{{ it.grade}}</span>
          <span>{{ it.collect }}</span>
        </div>
        <div>
          <div v-for="introduceItem in it.introduce" :key="introduceItem" class="job-container-introduce">
            <span>{{introduceItem}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 340px;
  width: 100vw;
  text-align: center;
  background-color: #39a9ed;
}
.job-container {
  margin: 3rem auto 0;
  width: 60vw;
}
.job-title {
  color: #1f2329;
  font-weight: 600;
  font-size: 2rem;
  padding: 1rem 2rem;
}
.job-box {
  width: 80vw;
  padding: 1rem 2rem;
}
.job-container-name {
  color: #1f2329;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0.5rem 0 ;
}
.job-container-tags {
  margin: 0rem 0rem 0.75rem;
}
.job-container-introduce {
  color: #8f959e;
  line-height: 1.5rem;
}
</style>
