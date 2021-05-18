import req from "@/req";
import help from "@/utils/help";
import { Button } from "antd";
import React, { memo, useCallback, useState } from "react";

const ReqDemo:React.FC = (props:any)=>{
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const go = useCallback(async (props:any)=>{
    console.log(props);
    setLoading(true)
    let res = await req.cache({
      url: "/users",
      method: "get"
    })

    setUsers(res);
    setLoading(false);
  }, [])

  return <div>
    <Button loading={loading} onClick={()=>go("123")}>go req</Button>
    <p>
      ------res------
    </p>
    <p>
      {JSON.stringify(users)}
    </p>
    <p>
      ------res------
    </p>

  </div>
}

export default memo(ReqDemo);