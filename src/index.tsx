import * as React from 'react';
import {getKeyFrameName} from './custom/Keyframes'



export interface Transit {
   name: "FADE" | "SLIDE-RIGHT" | "SLIDE-LEFT" | "SLIDE-TOP" | "SLIDE-BOTTOM" | "ROTATE" ;
   duration?:String,
   children:JSX.Element
};


 export const Transit:React.FunctionComponent<Transit> = props => {
    const {children ,name,duration} = props;
   
      const [currentStyle,setCurrentStyle] = React.useState({
         animationName: "",
         animationTimingFunction: '',
         animationDuration: '',
         animationDelay: '',
         animationIterationCount: 1,
         animationDirection: '',
         animationFillMode: ''
      })
   
    React.useEffect(()=>{
      let styleSheet = document.styleSheets[0];
 
      let animationName = `${name}${Math.round(Math.random() * 100)}`;
      
      let keyframes = getKeyFrameName(animationName,name);
   
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      console.log(animationName);
     
      let tempAniName = animationName;
      setCurrentStyle({
         animationName: tempAniName,
         animationTimingFunction: 'ease-in-out',
         animationDuration: duration?`${duration}s`:"3s",
         animationDelay: '0.0s',
         animationIterationCount: 1,
         animationDirection: 'normal',
         animationFillMode: 'forwards'
      })
    },[])



    return (
       <div style={currentStyle}>
            {children}
       </div>
    );
};





