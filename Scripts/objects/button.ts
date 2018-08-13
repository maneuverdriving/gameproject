module objects{

    export class Button extends createjs.Bitmap{
        // private 
        //public 
        // constructor
        /**
         *Creates an instance of Button.
         * @param {createjs.LoadQueue} assetManager
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @memberof Button
         */
        constructor( assetManager:createjs.LoadQueue,  imageString : string , x:number = 0 , y:number = 0){
         super(assetManager.getResult( imageString));
        //  this.regX = this.getBounds().width * 0.5
        //  this.regY = this.getBounds().height * 0.5
         this.x = x ;
         this.y = y ;
         this.on("mouseover", this._mouseOver);  
         this.on("mouseout", this._mouseOut);  
        }
        /**
         *
         *
         * @private
         * @memberof Button
         */
        private _mouseOver():void{
            this.alpha = 0.7
            
        }
        /**
         *
         *
         * @private
         * @memberof Button
         */
        private _mouseOut():void{
            this.alpha = 1.0;
            
        }
    }
}