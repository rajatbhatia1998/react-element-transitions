import { Constants } from "./Constants";

const CONSTANT = new Constants();
const getFadeKeyframe = (name: String) => {
    return `@-webkit-keyframes ${name} {
        0% {opacity: 0} 
        100% {opacity: 1}

    }`
}

const getBounceKeyFrame = (name: String) => {
    return `@-webkit-keyframes ${name} {
        from { transform: translate3d(0, 0, 0);}
        to { transform: translate3d(0, 200px, 0);}

    }`
}
const getRotateKeyframes = (rotateType: String,name:String) => {
    let keyframe = ""
    if(rotateType===CONSTANT.ROTATE_LEFT){
       keyframe =  `@-webkit-keyframes ${name} {
        0 {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
    
        }`
    }else if(rotateType===CONSTANT.ROTATE_RIGHT){
        keyframe =  `@-webkit-keyframes ${name} {
            0 {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
        
            }`
    }
    return keyframe
   
}

const getSlideKeyframe = (slideType: String,name:String) =>{
    let keyframe = ""
    if(slideType===CONSTANT.SLIDE_LEFT){
       keyframe =  `@-webkit-keyframes ${name} {
            0% { margin-right:100% ; opacity: 0}
            100% {margin-right:0% ; opacity: 1}
    
        }`
    } 
    if(slideType===CONSTANT.SLIDE_RIGHT){
        keyframe =  `@-webkit-keyframes ${name} {
             0% { margin-left:100% ; opacity: 0 }
             100% {margin-left:0% ; opacity: 1}
     
         }`
     }
     if(slideType===CONSTANT.SLIDE_TOP){
        keyframe =  `@-webkit-keyframes ${name} {
             0% { margin-bottom:100% ; opacity: 0 }
             100% {margin-bottom:0% ; opacity: 1}
     
         }`
     }
     if(slideType===CONSTANT.SLIDE_BOTTOM){
        keyframe =  `@-webkit-keyframes ${name} {
             0% { margin-top:100% ; opacity: 0}
             100% {margin-top:0% ; opacity: 1}
     
         }`
     }
     


    return keyframe;
    
}



function getKeyFrameName(name: string, type: String): string {
    let keyframe = "";
    if (type === CONSTANT.FADE) {
        keyframe = getFadeKeyframe(name)
    }
     if(type === CONSTANT.SLIDE_LEFT){
        keyframe = getSlideKeyframe(CONSTANT.SLIDE_LEFT,name)
    }
    if(type === CONSTANT.SLIDE_RIGHT){
        keyframe = getSlideKeyframe(CONSTANT.SLIDE_RIGHT,name)
    }
    if(type === CONSTANT.SLIDE_TOP){
        keyframe = getSlideKeyframe(CONSTANT.SLIDE_TOP,name)
    }
    if(type === CONSTANT.SLIDE_BOTTOM){
        keyframe = getSlideKeyframe(CONSTANT.SLIDE_BOTTOM,name)
    }
    if(type === CONSTANT.ROTATE_LEFT){
        keyframe = getRotateKeyframes(CONSTANT.ROTATE_LEFT,name)
    }
    if(type === CONSTANT.ROTATE_RIGHT){
        keyframe = getRotateKeyframes(CONSTANT.ROTATE_RIGHT,name)
    }
    if(type === CONSTANT.BOUNCE){
        keyframe = getBounceKeyFrame(name)
    }
    return keyframe
}



export {
    getKeyFrameName
}