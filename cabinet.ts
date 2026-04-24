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
}

enum LogTypes {
    INFO,
    WARN,
    ERROR,
    DEBUG
}