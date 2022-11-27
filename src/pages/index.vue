<script setup lang="ts">
const router = useRouter()
const job = reactive([
  {
    id: 1,
    name: '实习生',
    grade: '22级',
    collect: '研发组 | 运营组',
    demand: [
      '1.热衷于技术的学习',
      '2.利用闲暇时间充实自己',
      '3.对互联网项目开发感兴趣',
      '4.对框架，组件库底层源码感兴趣',
    ],
    introduce: [
      '1.积极参加工作室的研发沙龙以及会议、活动',
      '2.能利用课余时间努力提高自己的技术水平',
    ],
  },
  {
    id: 2,
    name: '初级前端开发工程师',
    grade: '21级、22级',
    collect: '研发组',
    demand: [
      '1.熟悉HTML/CSS/JavaScript',
      '2.有Node.js/Vue.js/React.js/Augular.js、小程序学习经验之一优先',
    ],
    introduce: [
      '1.负责前端页面的开发、性能优化、上线部署',
      '2.与产品经理协商，提高用户界面交互使用体验',
      '3.参与前端技术体系建设，沉淀通用组件、工具和文档，探索前端新技术的实践落地。',
    ],
  },
  {
    id: 3,
    name: '初级后端开发工程师',
    grade: '21级、22级',
    collect: '研发组',
    demand: [
      '1.良好的代码风格和编码品味',
      '2.较好的产品意识，愿意将产品效果作为工作最重要的驱动因素',
      '3. 掌握WEB后台研发技术：协议、架构、存储、缓存、安全等',
      '4.积极乐观，认真负责，乐于协作',
    ],
    introduce: [
      '1.负责相关接口API文档的编写',
      '2.负责后端接口的实现',
      '3.负责与产品经理沟通，熟悉自己的业务逻辑',
    ],
  },
  {
    id: 4,
    name: '新媒体编辑',
    grade: '21-22级',
    collect: '运营组',
    demand: [
      '1.具有原创能力',
      '2.对Ps等主流图形编辑软件感兴趣',
      '3.熟悉秀米等微信编辑工具',
      '4.有责任心，对运营感兴趣',
    ],
    introduce: [
      '1.制作相关项目的易拉宝、海报、宣传单',
      '2.使用秀米等公众号编辑软件，制作相关项目及工作室招新的推文',
    ],
  },
  {
    id: 5,
    name: '策划',
    grade: '21-22级',
    collect: '运营组',
    demand: [
      '1.熟练掌握office办公软件',
      '2.有一定的文案撰写能力',
    ],
    introduce: [
      '1.负责官Q的维护',
      '2.负责会议的拍照记录以及工作室活动的宣传',
    ],
  },
  {
    id: 6,
    name: '产品经理',
    grade: '21级',
    collect: '研发',
    demand: [
      '1.对互联网产品设计感兴趣',
      '2.有互联网创新思维',
      '3.熟悉Axure，墨刀等产品原型图设计工具者优先',
    ],
    introduce: [
      '1.推动产品规划、设计和上线流程，制定产品演示和解决方案',
      '2.负责收集业务需求和用户反馈，完成产品设计和需求推进',
      '3.使用常见工具，进行相关的信息梳理，形成产品方案',
      '4.基于产品数据，进行功能上线后的效果追踪和迭代方向梳理',
      '5.负责产品功能测试，输出全面的测试文档，保证产品质量',
    ],
  },
])

const toDetail = (index: number) => {
  router.push({
    path: '/detail',
    query: {
      index,
    },
  })
}
</script>

<template>
  <el-carousel indicator-position="outside" height="300px">
    <el-carousel-item></el-carousel-item>
    <el-carousel-item></el-carousel-item>
  </el-carousel>
  <div class="job-container">
    <div class="job-title">
      招新岗位及要求
    </div>
    <div>
      <div v-for="it in job" :key="it.id" class="job-box" @click="toDetail(it.id)">
        <div class="job-container-name">
          <span>{{ it.name }}</span>
        </div>
        <div class="job-container-tags">
          <span>{{ it.grade }}</span>
          <span>{{ it.collect }}</span>
        </div>
        <div>
          <div v-for="introduceItem in it.introduce" :key="introduceItem" class="job-container-introduce">
            <span>{{ introduceItem }}</span>
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
:deep(.el-carousel__item:nth-child(3) ) {
  background-image: url("/swiper2.png");
  background-size: cover;
  background-position: center;
}
:deep(.el-carousel__item:nth-child(4) ) {
  background-image: url("/swiper3.png");
  background-size: cover;
  background-position: center;
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
  padding: 1rem 2rem;
}
.job-box:hover {
  box-shadow: 0 8px 24px 0 rgb(187 191 196 / 20%);
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
  font-size: 0.875rem;
}

@media screen and (max-width: 768px) {
  .job-container {
    margin: 0 auto;
    width: 100vw;
  }
  .job-title {
    border-bottom: 1px solid #e8e8e8;
  }
  .job-box {
    border-bottom: 1px solid #e8e8e8;
  }
}
</style>
