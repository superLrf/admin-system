// 储存session的值
const sStorage = window.sessionStorage

export default {
  session: {
    set(key, value) {
      sStorage.setItem(key, value)
    },
    get(key) {
      return JSON.parse(sStorage.getItem(key) || null)
    },
    remove(key) {
      sStorage.removeItem(key)
    },
    clear() {
      sStorage.clear()
    }
  }
}
