import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addUser (params) {
    console.log('registering:' + JSON.stringify(params))
    var result = Api().post('register', params)
    return result
  },
  loginUser (params) {
    console.log('logging in:' + JSON.stringify(params))
    var result = Api().post('login', params)
    return result
  }
}
