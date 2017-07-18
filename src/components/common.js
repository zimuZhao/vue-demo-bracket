import ApiData from './demo-data'

export default {
  menuName: () => {
    return Q.promise((resolve, reject) => {
      resolve(ApiData.common.menuName)
    })
  },
  userName: () => {
    return Q.Promise((resolve, reject) => {
      resolve(ApiData.common.userName)
    })
  },
  navList: () => {
    return Q.Promise((resolve, reject) => {
      resolve(ApiData.common.navData)
    })
  },
  leftMenu: () => {
    return Q.promise((resolve, reject) => {
      resolve(ApiData.common.leftMenu)
    })
  },
  footerText: () => {
    return Q.promise((resolve, reject) => {
      resolve(ApiData.common.footerText)
    })
  }

}

