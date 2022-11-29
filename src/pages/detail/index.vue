<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const job = reactive([
  {
    id: 1,
    name: '实习生',
    grade: ['22级'],
    isDevelop: true,
    isOperate: true,
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
    grade: ['21级', '22级'],
    isDevelop: true,
    isOperate: false,
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
    grade: ['21级', '22级'],
    isDevelop: true,
    isOperate: false,
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
    grade: ['21级', '22级'],
    isDevelop: false,
    isOperate: true,
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
    grade: ['21级', '22级'],
    isDevelop: false,
    isOperate: true,
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
    grade: ['21级', '22级'],
    isDevelop: false,
    isOperate: true,
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
const jobInfo = computed(() => {
  return job[(route.query.index) as any - 1]
})
const otherJob = computed(() => {
  return job.filter(item => item.id !== Number(route.query.index))
})
const toDetail = (index: number) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
  router.push({
    path: '/detail',
    query: {
      index,
    },
  })
}
const toApply = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
  router.push({
    path: '/apply',
    query: {
      index: route.query.index,
    },
  })
}
</script>

<template>
  <div class="detail-container">
    <div class="jobInfo-container">
      <div class="jobInfo-container-name">
        <span>{{ jobInfo.name }}</span>
      </div>
      <div class="jobInfo-container-tags">
        <div class="job-container-tags">
          <van-tag v-for="gradeItem in jobInfo.grade" :key="gradeItem" type="primary" size="large" plain class="mr-1rem">
            {{ gradeItem }}
          </van-tag>
          <van-tag v-if="jobInfo.isDevelop" type="primary" size="large" plain class="mr-1rem" >
            研发组
          </van-tag>
          <van-tag v-if="jobInfo.isOperate" type="primary" size="large" plain class="mr-1rem" >
            运营组
          </van-tag>
        </div>
      </div>
      <div class="jobInfo-introduce">
        岗位介绍
      </div>
      <div class="jobInfo-block">
        <div v-for="introduce in jobInfo.introduce" :key="introduce" class="jobInfo-container-introduce">
          <span>{{ introduce }}</span>
        </div>
      </div>
      <div class="jobInfo-introduce">
        岗位要求
      </div>
      <div class="jobInfo-block">
        <div v-for="demand in jobInfo.demand" :key="demand" class="jobInfo-container-demand">
          <span>{{ demand }}</span>
        </div>
      </div>
      <div class="mt-2rem mb-1rem">
        <van-button round type="primary" @click="toApply()">
          <div class="w-8rem">
            申请
          </div>
        </van-button>
      </div>
    </div>
    <el-divider border-style="dashed" />
    <div class="jobInfo-introduce px-2rem">
      其他岗位
    </div>
    <div class="other-job">
      <div>
        <div v-for="it in otherJob" :key="it.id" class="job-box" @click="toDetail(it.id)">
          <div class="job-container-name">
            <span>{{ it.name }}</span>
          </div>
          <div class="job-container-tags">
            <van-tag v-for="gradeItem in it.grade" :key="gradeItem" type="primary" size="large" plain class="mr-1rem">
              {{ gradeItem }}
            </van-tag>
            <van-tag v-if="it.isDevelop" type="primary" size="large" plain class="mr-1rem" >
              研发组
            </van-tag>
            <van-tag v-if="it.isOperate" type="primary" size="large" plain class="mr-1rem" >
              运营组
            </van-tag>
          </div>
          <div>
            <div v-for="introduceItem in it.introduce" :key="introduceItem" class="job-container-introduce">
              <span>{{ introduceItem }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  width: 80vw;
  margin: 0 auto;
  padding: 2rem 0;
}
.jobInfo-container {
  border-radius: 0.5rem;
  padding: 2rem;
  /*box-shadow: 0px 2px 10px rgb(54 97 174 / 10%);*/
  width: 100%;
  background-color: #fff;
}
.jobInfo-container-name {
  color: #1f2329;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0.5rem 0 ;
}
.jobInfo-container-tags {
  color: #8f959e;
  margin: 0rem 0rem 0.75rem;
}
.jobInfo-introduce::before {
  display: inline;
  content: '';
  border-left: 4px #3370ff solid;
  height: 20px;
  margin-right: 0.5rem;
}
.jobInfo-introduce {
  color: #1f2329;
  font-weight: 600;
  font-size: 1rem;
  margin: 2rem 0 1rem 0;
}
.jobInfo-container-introduce {
  color: #8f959e;
  line-height: 1.5rem;
  font-size: 0.875rem;
}
.jobInfo-container-demand {
  color: #8f959e;
  line-height: 1.5rem;
  font-size: 0.875rem;
}
.job-box {
  padding: 1rem 2rem;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 0.5rem;
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
  .detail-container {
    margin: 0 auto;
    width: 100vw;
  }
  :deep(.el-divider--horizontal) {
    width: 80vw;
    margin: 2rem auto;
  }
}
</style>
