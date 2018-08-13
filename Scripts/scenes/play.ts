module scenes{
    export class PlayScene extends objects.Scene{
        // public 
        private _road : objects.Road
        private _car : objects.Car;
        private _barrel : objects.Barrel;
        private _roadblock : objects.Roadblock;
        private _barrel1 : objects.Barrel;
        private _roadblock1 : objects.Roadblock;
        private _barrel2 : objects.Barrel;
        private _roadblock2 : objects.Roadblock;
        
        // private
       
        private _scoreBoard:managers.Scoreboard;
        public engineSound:createjs.AbstractSoundInstance;


        /**
         *Creates an instance of PlayScene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof PlayScene
         */
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
/**
 *
 *
 * @memberof PlayScene
 */
public Init():void{
            
        }
        /**
         *
         *
         * @memberof PlayScene
         */
        public Start():void{
           this._road = new objects.Road(this.assetManager);
           this._car = new objects.Car(this.assetManager);
           this._barrel = new objects.Barrel(this.assetManager);
           this._roadblock = new objects.Roadblock(this.assetManager);

           this._barrel1 = new objects.Barrel(this.assetManager);
           this._roadblock1 = new objects.Roadblock(this.assetManager);
           this._barrel2 = new objects.Barrel(this.assetManager);
           this._roadblock2 = new objects.Roadblock(this.assetManager);
           this.engineSound = createjs.Sound.play("car_engine");
           this.engineSound.loop = -1;
           this.engineSound.volume = 0.1;

           this._scoreBoard=new managers.Scoreboard();
           objects.Game.scoreboard=this._scoreBoard;

           this.Main();

        }
        /**
         *
         *
         * @memberof PlayScene
         */
        public addObstacles():void
        {

        }




        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        /**
         *
         *
         * @memberof PlayScene
         */
        public Main():void{
            if((this._barrel.x - this._roadblock.x > -50 || this._barrel.x - this._roadblock.x < 50 )&&
                (this._barrel.y - this._roadblock.y > -50 || this._barrel.y - this._roadblock.y < 50)) {

               this._barrel.y = this._barrel.y - 100;
            }   
                
                
                
                this._barrel1.y = this._barrel.y -150 ;
                this._roadblock1.y = this._barrel.y -150 ;
                
                this._barrel2.y = this._barrel1.y -150 ;
                this._roadblock2.y = this._barrel1.y -150 ;

                if((this._barrel1.x - this._roadblock1.x > -50 || this._barrel1.x - this._roadblock1.x < 50 )&&
                (this._barrel1.y - this._roadblock1.y > -50 || this._barrel1.y - this._roadblock1.y < 50)) {

               this._barrel1.y = this._barrel1.y - 100;
                }    
            
                if((this._barrel2.x - this._roadblock2.x > -50 || this._barrel2.x - this._roadblock2.x < 50 )&&
                (this._barrel2.y - this._roadblock2.y > -50 || this._barrel2.y - this._roadblock2.y < 50)) {

               this._barrel2.y = this._barrel2.y - 100;
                }  


           this.addChild(this._road)

           this.addChild(this._car);

           this.addChild(this._scoreBoard.LiveLabel);
           this.addChild(this._scoreBoard.ScoreLabel);

           var that=this;
           setTimeout(function()
           {
                that.addChild(that._barrel);
                that.addChild(that._roadblock);
 
 
                that.addChild(that._barrel1);
                that.addChild(that._roadblock1);
 
                that.addChild(that._barrel2);
                that.addChild(that._roadblock2);
 
        });

           
        


        }
        /**
         *
         *
         * @memberof PlayScene
         */
        public Update():void{
           this._road.Update()
           this._car.Update()
           var that=this;
           setTimeout(function()
           {
              
            that._barrel.Update()
            that._barrel1.Update()
            that._barrel2.Update()
           //check collision between car and barrel
           managers.Collision.Check(that._road,that._car,that._barrel,that);
           managers.Collision.Check(that._road,that._car,that._barrel1,that);
           managers.Collision.Check(that._road,that._car,that._barrel2,that);

           that._roadblock.Update()
           that._roadblock1.Update()
           that._roadblock2.Update()
           //check collision between car and roadBlock
           managers.Collision.Check(that._road,that._car,that._roadblock,that);
           managers.Collision.Check(that._road,that._car,that._roadblock1,that);
           managers.Collision.Check(that._road,that._car,that._roadblock2,that);

           //check collision between barrel and roadblock
           managers.Collision.Check(that._road,that._barrel,that._roadblock, that);
           managers.Collision.Check(that._road,that._barrel1,that._roadblock,that);
           managers.Collision.Check(that._road,that._barrel2,that._roadblock,that);

           managers.Collision.Check(that._road,that._barrel,that._roadblock1, that);
           managers.Collision.Check(that._road,that._barrel1,that._roadblock1,that);
           managers.Collision.Check(that._road,that._barrel2,that._roadblock1,that);

           managers.Collision.Check(that._road,that._barrel,that._roadblock2, that);
           managers.Collision.Check(that._road,that._barrel1,that._roadblock2,that);
           managers.Collision.Check(that._road,that._barrel2,that._roadblock2,that);
        },3000);
           
        if(this._scoreBoard.Lives<=0 || this._scoreBoard.Score<0)
        {
               objects.Game.currentScene=config.Scene.OVER;
        }
           
        if(objects.Game.levelSelected=="level1")
        {
           if(this._scoreBoard.Score>=1000)
           {
            objects.Game.currentScene=config.Scene.LEVELCHANGE;
           }
        }

        if(objects.Game.levelSelected=="level2")
        {
           if(this._scoreBoard.Score>=2000)
           {
            objects.Game.currentScene=config.Scene.LEVELCHANGE;
           }
        }

        if(objects.Game.levelSelected=="level3")
        {
           if(this._scoreBoard.Score>=3000)
           {
            objects.Game.currentScene=config.Scene.LEVELCHANGE;
           }
        }


        }
    }
}
