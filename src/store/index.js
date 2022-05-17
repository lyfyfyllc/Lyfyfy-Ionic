import { createStore } from 'vuex'

export default createStore({
  state: {
    logMsg: '',
    apiKey: false,
    pageLog: false,
    apiToken: false,
    currentFile: '',
    pageLogLink: '',
    pageLogHref: '',
    sessionEmail: '',
    showReply: false,
    showFilter: false,
    showOptions: false,
    showSidebar: false,
    SigninError: false,
    showPageLog: false,
    pageLogMessage: '',
    sessionPassword: '',
    restrictions: 'off',
    homeSession: 'videos',
    clientSideID: 'abc123',
    username: 'myUsername',
    playlistLooping: false,
    showVideoAnchor: false,
    isActiveUserLoggedIn: false,
    MainServer: 'https://api.lyfyfy.com',
    // MainServer: 'http://localhost:8090',
    SigninServer: 'http://localhost:8087',
  },
  mutations: {
    setHomeSession(state, session) {
      state.homeSession = session
    },
    setLogMsg(state, msg) {
      state.logMsg = msg
    },
    setSigninError(state) {
      state.SigninError = true
    },
    sunsetSigninError(state) {
      state.SigninError = false
    },
    toggleVideoAnchor(state) {
      state.showVideoAnchor = !state.showVideoAnchor
    },
    toggleReply(state) {
      if (state.isActiveUserLoggedIn && state.clientSideID && state.apiKey) {
        state.showReply = !state.showReply
      } else {
        state.pageLog = true
        setTimeout(() => { state.pageLog = false }, 5000)
      }
    },
    toggleOptions(state) {
      state.showOptions = !state.showOptions
    },
    toggleFilter(state) {
      state.showFilter = !state.showFilter
    },
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar
    },
    setAuthenticateUser(state, userCreds) {
      state.isActiveUserLoggedIn = true
      state.username = userCreds.username
      state.apiKey = userCreds.access_key
      state.clientSideID = userCreds.clientSideID
      window.localStorage.setItem('apiKey', userCreds.access_key)
      window.localStorage.setItem('username', userCreds.username)
      window.localStorage.setItem('clientSideID', userCreds.clientSideID)

      if (userCreds.redirect) window.location.href = userCreds.redirect
      else window.location.href = '/'
    },
    getAuthUser(state) {
      if (window.localStorage.getItem('apiKey') && window.localStorage.getItem('apiKey').toLowerCase() !== "undefined") {
        state.isActiveUserLoggedIn = true
        state.apiKey = window.localStorage.getItem('apiKey')
        state.apiToken = window.localStorage.getItem('apiToken')
        state.username = window.localStorage.getItem('username')
        state.clientSideID = window.localStorage.getItem('clientSideID')
      } else if (!window.localStorage.getItem('apiToken')) {
        state.apiToken = 'abc123'
        window.localStorage.setItem('apiToken', 'abc123')
      } else {
        state.apiToken = window.localStorage.getItem('apiToken')
      }
    },
    ativatePageLog(state, logObj) {
      state.showPageLog = true
      state.pageLogHref = logObj.href
      state.pageLogLink = logObj.link
      state.pageLogMessage = logObj.msg

      setTimeout(() => {
        state.showPageLog = false
      }, 5000)

    },
    togglePageLog(state, msg, link = false) {
      state.showPageLog = !state.showPageLog

      if (state.showPageLog) state.pageLogMessage = msg
      if (!state.showPageLog) state.pageLogMessage = ''
    }
  },
  getters: {
    checkComponentStateActive(state) {
      if (state.showReply) return true
      else if (state.showFilter) return true
      else if (state.showOptions) return true
      else if (state.showSidebar) return true
      else return false
    },
  },
  actions: {
    // setLogMsg(context, msg) {
    //   context.commit('logMsg', msg)
    // },
    // setAuthenticateUser(context) {
    //   context.commit('authenticateUser')
    // },
    // setHomeSession(context) {
    //   context.commit('setHomeSession')
    // },
    // setSigninError(context) {
    //   context.commit('setSigninError')
    // },
    // sunsetSigninError(context) {
    //   context.commit('sunsetSigninError')
    // },
    // toggleSidebar(context) {
    //   context.commit('toggleSidebar')
    // }
  },
  modules: {
  }
})
