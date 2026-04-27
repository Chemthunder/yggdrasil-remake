class Entrypoint {
    protected _scene: scene.Scene;
    protected _user: any;

    protected _settings: Entrypoint.Settings;

    public constructor() {
        this._scene = game.currentScene();
    }

    private get scene(): scene.Scene {
        return this._scene;
    }

    private get settings(): Entrypoint.Settings {
        return this._settings;
    }

    private set settings(i: Entrypoint.Settings) {
        this._settings = i;
    }

    private get user(): any {
        return this._user;
    }

    private set user(json: any) {
        this._user = json;
    }

    private isAdmin(str: string): boolean {
        return yggdrasil.arrayContainsValue(this.settings.getAdminIds(), str);
    }

    private isDev(str: string): boolean {
        return yggdrasil.arrayContainsValue(this.settings.getDevIds(), str);
    }

    public init() {
        console.log(yggdrasil.isDataReal("SessionUser") ? settings.readJSON("SessionUser") : "No user set for session.");

        if (yggdrasil.isDataReal("SessionUser")) return;

        let username = game.askForString("Input username");

        let sessionId = {
            name: username,
            isAdmin: this.isAdmin(username),
            isDev: this.isDev(username)
        }

        this.user = sessionId;
        settings.writeJSON("SessionUser", this.user);
        console.log(settings.readJSON("SessionUser"));
    }

    public withSettings(i: Entrypoint.Settings) {
        this._settings = i;
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

namespace Entrypoint {
    export class Settings {
        protected _adminIds: string[];
        protected _devIds: string[];

        public constructor() {
            this._adminIds = [];
            this._devIds = [];
        }

        private get adminIds(): string[] {
            return this._adminIds;
        }

        private get devIds(): string[] {
            return this._devIds;
        }

        public build(admin: string[], dev: string[]) {
            for (let el of admin) {
                this.getAdminIds().push(el);
            }

            for (let el of dev) {
                this.getDevIds().push(el);
            }
        }

        public getAdminIds(): string[] {
            return this._adminIds;
        }

        public getDevIds(): string[] {
            return this._devIds;
        }
    }
}

namespace yggdrasil {
    // advanced, create and init a session

    export function beginSession(): Entrypoint {
        return new Entrypoint();
    }
}