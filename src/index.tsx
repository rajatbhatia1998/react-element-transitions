import * as React from 'react';
import { Constants } from './custom/Constants';
import {getKeyFrameName} from './custom/Keyframes'

 const CONSTANT = new Constants();

export interface Transit {
   name: "FADE" | "SLIDE-RIGHT" | "SLIDE-LEFT" | "SLIDE-TOP" | "SLIDE-BOTTOM" | "ROTATE-RIGHT"| "ROTATE-LEFT" | "BOUNCE" ;
   duration?:string,
   children:JSX.Element,
   interationCount?:number,
   timing ?:'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' 
};


 export const Transit:React.FunctionComponent<Transit> = props => {
   const {children , name, duration , interationCount, timing} = props;
   
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
      
         let newStyle = CONSTANT.getAnimationStyles(
            animationName,
            (duration?duration:'1s'),
            name,
            (interationCount?interationCount:1),
            (timing ? timing : 'easi-in-out')
            )
   
         setCurrentStyle(newStyle);
       },[])



    return (
       <div style={currentStyle}>
            {children}
       </div>
    );
};





