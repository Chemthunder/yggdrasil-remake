// sophisticated logging

enum LogTypes {
    INFO,
    WARN,
    ERROR,
    DEBUG
}

class Cupboard {
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
                }
                case (LogTypes.WARN): {
                    additionalText = "warn";
                }
                case LogTypes.ERROR: additionalText = "error";
                case LogTypes.DEBUG: additionalText = "debug";
                default: additionalText = "";
            }

            let final = " [" + additionalText.toUpperCase() + "]";
            console.log(this.getProjectKey() + message + final);
        } else {
            console.log(this.getProjectKey() + message);
        }
    } 
}

let logger = new Cupboard("test");
logger.log("bingus", LogTypes.WARN);