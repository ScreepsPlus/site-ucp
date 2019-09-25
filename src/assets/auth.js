import _axios from 'axios'

const SECOND = 1000
const MINUTE = 60 * SECOND
const CHECK_TIME = 5 * MINUTE
const CHECK_INTERVAL = 15 * MINUTE
const CHECK_MIN_TIME = MINUTE

const auth = {
  user: null,
  lastCheck: 0,
  async check () {
    if (this.user && this.lastCheck > Date.now() - CHECK_MIN_TIME) {
      return true
    }
    this.lastCheck = Date.now()
    try {
      const user = await _axios.get('/api/user/me')
      this.user = user
      return true
    } catch (e) {
      this.user = null
      return false
    }
  },
  async loggedIn () {
    if (!this.user || this.lastCheck < Date.now() - CHECK_TIME) {
      return this.check()
    }
    return true
  },
  async logout () {
    const { data: { status } } = await _axios.post('/api/auth/logout', {})
    if (status === 'success') {
      this.user = null
      this.lastCheck = 0
    }
  }
}
setInterval(() => auth.check(), CHECK_INTERVAL)
export default auth
