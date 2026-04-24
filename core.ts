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

    /**
     * Creates a new Cabinet for your project..
     * @param id The ID of the Cabinet. Should be unique.
     */
    //% block="create Cabinet $id"
    //% blockId=yggcreatecabinet
    //% id.defl="myProject"
    //% blockSetVariable=myCabinet
    //% expandableArgumentMode=toggle
    export function createCabinet(id: string): Cabinet {
        return new Cabinet(id);
    }

    /**
     * Clears an array of all of its elements.
     * @param array The array to clear.
     */
    //% block="clear array $array"
    //% blockId=yggcleararray
    //% array.defl=myArray
    export function clearArray(array: any[]) {
        for (let val of array) {
            array.removeElement(val);
        }
    }

    /**
     * Returns if the specified array contains the specified value.
     * @param array The array to check.
     * @param value The value to check for.
     */
    //% block="array $array contains value $value"
    //% blockId=yggarraycontainsvalue
    //% array.defl=myArray
    //% value.defl=myValue
    export function arrayContainsValue<T>(array: T[], value: T): boolean {
        for (let val of array) {
            if (val == value) {
                return true;
                break;
            }
        }
        return false;
    }

    /**
     * Runs the given code for each element of an array.
     * @param array The array to check.
     * @param s The code to run
     */
    //% block="for each of array $array run $s"
    //% blockId=yggforeachofarray
    //% array.defl=myArray
    //% s.defl=myFunction
    export function forEach<T>(array: T[], s: (element: T) => void) {
        for (let val of array) {
            s(val);
        }
    }
}

