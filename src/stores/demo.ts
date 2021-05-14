import { makeAutoObservable } from "mobx";

class DemoStore{
  constructor(){
    makeAutoObservable(this);
  }

  num=0;
  addNum=()=>{
    this.num++;
  }
}

export default new DemoStore();