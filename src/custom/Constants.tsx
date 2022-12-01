export class Constants {
    public readonly FADE = "FADE";
    public readonly ROTATE_LEFT = "ROTATE-LEFT";
    public readonly ROTATE_RIGHT = "ROTATE-RIGHT";
    public readonly SLIDE_LEFT = "SLIDE-LEFT";
    public readonly SLIDE_RIGHT = "SLIDE-RIGHT";
    public readonly SLIDE_TOP = "SLIDE-TOP";
    public readonly SLIDE_BOTTOM = "SLIDE-BOTTOM";


    public getAnimationNames(){
        return {
            FADE:this.FADE,
            SLIDE_LEFT:this.SLIDE_LEFT,
            SLIDE_RIGHT:this.SLIDE_RIGHT,
            SLIDE_TOP:this.SLIDE_TOP,
            SLIDE_BOTTOM:this.SLIDE_BOTTOM,
            ROTATE_LEFT:this.ROTATE_LEFT
        }
    }
  }