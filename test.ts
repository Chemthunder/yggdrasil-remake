// tests go here; this will not be compiled when this package is used as an extension.
game.consoleOverlay.setVisible(true, 1);


let primeSettings = new Entrypoint.Settings();
primeSettings.build(
    [
        "chemthunder"
    ],
    [
        "dev"
    ]
);

let session = new Entrypoint();
session.withSettings(primeSettings);
session.init();

if (session.isDevInstance()) {
    console.log("bingus");
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    yggdrasil.clearData();
});