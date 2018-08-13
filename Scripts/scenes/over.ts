module scenes{
    export class OverScene extends objects.Scene{
        // public 

        // private
        private _overLabel :objects.Label;
        private _backButton :objects.Button;
        private _lastImage: createjs.Bitmap;

      /**
       *
       *
       * @private
       * @memberof OverScene
       */
      private _backButtonClick() :void{
            objects.Game.currentScene =config.Scene.START;
        }


        /**
         *Creates an instance of OverScene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof OverScene
         */
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Init():void{
            
        }
        
        public Start():void{
            this._overLabel = new objects.Label("Game over", '60px',"Consolas","#FF0000",250, 100);            
            this._backButton = new objects.Button(this.assetManager,"backButton",650, 100);
            this._lastImage=new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));
            this._lastImage.scaleX=0.68;
            this._lastImage.scaleY=0.8;
            this.Main();

        }
        public Main():void{
            this.addChild(this._lastImage);
            this.addChild(this._overLabel);   

      
            this.addChild(this._backButton);
            this._backButton.on("click",this._backButtonClick);
        }
        public Update():void{
           
        }

        public Destroy():void {
            this.removeAllChildren();
        }
        //
    }
}