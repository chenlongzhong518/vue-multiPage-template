const api = {
  Analysis:'/media/analysis',
}

import request from '@/utils/request'

export function Analysis(data){
  return request({
    url: api.Analysis,
    method: 'get',
    data
  })
}
