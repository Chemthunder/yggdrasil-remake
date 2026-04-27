// sophisticated logging

class Cabinet {
    protected _id: string;

    public constructor(id: string) {
        this._id = id;
    }

    private get id(): string {
        return this._id;
    }

    public getProjectKey(): string {
        return "(" + this.id + ") ";
    }

    public log(message: string, type?: LogTypes) {
        if (type != null) {
            let additionalText: string;

            switch (type) {
                case (LogTypes.INFO): {
                    additionalText = "info";
                    break;
                }
                case (LogTypes.WARN): {
                    additionalText = "warn";
                    break;
                }
                case (LogTypes.ERROR): {
                    additionalText = "error";
                    break;
                }
                case (LogTypes.DEBUG): {
                    additionalText = "debug";
                    break;
                }
                default: additionalText = "";
            }

            let final = " [" + additionalText.toUpperCase() + "]";
            console.log(this.getProjectKey() + message + final);
        } else {
            console.log(this.getProjectKey() + message);
        }
    } 

    public error(code: ErrorCode) {
        this.log("An error has occurred!");
        this.log(code.name + ": " + code.reason);
        this.log(code.isFatal ? "Stopping instance..." : "Passing on...");

        if (code.isFatal) control.fail(code.name);
    }
}

enum LogTypes {
    INFO,
    WARN,
    ERROR,
    DEBUG
}

class ErrorCode {
    protected _name: string;
    protected _reason: string;
    protected _isFatal: boolean;

    public constructor(name: string, reason: string, isFatal: boolean) {
        this._name = name;
        this._reason = reason;
        this._isFatal = isFatal;
    }

    public get name(): string {
        return this._name;
    }

    public get reason(): string {
        return this._reason;
    }

    public get isFatal(): boolean {
        return this._isFatal;
    }
}

namespace ErrorCodes {
    export const CRASH = new ErrorCode("Game Crashed!", "Refer to source for more details.", true);

    export const PASS = new ErrorCode("Unknown Error", "Refer to source for more details.", false);
}