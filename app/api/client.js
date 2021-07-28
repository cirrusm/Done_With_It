import {create} from 'apisauce'

const apiClient = create({
  baseURL: 'http://172.116.150.34:9000/api/listings'
})

apiClient.get('/listings').then(response => {
  if(!response.ok){
    response.problem
  }
})