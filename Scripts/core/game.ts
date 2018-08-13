/// <reference path="_references.ts"/>

//iffi

(function(){

    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel : objects.Label;
    let clickMeButton : objects.Button;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[] ;
    let currentScene:objects.Scene;
    let currentState : number;
    let keyboardManager:managers.Keyboard;
    
    assetManifest =  [
        {
        id: "clickMeButton" ,src: "./Assets/images/clickMeButton.png"},
        {        id: "startButton" ,src: "./Assets/images/StartButton.png"},
        {        id: "backButton" ,src: "./Assets/images/BackButton.png"},
        {        id: "explosionImage" ,src: "./Assets/images/explosion1.png"},        
        {        id: "InstructionButton" ,src: "./Assets/images/instructions.png"},  
        {        id: "RestartButton" ,src: "./Assets/images/restart.png"},        
        {        id: "nextButton" ,src: "./Assets/images/NextButton.png"},        
        {        id: "level1" ,src: "./Assets/images/level1.png"},        
        {        id: "level2" ,src: "./Assets/images/level2.png"},        
        {        id: "level3" ,src: "./Assets/images/level3.png"},
        {        id: "welcomeImage" ,src: "./Assets/images/mainImage.jpg"}, 
        {        id: "road" ,src: "./Assets/images/road.png"},
        {        id: "car" ,src: "./Assets/images/car1.png"},
        {        id: "car2" ,src: "./Assets/images/car2.png"},
        {        id: "car3" ,src: "./Assets/images/car3resize.png"},
        {        id: "car4" ,src: "./Assets/images/car4.png"},
        {        id: "car5" ,src: "./Assets/images/car5resize.png"},
        {        id: "car6" ,src: "./Assets/images/car6resize.png"},
        {        id: "barrel" ,src: "./Assets/images/coin.png"},
        {        id: "SettingButton",src:"./Assets/images/SettingButton.png"},
        {        id: "roadblock" ,src: "./Assets/images/roadblock.png"},
        {        id: "car_engine", src:"./Assets/audio/car_engine.ogg"}
    
    ]
    /**
     *initialize
     *
     */
    function Init(){
        console.log("initialization Started");
        assetManager  =  new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete",Start,this);
        Start();
        
    }
    /**
     *
     *Start application
     */
    function Start():void{
        console.log("Starting Application");
        stage =  new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60 ;
        createjs.Ticker.on("tick",Update);

        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState =config.Scene.START;
        objects.Game.assetManager = assetManager;
        
        keyboardManager=new managers.Keyboard;
        objects.Game.keyboardManager=keyboardManager;

        objects.Game.carselected="car";
        objects.Game.levelSelected="level1";
        
        Main();
    }
    /**
     *
     *update  scene 
     */
    function Update():void{
        // helloLabel.rotation -= 5;

        if(currentState != objects.Game.currentScene){
  
            Main();
        }
        currentScene.Update();
        stage.update();
    }

    // function clickMeButtonMouseOver():void{
    //     clickMeButton.alpha = 0.7;

    // }
    // function clickMeButtonMouseOut():void{
    //     clickMeButton.alpha = 1.0;

    // }
    
    /**
     *
     * Button to be clicked
     */
    function clickMeButtonMouseClick():void{
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5 ;
        helloLabel.regY= helloLabel.getMeasuredHeight() * 0.5 ;

        clickMeButton.alpha = 1.0;

    }

    /**
     *main method to be called for running game 
     *
     */
    function Main():void{
        if(currentScene) {
            currentScene.Destroy();
            stage.removeChild(currentScene);
        }
        stage.removeAllChildren();
        switch(objects.Game.currentScene){
          

            case config.Scene.START:
            {
                
                currentScene = new scenes.StartScene(assetManager);
               
            }
            break;
            case config.Scene.PLAY:
                currentScene = new scenes.PlayScene(assetManager);
            break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene(assetManager);
            break;
            case config.Scene.INSTRUCTION:
                currentScene = new scenes.Instructions(assetManager);
            break;
            case config.Scene.SETTINGS:
            currentScene = new scenes.Settings(assetManager);
            break;
            case config.Scene.LEVELCHANGE:
            currentScene=new scenes.LevelChange(assetManager);

        }
        currentState= objects.Game.currentScene;
        stage.addChild(currentScene);        
    }
    window.onload = Init;
})();