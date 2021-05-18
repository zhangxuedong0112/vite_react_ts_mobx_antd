import { makeAutoObservable } from "mobx";

class DemoStore{
  constructor(){
    makeAutoObservable(this);
  }

  num=0;
  
  addNum = () => {
    this.num++;
  }

  count=0;
  addCount = () => {
    this.count++;
  }
}

export default new DemoStore();