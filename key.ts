// May be needed at some point idk
abstract class StoredData {
    public constructor() {}
}

class Key<KeyType> {
    protected _content: KeyType;

    public constructor(content: KeyType) {
        this._content = content;
    }

    private get content(): KeyType {
        return this._content;
    }

    private set content(i: KeyType) {
        this._content = i;
    }

    public unpack(): KeyType {
        return this._content;
    }
}

class PersistentKey<KeyType> {
    protected _content: KeyType;
    protected _dataKey: string;

    public constructor(content: KeyType, dataKey: string) {
        this._content = content;
        this._dataKey = dataKey;
    }

    private get content(): KeyType {
        return this._content;
    }

    private set content(i: KeyType) {
        this._content = i;
    }

    private get dataKey(): string {
        return this._dataKey;
    }

    public write(namespace?: string) {
        let converted = {
            transmittedData: this.content
        }

        console.log(converted.transmittedData)
        settings.writeJSON(namespace + "$" + this.dataKey, converted);
    }
}

namespace yggdrasil {
    /**
     * Checks if the ID of a PersistentKey exists.
     * @param key The ID of the PersistentKey to check for.
     */
    //% block="is Key $key real"
    //% blockId=yggisdatareal
    //% key.defl="myPersKey"
    export function isDataReal(key: string): boolean {
        return settings.exists(key);
    }

    /**
     * Writes the specified variable to be persistent.
     * @param data The data to write.
     * @param key The key of the data
     */
    //% block="write data $data at $key"
    //% blockId=yggwritemiscdata
    //% data.defl="myVariable"
    //% key.defl="myKey"
    export function writeMiscDataToPers(data: any, key: string) {
        settings.writeJSON(key, {
            data: data
        });
    }

    /**
     * Clears all persistent variables.
     */
    //% block="clear data"
    //% blockId=yggcleardata
    export function clearData() {
        settings.clear();
        game.reset();
    }

    /**
     * Clears a specified piece of data.
     * @param key The key of the data to remove.
     */
    //% block="remove data at $key"
    //% blockId=yggremovespecificdata
    //% key.defl="myPersKey"
    export function removeSpecficData(key: string) {
        settings.remove(key);
    }
}