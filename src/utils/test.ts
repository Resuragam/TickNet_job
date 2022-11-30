import { Toast } from 'vant'
import { submitData } from '~/api'

const onSubmitTest = async () => {
  for (let i = 10; i < 100; i++) {
    submitData({
      name: 'test',
      sex: 'test',
      number: `11111432${i}`,
      grade: 'test',
      major: 'test',
      phone: `111114312${i}`,
      email: 'test',
      post: 'test',
      reason: 'test',
      introduce: 'test',
    }).then((res: any) => {
      if (res.code === 200)
        Toast.success('提交成功')
      else
        Toast.fail(res.msg)
    })
  }
}

export default onSubmitTest
