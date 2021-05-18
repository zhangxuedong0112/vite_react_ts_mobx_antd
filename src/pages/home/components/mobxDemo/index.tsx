import { Button } from "antd";
import { observer } from "mobx-react";
import DemoStore from "@/stores/demo";
import React from "react";

const MobxDemo:React.FC = (props:any)=>{
  const {num, addNum, count, addCount} = DemoStore;
  return <div>
    num:{num} --
    count:{count}
    <div>
      <Button onClick={addNum}>Add</Button>

      <Button onClick={addCount}>AddCount</Button>
    </div>
  </div>
}

export default observer(MobxDemo);