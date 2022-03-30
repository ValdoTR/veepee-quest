/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log("Script started successfully");

let currentPopup: any;
const declineGameText = "It's not for me"
const acceptGameText = "Challenge accepted!"
const config: any = {
    crackTheCode: {
        message: "Play the crack the code game! The 1st scavenger hunt challenge on Veepee Quest. Click below to discover the page instruction and where to put the clue answers.",
        buttons: [
            {
                label: "PADLOCK PAGE",
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/forms.gle\/HE7P5Ue3KUyPpf956").then(() => closePopup()),
            },
            {
                label: "GAME INSTRUCTION",
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/VEEPEE_QUEST_GAME_INSTRUCTION.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeAmsterdam: {
        message: "Congrats, you just found the orange bicycle, click to discover the riddle of the lock 2",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-2-CYPHER-GAME-IN-NETHERLANDS-AMSTERDAM-(ORANGE)-BIKE.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeBarcelone: {
        message: "Congrats, you just found the Umbrella, click to discover the riddle of the lock 4",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-4-DECODER-DISC-SPAIN-BARCELONA-PARASOL-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeBrussels: {
        message: "Congrats, you just found the Manneken pis, click to discover the riddle of the lock 5",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-5-SQUARE-COUNT-GAME-IN-BELGIUM-BRUSSELS-MENNKENPIS-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
    teleportCyber: {
        message: "Attention, zone de téléportation !",
        buttons: [
            {
                label: "GO!",
                className: "primary",
                callback: () => WA.nav.goToRoom("/@/veepee/brief-virtual-office/vp-quest"),
            }
        ]
    },
    crackTheCodeDusseldorf: {
        message: "Congrats, you just found the cartwheels, click to discover the riddle of the lock 3",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-3-CROSSWORD-GAME-IN-GERMANY-CARTWHEELS-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeLausanne: {
        message: "Congrats, you just found the chocolate, click to discover the riddle of the lock 9",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-9-FILL-IN-THE-BLANK-GAME-IN-ZWITZERLAND-LAUSANNE-CHOCOLAT-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeMilan: {
        message: "Congrats, you just found the football balloon, click to discover the riddle of the lock 8",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-8-GUESS-THE-PLACE-IN-ITALY-MILAN-FOOTBALL-BALLOON-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeTelaviv: {
        message: "Congrats, you just found the skateboard, click to discover the riddle of the lock 6",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-6-CRACK-THE-4-DIGITS-IN-ISRAEL-CRACK-THE-4-DIGIT-IN-ISRAEL-TEL-AVIV-SKETEBOARD-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeVerone: {
        message: "Congrats, you just found the macaron, click to discover the riddle of the lock 1",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-1-A-MAZE-(TH)ING-GAME-IN-FRANCE-MACARON-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
    crackTheCodeWarsaw: {
        message: "Congrats, you just found the pierogi, click to discover the riddle of the lock 7",
        buttons: [
            {
                label: declineGameText,
                className: "normal",
                callback: () => closePopup(),
            },
            {
                label: acceptGameText,
                className: "primary",
                callback: () => WA.nav.openCoWebSite("https:\/\/valdotr.github.io\/veepee-quest-map\/src\/assets\/game\/RIDDLE-7-REBUS-GAME-IN-POLAND-WARSAW-FOLKLORIC-DOLL-ITEM.pdf").then(() => closePopup()),
            },
        ]
    },
};

// Olympiad
const IFRAME_HEIGHT = 253;
const IFRAME_WIDTH = 294;
const IFRAME_X = 962;
const IFRAME_Y = 38;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log("Scripting API ready");
    console.log("Player tags: ",WA.player.tags)

    // Open or close popups
    for(let name of Object.keys(config)) {
        // We assume that each popup and zone have a name in common + "Popup" for popups and + "Zone" for layers.
        const layerName = name + "Zone"
        const popupName = name + "Popup"
        WA.room.onEnterLayer(layerName).subscribe(() => openPopup(popupName))
        WA.room.onLeaveLayer(layerName).subscribe(() => {
            closePopup()
            WA.nav.closeCoWebSite();
        })
    }

    // Olympiad
    const createNewEmbedWebsite = (cinemaScreenVariable: string) => {
        WA.room.website.get("cinemaScreen").then((holdWebsite) => {
            WA.room.website.create({
                name: holdWebsite && holdWebsite.name ? holdWebsite.name : "cinemaScreen",
                url: cinemaScreenVariable,
                position: {
                    height: holdWebsite && holdWebsite.height ? holdWebsite.height : IFRAME_HEIGHT,
                    width: holdWebsite && holdWebsite.width ? holdWebsite.width : IFRAME_WIDTH,
                    x: holdWebsite && holdWebsite.x ? holdWebsite.x : IFRAME_X,
                    y: holdWebsite && holdWebsite.y ? holdWebsite.y : IFRAME_Y,
                },
                visible: holdWebsite && holdWebsite.visible ? holdWebsite.visible : true,
                allowApi:  true,
                allow: "fullscreen",
            } as any);

            WA.room.website.delete("cinemaScreen");
        }).catch((err) => {
            WA.room.website.create({
                name: "cinemaScreen",
                url: cinemaScreenVariable,
                position: {
                    height: IFRAME_HEIGHT,
                    width: IFRAME_WIDTH,
                    x: IFRAME_X,
                    y: IFRAME_Y,
                },
                visible: true,
                allowApi:  true,
                allow: "fullscreen",
            });
        });
    }


    const cinemaScreenVariable = WA.state.loadVariable("cinemaScreenVariable");
    if(cinemaScreenVariable !== undefined){
        createNewEmbedWebsite(cinemaScreenVariable as string);
    }

    WA.state.onVariableChange("cinemaScreenVariable").subscribe((cinemaScreenVariable: unknown) => {
        if(cinemaScreenVariable === undefined){
            return;
        }
        createNewEmbedWebsite(cinemaScreenVariable as string);
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features
    bootstrapExtra().then(() => {
        console.log("Scripting API Extra ready");
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

// Popup management functions
function openPopup(popupName: string) {
    currentPopup = WA.ui.openPopup(popupName, config[popupName].message, config[popupName].buttons)
}
function closePopup() {
    if (typeof currentPopup !== "undefined") {
        currentPopup.close();
        currentPopup = undefined;
    }
}