export function setLocalData(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // console.log("error", error)
    }
  }
  
  export function removeLocalData(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // console.log("error", error)
    }
  }
  export function getLocalData(key) {
    try {
      let data = localStorage.getItem(key);
      return data
    } catch (error) {
      // console.log("error", error)
    }
  }