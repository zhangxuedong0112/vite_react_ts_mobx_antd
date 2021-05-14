import { observer } from "mobx-react";
import React from "react";
import DemoStore from "@/stores/demo"
import { Button } from "antd";

const Home:React.FC = (props)=>{
  const {num, addNum} = DemoStore;

  return <>
    home
    count:{num}
    <div>
      <Button onClick={addNum}>Add</Button>
    </div>
  </>
}

export default observer(Home);