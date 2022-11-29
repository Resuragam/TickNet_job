<script setup lang="ts">
</script>

<template>
  <div class="img-container" />
  <img src="/know2.png" class="img">
  <div class="intro-container-title">
    关于TickNet工作室
  </div>
  <div class="intro-container">
    <div>
      工作室是由一群有梦想、热爱互联网的同学们自发成立，团队成员来自各个学院
    </div>
    <div>
      工作方式： 以研究助成长，以推广促提高，以技术及管理提升能力，在研发推广实用、有趣、智能的互联网应用的道路上勇往直前
    </div>
    <div>
      我们的奋斗目标：建设成一个有影响力、促进个人成长、能够持续发展的学生团队
    </div>
    <div>
      在湖南科技大学企业号上线了自主研发多个产品，如校园闲置，失物招领、第二课堂、面对面签到等，产品日访问量大。为解决学生校园生活日常需求问题提供了便利。科大企业号关注人数近八万人。
    </div>
    <div>
      软件著作权专利6项，团队获奖国家级比赛证书共3项，省级比赛证书2项，市级证书1项，并获得2021年校十佳科技创新团队等校级奖项数10项
    </div>
    <div>
      团队许多老成员现就职于京东、哔哩哔哩、字节跳动等著名公司。
    </div>
  </div>
</template>

<style scoped>
.img-container {
  background-position: center;
  background-image: url("/konw.png");
  height: 300px;
}
.img {
  display: none;
}
.intro-container-title {
  width: 80vw;
  margin: 3rem auto;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.intro-container {
  width: 80vw;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 0.5rem;
  padding: 2rem;
}
.intro-container > div {
  line-height: 2.5rem;
}
@media screen and (max-width: 768px) {
  .img-container {
    display: none;
  }
  .img {
    display: block;
  }
  .intro-container {
    width: 100vw;
  }
}
</style>
