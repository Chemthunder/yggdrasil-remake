game.consoleOverlay.setVisible(true, 1);

const PrimarySession = new Entrypoint();
PrimarySession.init();

if (PrimarySession.getUser().name == "chemthunder") {
    console.log("dhu");
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    yggdrasil.clearData();
})