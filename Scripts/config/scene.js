var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["PLAY"] = 1] = "PLAY";
        Scene[Scene["OVER"] = 2] = "OVER";
        Scene[Scene["INSTRUCTION"] = 3] = "INSTRUCTION";
        Scene[Scene["SETTINGS"] = 4] = "SETTINGS";
        Scene[Scene["LEVELCHANGE"] = 5] = "LEVELCHANGE";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map