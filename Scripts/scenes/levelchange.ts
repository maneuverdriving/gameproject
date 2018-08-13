module scenes{
    export class LevelChange extends objects.Scene{
        // public 

        // private
        private _congratulationsLabel :objects.Label;
        
        private _overLabel :objects.Label;
        private _backButton :objects.Button;
        private _lastImage: createjs.Bitmap;
        private _nextLevelImage: createjs.Bitmap;
        

      /**
       *
       *
       * @private
       * @memberof LevelChange
       */
      private _backButtonClick() :void{
            objects.Game.currentScene =config.Scene.START;
        }


        /**
         *Creates an instance of OverScene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof LevelChange
         */
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Init():void{
            
        }
        
        public Start():void{

            
            if(objects.Game.levelSelected=="level3")
            {
                this._congratulationsLabel= new objects.Label("Congratulations! You have passed "+objects.Game.levelSelected+".", '24px',"Consolas","#FF0000",250, 30);
                this._overLabel = new objects.Label("Game Finished! Restart from Level 1 : ", '18px',"Consolas","#FF0000",250, 100);   
                this._nextLevelImage =new createjs.Bitmap(this.assetManager.getResult("RestartButton"));                                    
                this._nextLevelImage.x=650;
                this._nextLevelImage.y=90;
            }
            else
            {
                this._congratulationsLabel= new objects.Label("Congratulations! You have passed "+objects.Game.levelSelected+".", '24px',"Consolas","#FF0000",250, 30);            
                this._overLabel = new objects.Label("Go to Next Level : ", '26px',"Consolas","#FF0000",250, 100);  
                    
                this._nextLevelImage =new createjs.Bitmap(this.assetManager.getResult("nextButton"));
                this._nextLevelImage.x=520;
                this._nextLevelImage.y=90; 
                

            }
            
            this._backButton = new objects.Button(this.assetManager,"backButton",380, 500);

            this._lastImage=new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));
            this._lastImage.scaleX=0.68;
            this._lastImage.scaleY=0.8;
            this.Main();

        }
        public Main():void{
            
            this.addChild(this._lastImage);
            this.addChild(this._congratulationsLabel);
            this.addChild(this._overLabel);   
            this.addChild(this._nextLevelImage);
            this._nextLevelImage.on("click", function(){
                    if(objects.Game.levelSelected=="level1")
                    {
                        objects.Game.levelSelected="level2";
                    }
                    else if(objects.Game.levelSelected=="level2")
                    {
                    objects.Game.levelSelected="level3";
                    }      
                    else if(objects.Game.levelSelected=="level3")
                    {     
                    objects.Game.levelSelected="level1";
                    }
                    objects.Game.currentScene =config.Scene.PLAY;
                }, this);

            this.addChild(this._backButton);
            this._backButton.on("click",this._backButtonClick);
        }
        public Update():void{
           
        }
        //
    }
}