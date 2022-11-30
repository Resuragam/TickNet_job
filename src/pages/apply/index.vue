<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { Dialog, Toast } from 'vant'
import { findStatus, submitData } from '~/api'
// import onSubmitTest from '../../../src/utils/test'
const route = useRoute()
const job = reactive([
  {
    id: 1,
    name: '实习生',
    grade: ['21级', '22级'],
    isDevelop: true,
    isOperate: false,
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
const jobInfo = reactive(job[(route.query.index) as any - 1])

const formData = reactive({
  name: '',
  sex: '',
  number: '',
  grade: '',
  major: '',
  phone: '',
  email: '',
  post: '',
  reason: '',
  introduce: '',
})

const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  sex: [
    { required: true, message: '请选择性别', trigger: 'change' },
  ],
  number: [
    { required: true, message: '请输入学号', trigger: 'blur' },
    { min: 10, max: 10, message: '请输入学号', trigger: 'blur' },
  ],
  grade: [
    { required: true, message: '请选择年级', trigger: 'change' },
  ],
  major: [
    { required: true, message: '请输入专业', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: '请输入电话号码', trigger: 'blur' },
    { min: 11, max: 11, message: '请输入电话号码', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
  reason: [
    { required: true, message: '请输入加入原因', trigger: 'blur' },
  ],
  introduce: [
    { required: true, message: '请输入自我介绍', trigger: 'blur' },
  ],
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    if (valid) {
      findStatus({
        number: formData.number,
      }).then((res: any) => {
        if (res.code === 300) {
          submitData({
            name: formData.name,
            sex: formData.sex,
            number: formData.number,
            grade: formData.grade,
            major: formData.major,
            phone: formData.phone,
            email: formData.email,
            post: jobInfo.name,
            reason: formData.reason,
            introduce: formData.introduce,
          }).then((res: any) => {
            if (res.code === 200)
              Toast.success('提交成功')
            else
              Toast.fail(res.msg)
          })
        }
        else if (res.code === 301) {
          Dialog.confirm({
            message: '是否覆盖之前的提交信息？',
          }).then(() => {
            submitData({
              name: formData.name,
              sex: formData.sex,
              number: formData.number,
              grade: formData.grade,
              major: formData.major,
              phone: formData.phone,
              email: formData.email,
              post: jobInfo.name,
              reason: formData.reason,
              introduce: formData.introduce,
            }).then((res: any) => {
              if (res.code === 200)
                Toast.success('提交成功')
              else
                Toast.fail(res.msg)
            })
          }).catch(() => {})
        }
      })
    }
    else { /* empty */ }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}
</script>

<template>
  <div class="">
    <div class="apply-container">
      <div class="jobInfo-container-name">
        <span>{{ jobInfo.name }}</span>
      </div>
      <div class="mt-1rem">
        <van-tag v-for="gradeItem in jobInfo.grade" :key="gradeItem" type="primary" size="large" plain class="mr-1rem tag1">
          {{ gradeItem }}
        </van-tag>
        <van-tag v-if="jobInfo.isDevelop" type="primary" size="large" plain class="mr-1rem">
          研发组
        </van-tag>
        <van-tag v-if="jobInfo.isOperate" type="primary" size="large" plain class="mr-1rem">
          运营组
        </van-tag>
        <el-form
          ref="ruleFormRef"
          :model="formData"
          label-position="top"
          label-width="100px"
          style="max-width: 460px"
          :rules="rules"
        >
          <div class="apply-info-box">
            <div class="apply-info-title">
              基本信息
            </div>
            <div class="apply-info">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="formData.name" placeholder="请输入" maxlength="10"/>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="formData.sex">
                  <el-radio label="男" size="large">
                    男
                  </el-radio>
                  <el-radio label="女" size="large">
                    女
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="年级" prop="grade">
                <el-radio-group v-model="formData.grade">
                  <el-radio label="22级" size="large">
                    22级
                  </el-radio>
                  <el-radio label="21级" size="large">
                    21级
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="学号" prop="number">
                <el-input v-model="formData.number" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="专业" prop="major" >
                <el-input v-model="formData.major" placeholder="请输入" maxlength="30"/>
              </el-form-item>
              <el-form-item label="电话号码" prop="phone">
                <el-input v-model="formData.phone" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="邮箱" prop="email" >
                <el-input v-model="formData.email" placeholder="请输入" maxlength="40" />
              </el-form-item>
            </div>
          </div>
          <el-divider border-style="dashed" />
          <div class="apply-info-box">
            <div class="apply-info-title">
              加入原因
            </div>
            <div class="apply-info">
              <el-form-item label="加入原因" prop="reason">
                <el-input v-model="formData.reason" type="textarea" :rows="10" placeholder="请输入" maxlength="500"/>
              </el-form-item>
            </div>
          </div>
          <el-divider border-style="dashed" />
          <div class="apply-info-box">
            <div class="apply-info-title">
              自我介绍
            </div>
            <div class="apply-info">
              <el-form-item label="自我介绍" prop="introduce">
                <el-input v-model="formData.introduce" type="textarea" :rows="10" placeholder="请输入" maxlength="500"/>
              </el-form-item>
            </div>
          </div>
          <el-form-item class="apply-button-box">
            <el-button type="primary" round size="large" @click="onSubmit(ruleFormRef)">
              提交申请
            </el-button>
            <el-button round size="large" @click="resetForm(ruleFormRef)">
              重置表单
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.apply-container {
  width: 80vw;
  margin: 0 auto 3rem;
}
:deep(.el-form-item__label) {
  font-size: 1rem;
}
.jobInfo-container-name {
  color: #1f2329;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 2rem 0 0;
}
.apply-info-box {
  padding: 2rem 2rem;
  display: flex;
  width: 80vw;
  margin: 2rem 0;
  background-color: #fff;
  border-radius: 0.5rem;
}
.apply-info-title {
  width: 20vw;
  font-weight: bold;
  font-size: 1.25rem;
}
.apply-info-title::before {
  display: inline;
  content: '';
  border-left: 4px #3370ff solid;
  height: 20px;
  margin-right: 0.5rem;
}
.apply-info {
  width: 45vw;
}
:deep(.el-form-item__label) {
  font-weight: bold;
  color: #121212;
}
.apply-button-box {
  width: 80vw;
  padding: 4rem 0 10rem;
}
:deep(.el-divider) {
  width: 80vw !important;
}
@media screen and (max-width: 768px) {
  .apply-container {
    width: 100vw;
  }
  .tag1:nth-child(1) {
    margin-left: 2rem;
  }
  .jobInfo-container-name {
    padding: 2rem 2rem 0;
    margin: 0;
  }
  .apply-info {
    width: 100%;
  }
  .apply-info-box {
    display: block;
    width: 100vw;
    background-color: #fff;
  }
  .apply-info-title {
    margin-bottom: 1rem;
    width: 100%;
  }
  :deep(.el-divider) {
    width: 100vw !important;
  }
  .apply-button-box {
    margin-left: 2rem;
  }
}
</style>
