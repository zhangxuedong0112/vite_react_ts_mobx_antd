import React from "react";
import MobxDemo from "./components/mobxDemo";
import ReqDemo from "./components/reqDemo";
import DuohangtxtDemo from "./components/duohangtxtDemo";
import { Button, Divider } from "antd";

const Home:React.FC = (props)=>{

  return <>
    <MobxDemo />

    <Divider />

    <ReqDemo />

    <Divider />

    <DuohangtxtDemo />
    
  </>
}

export default Home;