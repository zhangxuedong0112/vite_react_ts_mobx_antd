export default {
  fangdou(cb:any, ts:any){
    let stm:any;

    return function(props:any){
      if(stm){
        clearTimeout(stm);
        stm = null;
        return;
      }

      stm = setTimeout(()=>{
        cb(props);
      }, ts);
    }
  }
}