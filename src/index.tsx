import * as React from 'react';
import { Constants } from './custom/Constants';
import {getKeyFrameName} from './custom/Keyframes'

 const CONSTANT = new Constants();

export interface Transit {
   name: "FADE" | "SLIDE-RIGHT" | "SLIDE-LEFT" | "SLIDE-TOP" | "SLIDE-BOTTOM" | "ROTATE-RIGHT"| "ROTATE-LEFT" | "BOUNCE" ;
   duration?:string,
   children:JSX.Element,
   interationCount?:number,
   timing ?:'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' ,
   onlyHover?:boolean
};


 export const Transit:React.FunctionComponent<Transit> = props => {
   
   const {children , name, duration , interationCount, timing, onlyHover } = props;
   const animationName = `${name}${Math.round(Math.random() * 100)}`
   const [currentStyle,setCurrentStyle] = React.useState({
      animationName: '',
      animationTimingFunction: '',
      animationDuration: '',
      animationDelay: '',
      animationIterationCount: 0,
      animationDirection: '',
      animationFillMode: ''
   })
   
   const [tempStyle,setTempStyle] = React.useState({
      animationName: '',
      animationTimingFunction: '',
      animationDuration: '',
      animationDelay: '',
      animationIterationCount: 0,
      animationDirection: '',
      animationFillMode: ''
   })
 React.useEffect(()=>{
   let styleSheet = document.styleSheets[0];


   
   let keyframes = getKeyFrameName(animationName,name);
   if(onlyHover){
      let newStyle = CONSTANT.getAnimationStyles(
         animationName,
         (duration?duration:'1'),
         name,
         (interationCount?interationCount:1),
         (timing ? timing : 'ease-in-out')
         )
         setTempStyle(newStyle)
         styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
   }else{
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  
      let newStyle = CONSTANT.getAnimationStyles(
         animationName,
         (duration?duration:'1'),
         name,
         (interationCount?interationCount:1),
         (timing ? timing : 'ease-in-out')
         )
      setCurrentStyle(newStyle);
   }
   
   console.log(styleSheet)
 },[])

 const hoverhandler = (h:boolean)=>{
  
   if(h){
      setCurrentStyle(tempStyle)
   }else{
      setCurrentStyle({
         animationName: '',
         animationTimingFunction: '',
         animationDuration: '',
         animationDelay: '',
         animationIterationCount: 0,
         animationDirection: '',
         animationFillMode: ''
      })
   }
 }


 return (
    <div id={animationName+"_div"} style={currentStyle} 
    onMouseOverCapture={e=>{
      e = e;
      hoverhandler(true)
    }}  
    onMouseLeave={(e)=>{
      e = e;
      hoverhandler(false)
    }}
    >
         {children}
    </div>
 );
};





