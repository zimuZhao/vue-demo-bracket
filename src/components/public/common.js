import Q from 'q'
import ApiData from 'public/demo-data'

export default {
  navList: () => {
    return Q.Promise((resolve, reject) => {
      resolve(ApiData.common.navData)
    })
  },
  userName: () => {
    return Q.Promise((resolve, reject) => {
      resolve(ApiData.common.userName)
    })
  },
  footerText: () => {
    return Q.promise((resolve, reject) => {
      resolve(ApiData.common.footerText)
    })
  }

}

