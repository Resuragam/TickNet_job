import request from '~/utils/request'

export function submitData(data: any) {
  return request({
    url: '/api/v1/submit',
    method: 'post',
    data,
  })
}

export function findStatus(params: any) {
  return request({
    url: '/api/v1/find',
    method: 'get',
    params,
  })
}
