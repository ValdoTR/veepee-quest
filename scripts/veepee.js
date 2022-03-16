// Intialisation des variables des nom des zones de popUp
// Intialisation des variables des nom des zones de popUp
// Les noms doivent être les mêmes que les noms des rectangles définis dans Tiled dans le layer object floorLayer
// Ces rectangles définissent la zone ou apparaîtra le popup
// Dans Tiled un layer doit être créé avec le nom de chaque zone de PopUp en retirant le mot Name
// Le nom des layers reprends le nom des variables zone
// Il suffit alors de positionner des tuiles pour definir ou le popUp sera declenche
// Ajouter alors la propriete zone avec le nom du popUp a chacun de ces layers
var zoneWelcomeName = "popUpWelcome";
//var zoneMeetTheTeamName = "popUpMeetTheTeam";
var zoneRespectPeopleName = "popUpRespectPeople";
//var zoneMilanName = "popUpMilan";
//var zoneParisVeroneName = "popUpParisVerone";
//var zoneTelAvivName = "popUpTelAviv";
//var zoneEntrepotName = "popUpEntrepot";
//var zoneVarsovieName = "popUpVarsovie";
//var zoneBarceloneName = "popUpBarcelone";
//var zoneBruxellesName = "popUpBruxelles";
//var zoneLausanneName = "popUpLausanne";
//var zoneDusseldorfName = "popUpDusseldorf";
//var zoneVeepeeSurpriseName = "popUpVeepeeSurprise";
console.log("SCRIPT IS COMING!");
// url utilisées
var urlWelcome = "https://fr.wikipedia.org/wiki/Veepee";
//var urlMilan = "https://www.veepee.fr/";
//var urlTelAviv = "https://play.workadventu.re/_/global/mapwa.net/static/wa/veepee/map2/tel-aviv/start.json"
//var urlBruxelles = "https://play.workadventu.re/_/global/mapwa.net/static/wa/veepee/map2/bruxelles/start.json"
//var urlLausanne = "https://play.workadventu.re/_/global/mapwa.net/static/wa/veepee/map2/lausanne/start.json"
//var urlBarcelone = "https://play.workadventu.re/_/global/mapwa.net/static/wa/veepee/map2/barcelone/start.json"
// popUp courant
var currentPopup = undefined;
//
var isCoWebSiteOpened =  false;

// Premier popUp quand on entre dans la zone zoneWelcome
WA.onEnterZone(zoneWelcomeName, () => {
   currentPopup =  WA.openPopup("popUpWelcome","Hey! Welcome to Veepee Quest",[
        {
            label: "A website",
            className: "popUpElement",
            callback: (popup => {
                WA.openCoWebSite(urlWelcome);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

// popup quand on prend l'escalier, respect people
WA.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.openPopup("popUpRespectPeople","Thank you for respecting people at work :D",[
 	{
		label: "OK!",
            className: "popUpElement",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.onLeaveZone(zoneRespectPeopleName, closePopUp)

//WA.onEnterZone(zoneMeetTheTeamName, () => {
//    currentPopup =  WA.openPopup("popUpMeetTheTeam","Meet the VEEPEE team ! ",[]);
//})
//WA.onLeaveZone(zoneMeetTheTeamName, closePopUp)

//WA.onLeaveZone(zoneWelcomeName, () =>{
//    closePopUp();

//    if (isCoWebSiteOpened) {
//        WA.closeCoWebSite();
//        isCoWebSiteOpened = false;
//    }
//})

// popup entrée zone Tel Aviv
//WA.onEnterZone(zoneTelAvivName, () => {
    currentPopup =  WA.openPopup("popUpTelAviv","Access to Tel Aviv office",[
 	{
		label: "GO!",
            className: "popUpElement",
            callback: (popup => {
				WA.goToPage(urlTelAviv);
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneTelAvivName, closePopUp)

// popup entrée zone Entrepot
//WA.onEnterZone(zoneEntrepotName, () => {
    currentPopup =  WA.openPopup("popUpEntrepot","Soon, access to Entrepot office",[
 	{
		label: "OK!",
            className: "popUpElement",
            callback: (popup => {
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneEntrepotName, closePopUp)

// popup entrée zone Varsovie
//WA.onEnterZone(zoneVarsovieName, () => {
    currentPopup =  WA.openPopup("popUpVarsovie","Soon, access to Varsovie office",[
 	{
		label: "OK!",
            className: "popUpElement",
            callback: (popup => {
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneVarsovieName, closePopUp)

// popup entrée zone Barcelone
//WA.onEnterZone(zoneBarceloneName, () => {
    currentPopup =  WA.openPopup("popUpBarcelone","Access to Barcelone office",[
 	{
		label: "OK!",
            className: "popUpElement",
            callback: (popup => {
			WA.goToPage(urlBarcelone);
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneBarceloneName, closePopUp)

// popup entrée zone Bruxelles
//WA.onEnterZone(zoneBruxellesName, () => {
    currentPopup =  WA.openPopup("popUpBruxelles","Access to Bruxelles office",[
 	{
		label: "GO!",
            className: "popUpElement",
            callback: (popup => {
				WA.goToPage(urlBruxelles);
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneBruxellesName, closePopUp)

// popup entrée zone Lausanne
//WA.onEnterZone(zoneLausanneName, () => {
    currentPopup =  WA.openPopup("popUpLausanne","Access to Lausanne office",[
 	{
		label: "GO!",
            className: "popUpElement",
            callback: (popup => {
				WA.goToPage(urlLausanne);
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneLausanneName, closePopUp)

// popup entrée zone Dusseldorf
//WA.onEnterZone(zoneDusseldorfName, () => {
    currentPopup =  WA.openPopup("popUpDusseldorf","Soon, access to Dusseldorf office",[
 	{
		label: "OK!",
            className: "popUpElement",
            callback: (popup => {
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneDusseldorfName, closePopUp)

// popup entrée zone Milan
//WA.onEnterZone(zoneMilanName, () => {
   currentPopup =  WA.openPopup("popUpMilan","Soon, access to Milan office",[
        {
            label: "OK",
            className: "popUpElement",
            callback: (popup => {
//				WA.openTab(urlMilan);
//              WA.openCoWebSite(urlMilan);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.onLeaveZone(zoneMilanName, closePopUp)

// popUp pour Paris Verone quand on entre dans la zone zoneParisVerone par la porte en haut
//WA.onEnterZone(zoneParisVeroneName, () => {
   currentPopup =  WA.openPopup("popUpParisVerone","Soon, access to Paris Verone office",[
        {
            label: "OK",
            className: "popUpElement",
            callback: (popup => {
//				WA.openTab('https://mapwa.net/static/wa/veepee/map/paris-verone.png');
//              WA.openCoWebSite(urlParis);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneParisVeroneName, closePopUp)

// popUp pour aller vers la zone Veepee Surprise
//WA.onEnterZone(zoneVeepeeSurpriseName, () => {
   currentPopup =  WA.openPopup("popUpVeepeeSurprise","Welcome to the surprise room! ?",[
        {
            label: "GO!",
            className: "popUpElement",
            callback: (popup => {
				WA.openTab('https://mapwa.net/static/wa/veepee/map/Veepee-new-logo-neon.jpg');
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneVeepeeSurpriseName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}