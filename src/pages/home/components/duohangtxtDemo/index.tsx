import React, { memo, useCallback } from "react";
import "./style.less";

const DuohangTxtDemo:React.FC = (props:any)=>{
  let txt = "事非经过不知难，成如容易却艰辛。2020年是“十三五”规划收官之年，也是新中国历史上极不平凡的一年。面对新冠肺炎疫情和外部各种不确定因素的冲击，我们经受住了挑战。那么，今年的经济工作做得怎么样，明年的经济工作怎么干？12月16日至18日，一年一度的中央经济工作会议在北京举行。习近平总书记在会上发表重要讲话，会议总结2020年经济工作，分析当前经济形势，对2021年经济工作作出部署。那么，会上总结了哪些经验？提出了哪些重点任务？有些什么新提法？今天我们要来解读。";

  /* 获取文本宽度 */
  let getTxtWidth = useCallback((txt:string, font?:string)=>{
    let c:any = document.createElement("canvas");
    let ctx = c.getContext("2d");

    ctx.font = "14px Arial";
    if(font){
      ctx.font = font; 
    }
    
    let width = ctx.measureText(txt).width;

    c = null;
    return width
  }, []);

  /* 截取文本 */
  let subTxtByBoxWidthAndFont = useCallback((txt:string, boxWidth:any, lineNum:any, font?:string)=>{
    let txtWidth = getTxtWidth(txt, font);
    /* 获取我要显示区域宽度跟总宽度比例 */
    let scaleWidth = txtWidth/(boxWidth*lineNum);
    if(scaleWidth < 1)return txt;

    /* 根据比例计算要截取长度 */
    let subIndex:any = txt.length/scaleWidth;

    txt = txt.substr(0, parseInt(subIndex));
    // console.log(txtWidth, scaleWidth)

    return txt;
  }, [])

  return <div className="txtBox">
    {/* {getTxtWidth(txt)} */}

    <p></p>

    {txt}
    
    <p></p>

    {/* 父元素宽度200 */}
    {subTxtByBoxWidthAndFont(txt, 200, 2.5)}
  </div>
}

export default memo(DuohangTxtDemo);