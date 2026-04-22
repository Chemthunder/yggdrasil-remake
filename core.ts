/**
 * Yggdrasil allows for easy transfers of variables, and so much more.
 */
//% weight=30 color=#67cfa4 icon="\uf0ac"
namespace yggdrasil {
    /**
     * Creates a new Key of the specified type.
     * @param content The content for the Key to hold.
     */
    //% block="create Key with $content"
    //% blockId=yggcreatekey
    //% content.defl=myVariable
    //% blockSetVariable=myKey
    //% expandableArgumentMode=toggle
    export function createKey<T>(content: T): Key<T> {
        return new Key<T>(content);
    }

    /**
     * Creates a new PersistentKey of the specified type.
     * @param content The content for the PersistentKey to hold.
     * @param location The unique ID of the Key.
     */
    //% block="create PersistentKey with $content at $location"
    //% blockId=yggcreateperskey
    //% content.defl=myVariable
    //% location.defl="myKeyLocation"
    //% blockSetVariable=myPersKey
    //% expandableArgumentMode=toggle
    export function createPersistentKey<T>(content: T, location: string): PersistentKey<T> {
        return new PersistentKey<T>(content, location);
    }
}

 ////% groups='["Keys", "Branches", "Spools", "Other"]'