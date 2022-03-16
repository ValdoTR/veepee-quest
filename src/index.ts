/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any;
const popupConfig: any = {
    crackTheCodePopup: {
        message: 'Congrats, you just found the cartwheels, click to discover the riddle of the lock 3', 
        cta: [
            {
                label: "It's not for me",
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: "Challenge accepted!",
                className: "primary",
                callback: () => WA.nav.openCoWebSite('https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/CROSSWORD-GAME.pdf').then(() => closePopup()),
            },
        ]
    }
};

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    
    for(let popupName of Object.keys(popupConfig)) {
        // popup name = layer name
        WA.room.onEnterLayer(popupName).subscribe(() => openPopup(popupName))
        WA.room.onLeaveLayer(popupName).subscribe(() => {
            closePopup()
            WA.nav.closeCoWebSite();
        })
    }

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

// Popup management functions
function openPopup(popupName: string) {
    currentPopup = WA.ui.openPopup(popupName, popupConfig[popupName].message, popupConfig[popupName].cta)
}

function closePopup() {
    if (typeof currentPopup !== 'undefined') {
        currentPopup.close();
        currentPopup = undefined;
    }
}