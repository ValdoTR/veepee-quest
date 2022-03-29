const zoneList = {
    popupCrackTheCode: {
        message: 'Congrats, you just found the Manneken pis, click to discover the riddle of the lock 5', 
        buttons: [
            {
                label: "It's not for me",
                className: "popUpElement",
                callback: (popupValue) => {
                    popupValue.close();
                }
            },
            {
                label: "Challenge accepted!",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://backup-workadventure-db-prod.s3-eu-west-1.amazonaws.com/map/VEEPEE_V6/CrackTheCode/RIDDLE-5-SQUARE-COUNT-GAME-IN-BELGIUM-BRUSSELS-MENNKENPIS-ITEM.pdf');
                    popupValue.close();
                }
            },
        ]
    }
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const index = zoneListArray[i];
    let popup = null;
    WA.onEnterZone(index, () => {
        popup = WA.openPopup(`${index}`, zoneList[index].message, zoneList[index].buttons);
    });
    WA.onLeaveZone(index, () => {
        popup.close();
        WA.closeCoWebSite();
    });
}
