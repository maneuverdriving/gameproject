module objects {
    export class Label extends createjs.Text {
        // Private Instace variables 

        //public properties 

        //Constructor
        /**
         *Creates an instance of Label.
         * @param {string} labelString
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColour
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Label
         */

         private _originalScale:number;
         
        constructor(labelString: string, fontSize: string, fontFamily: string, fontColour: string, x: number = 0 , y: number = 0 , isCentered: boolean= false) {
            super(labelString,fontSize +" "+ fontFamily,fontColour);
            if(isCentered){
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y ; 
            this._originalScale=this.scaleX;
        }

        public Update():void{
            //alert("inside update");
            /*while(this.scaleX<2)
            {
                this.scaleX+=0.5;            
            }
            while(this.scaleX>this._originalScale)
            {
                this.scaleX-=0.5;
            }*/
        }

    }
}