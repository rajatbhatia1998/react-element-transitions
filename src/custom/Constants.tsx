export class Constants {
    public readonly FADE = "FADE";
    public readonly ROTATE_LEFT = "ROTATE-LEFT";
    public readonly ROTATE_RIGHT = "ROTATE-RIGHT";
    public readonly SLIDE_LEFT = "SLIDE-LEFT";
    public readonly SLIDE_RIGHT = "SLIDE-RIGHT";
    public readonly SLIDE_TOP = "SLIDE-TOP";
    public readonly SLIDE_BOTTOM = "SLIDE-BOTTOM";
    public readonly BOUNCE = "BOUNCE";

    public getAnimationNames(){
        return {
            FADE:this.FADE,
            SLIDE_LEFT:this.SLIDE_LEFT,
            SLIDE_RIGHT:this.SLIDE_RIGHT,
            SLIDE_TOP:this.SLIDE_TOP,
            SLIDE_BOTTOM:this.SLIDE_BOTTOM,
            ROTATE_LEFT:this.ROTATE_LEFT,
            BOUNCE:this.BOUNCE
        }
    }
    public getAnimationStyles(tempAniName:string,duration:string,name:String,iterCount:number,timing:string){
        let style = {
            animationName: tempAniName,
            animationTimingFunction: timing,
            animationDuration: `${duration}s`,
            animationDelay: '0.0s',
            animationIterationCount:iterCount,
            animationDirection: 'normal',
            animationFillMode: 'forwards'
        }

        if(name===this.BOUNCE){
            style.animationDirection = "alternate";  
            style.animationTimingFunction = 'linear'
        }

        return style
    }
  }