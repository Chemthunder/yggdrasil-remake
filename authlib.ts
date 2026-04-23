// usernames and stuff
// session is the currently running game.
// stores a scene and such bleh bleh bleh

const adminIds: string[] = [
    "chem",
    "chemthunder"
]

const devCodes: string[] = [
    "dev",
    "_dev"
]

class Entrypoint {
    protected _scene: scene.Scene;
    protected _user: any;

    public constructor() {
        this._scene = game.currentScene();
    }

    private get scene(): scene.Scene {
        return this._scene;
    }

    private get user(): any {
        return this._user;
    }

    private set user(json: any) {
        this._user = json;
    }

    private isAdmin(str: string): boolean {
        return yggdrasil.arrayContainsValue(adminIds, str);
    }

    private isDev(str: string): boolean {
        return yggdrasil.arrayContainsValue(devCodes, str);
    }

    public init() {
        if (!yggdrasil.isDataReal("SessionUser")) {
            let username = game.askForString("Input username");
        
            let sessionId = {
                name: username,
                isAdmin: this.isAdmin(username),
                isDev: this.isDev(username)
            }

            this.user = sessionId;
            console.log(sessionId);
            settings.writeJSON("SessionUser", this.user);
        }

        console.log(settings.readJSON("SessionUser"));
    }

    public getUser(): any {
        return settings.readJSON("SessionUser");
    }

    public userIsAdmin(): boolean {
        return this.getUser().isAdmin;
    }

    public isDevInstance(): boolean {
        return this.getUser().isDev;
    }
}

