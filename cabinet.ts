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
            let additionalText = " [" + type.toString().toUpperCase() + "]";

            // switch (type) {
            //     case (LogTypes.INFO): {
            //         additionalText = type.toString()
            //     }
            // }

            console.log(this.getProjectKey() + message + additionalText);
        } else {
            console.log(this.getProjectKey() + message);
        }
    } 
}

let logger = new Cupboard("test");
logger.log("bingus", LogTypes.WARN);