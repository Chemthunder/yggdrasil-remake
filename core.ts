/**
 * Yggdrasil allows for easy transfers of variables, and so much more.
 */
//% weight=30 color=#67cfa4 icon="\uf0ac"
namespace yggdrasil {
    // Main initializer for Yggdrasil.
    export const Core = new Cabinet("yggdrasil-core");

    /**
     * Creates a new Key of the specified type.
     * @param content The content for the Key to hold.
     */
    //% block="create Key with $content=variables_get(myVariable)"
    //% blockId=yggcreatekey
    //% expandableArgumentMode="toggle"
    //% blockSetVariable=myKey
    export function createKey<T>(content: T): Key<T> {
        return new Key<T>(content);
    }

    /**
     * Creates a new PersistentKey of the specified type.
     * @param content The content for the PersistentKey to hold.
     * @param location The unique ID of the Key.
     */
    //% block="create PersistentKey with $content=variables_get(myVariable) at $location=variables_get(myKeyLocation)"
    //% blockId=yggcreateperskey
    //% expandableArgumentMode="toggle"
    //% blockSetVariable=myPersKey
    export function createPersistentKey<T>(content: T, location: string): PersistentKey<T> {
        return new PersistentKey<T>(content, location);
    }

    /**
     * Creates a new Cabinet for your project..
     * @param id The ID of the Cabinet. Should be unique.
     */
    //% block="create Cabinet $id=variables_get(myProject)"
    //% blockId=yggcreatecabinet
    //% blockSetVariable=myCabinet
    //% expandableArgumentMode="toggle"
    export function createCabinet(id: string): Cabinet {
        return new Cabinet(id);
    }

    /**
     * Clears an array of all of its elements.
     * @param array The array to clear.
     */
    //% block="clear array $array=variables_get(myArray)"
    //% blockId=yggcleararray
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
    //% block="array $array=variables_get(myArray) contains value $value=variables_get(myValue)"
    //% blockId=yggarraycontainsvalue
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
    //% block="for each of array $array=variables_get(myArray)"
    //% blockId=yggforeachofarray
    export function forEach<T>(array: T[], s: (element: T) => void) {
        for (let val of array) {
            s(val);
        }
    }

    export function configDev(session: Entrypoint, a: (s: Entrypoint) => void) {
        session.isDevInstance() ? a(session) : Core.error(new ErrorCode("Invalid Permissions", "Session User permissions aren't high enough.", false));
    }
}

namespace yggdebug {
    export function buildTestingInstance() {
        game.consoleOverlay.setVisible(true, 1);

        let session = new Entrypoint();
        let seshSettings = new Entrypoint.Settings();

        seshSettings.build(
            [
                "admin",
                "Admin",
                "a",
                "A"
            ],
            [
                "dev",
                "_dev",
                "DEV",
                "dEv",
                "Dev",
                "Chemthunder",
                "chemthunder",
                "chem",
                "Chem"
            ]
        )

        session.withSettings(seshSettings);
        session.init();
    }

    export function enableDataDeletion() {
        controller.A.onEvent(ControllerButtonEvent.Pressed, function debug() {
            yggdrasil.clearData();
        });
    }
}
