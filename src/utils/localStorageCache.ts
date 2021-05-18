export default {
  get(key:any){
    let obj = localStorage.getItem(key);
    try {
      if(obj)obj = JSON.parse(obj);
    } catch (error) {
    }finally{
      return obj;
    }
  },
  set(key:any, val:any){
    try {
      if(typeof val === "object"){
        val = JSON.stringify(val);
      }
      localStorage.setItem(key, val);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}