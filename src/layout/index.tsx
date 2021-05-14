import { Spin } from "antd";
import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";

const Layout:React.FC = (props:any)=>{
  return <>
    <Suspense fallback={<Spin />}>{/* 配合懒加载使用，fallback是在子组件初始化时显示 */}
      <div className="site-layout-background" style={{ padding: "0 ", minHeight: 380 }}>
          {renderRoutes(props.route.routes)}{/* 渲染子路由 */}
      </div>
    </Suspense>
  </>
}

export default Layout;