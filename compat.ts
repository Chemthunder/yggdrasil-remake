// blocks for some js stuff that blocks cant do :D

namespace scene {
    /**
     * Adds a button to the base system menu.
     * @param name The name of the button.
     * @param icon The icon of the button.
     * @param a The code to run when the button is pressed.
     */
    //% block="add system menu entry $name $icon"
    //% blockId=yggaddsystemmenuentry
    //% icon.shadow=screen_image_picker
    export function addSystemMenuEntry(name: string, icon: Image, a: () => void) {
        scene.systemMenu.addEntry(() => name, a, icon);
    }

    export const centerX = scene.screenWidth() / 2;
    export const centerY = scene.screenHeight() / 2;
}

namespace game {
    export function setGameOverLoseSettings(loseMessage?: string, loseMelody?: music.Melody, loseSound?: music.Playable, effect?: effects.BackgroundEffect) {
        game.setGameOverEffect(false, effect);
        game.setGameOverMessage(false, loseMessage);
        game.setGameOverPlayable(false, loseSound, false);
        game.setGameOverSound(false, loseMelody);
    }

    export function setGameOverWinSettings(winMessage?: string, winMelody?: music.Melody, winSound?: music.Playable, effect?: effects.BackgroundEffect) {
        game.setGameOverEffect(true, effect);
        game.setGameOverMessage(true, winMessage);
        game.setGameOverPlayable(true, winSound, false);
        game.setGameOverSound(true, winMelody);
    }

    export function setDialogSettings(frame: Image, cursor: Image, color?: number) {
        game.setDialogFrame(frame);
        game.setDialogCursor(cursor);
        game.setDialogTextColor(color);
    }
}

namespace info {
    /**
     * Allows for editing of the colors of the UI.
     * @param lifeImage The displayed icon for lives.
     * @param backgroundColor The color of the background for the UI.
     * @param fontColor The color of the font for the UI.
     * @param borderColor The color of the border for the UI.
     */
    //% block="edit ui | life image $lifeImage background color $backgroundColor font color $fontColor border color $borderColor"
    //% blockId=yggeditui
    //% lifeImage.shadow=screen_image_picker
    //% backgroundColor.shadow=colorindexpicker
    //% fontColor.shadow=colorindexpicker
    //% borderColor.shadow=colorindexpicker
    export function editUI(lifeImage?: Image, backgroundColor?: number, fontColor?: number, borderColor?: number) {
        info.setFontColor(fontColor);
        info.setBackgroundColor(backgroundColor);
        info.setLifeImage(lifeImage);
        info.setBorderColor(borderColor);
    }
}