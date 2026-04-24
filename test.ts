// tests go here; this will not be compiled when this package is used as an extension.

scene.systemMenu.addEntry(() => "clear data", function () {

}, img`
    . . . . . . . . . . . . . . . .
    . 2 . . . . . . . . . . . . . .
    3 . 2 2 . . . . . . . . . . . .
    . . . 2 . . . . . . . . . . . 2
    . . . . 2 . . . . . . . . . 2 .
    . . . . . 2 . . . . . . 2 2 . .
    . . . . . . 2 . . . 2 2 . . . .
    . . . . . . . 2 . 2 . . . . . .
    . . . . . . . . 2 . . . . . . .
    . . . . . . . 2 . 2 . . . . . .
    . . . . . 2 2 . . . 2 . . . . .
    . . . . 2 . . . . . 2 . . . . .
    . . . 2 . . . . . . . 2 . . . .
    . . 2 . . . . . . . . . 2 . . .
    . 2 . . . . . . . . . . . 2 . .
    . 2 . . . . . . . . . . . . 2 2
`);

let primary = new Entrypoint();
let sesh = new Entrypoint.Settings();

sesh.build(
    [
        "chem"
    ],
    [
        "chem"
    ]
);

primary.withSettings(sesh);
primary.init();