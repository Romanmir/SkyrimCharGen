function getRandomNumber(min, max){
	return Math.random() * (max - min) + min;
}

function filterObj(myObj, criteria){
	return myObj.filter(function(obj){
		return Object.keys(criteria).every(function(c){
			return obj[c] == criteria[c];
		});
	});
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
}

jQuery(function($) {
    $('.my-button').click(function() {
		$('#p01').toggleClass('active-class');
		$('body').toggleClass('active-class');
        return false;
    });
});

function printThisPage() {
	var name = prompt("Enter a name for this champion");

	if (name != null) {
		html2canvas(document.querySelector("#printThis")).then(canvas => {
			saveAs(canvas.toDataURL(), name+'.png');
		});
	} else {
		return;
	}
}

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

function skyrimLinkGen(divName, callingFunction, skyrimVar, itemName) {
	// Build the link
	link = skyrimVars['link'] + skyrimVar;
	// Test output
	//console.table(divName, callingFunction, skyrimVar, link);
	// build the div
	$(divName).html("<font class=\"text-info\"><a onclick=\""+callingFunction+"\">"+itemName+"</a>: </font><a href=\""+link+"\" target=\"_blank\">"+skyrimVar+"</a>");
}

function dbLinkGen(divName, callingFunction, skyrimVar, itemName) {
	// Build the link
	link = skyrimVars['dblink'] + skyrimVar;
	// Test output
	// console.table(divName, callingFunction, skyrimVar, link);
	// build the div
	$(divName).html("<font class=\"text-info\"><a onclick=\""+callingFunction+"\">"+itemName+"</a>: </font><a href=\""+link+"\" target=\"_blank\">"+skyrimVar+"</a>");
}

var data = JSON.parse('{"pc":{"gender":["male","female"],"race":["Altmer","Argonian","Bosmer","Breton","Dunmer","Imperial","Khajiit","Nord","Orc","Redguard"],"combat":[{"name":"One-handed","skillpoints":21},{"name":"Two-handed","skillpoints":19},{"name":"Destruction","skillpoints":17},{"name":"Archery","skillpoints":16}],"skills":[{"name":"Alchemy","skillpoints":15},{"name":"Alteration","skillpoints":14},{"name":"Block","skillpoints":13},{"name":"Conjuration","skillpoints":16},{"name":"Enchanting","skillpoints":13},{"name":"Illusion","skillpoints":13},{"name":"Lockpicking","skillpoints":11},{"name":"Pickpocket","skillpoints":12},{"name":"Restoration","skillpoints":13},{"name":"Smithing","skillpoints":10},{"name":"Sneak","skillpoints":13},{"name":"Speech","skillpoints":13}],"armor":[{"name":"Heavy_Armor","skillpoints":12},{"name":"Light_Armor","skillpoints":10},{"name":"Clothing","skillpoints":0}],"civilwar":["Imperial_Legion","Stormcloaks"],"blades":["Blades","Greybeards"],"disease":["None","Lycanthropy","Vampirism"],"residence":["Breezehome","Hjerim","Honeyside","Proudspire_Manor","Vlindrel_Hall","Heljarchen_Hall","Lakeview_Manor","Windstad_Manor"],"dngFactions":["Volkihar_Vampire_Clan","Dawnguard_(faction)"],"factions":["Companions","College_of_Winterhold_(faction)","Thieves_Guild_(faction)","Dark_Brotherhood","Bards_College"]},"npcs":[{"name":"Adelaisa_Vendicci","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Aela_the_Huntress","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Aeri","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Agmaer","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ahtar","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Ainethach","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Angrenor_Once-Honored","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Annekke_Crag-Jumper","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Anwen","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Aranea_Ienith","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Argis_the_Bulwark","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Athis","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Avrusa_Sarethi","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Balimund","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Beleval","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Belrand","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Benor","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Borgakh_the_Steel_Heart","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Brelyna_Maryon","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Calder","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Camilla_Valerius","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Celann","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Cicero","gender":"Male","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Cosnach","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Derkeethus","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"DB Initiate","gender":"Female","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"DB Initiate","gender":"Male","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Dravynea_the_Stoneweaver","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Durak","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Eola","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Erandur","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Erik_the_Slayer","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Faendal","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Farkas","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Filnjar","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Frea","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Dragonborn"},{"name":"Gat_gro-Shargakh","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ghorbash_the_Iron_Hand","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ghorza_gra-Bagol","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Gilfre","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Golldir","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Gregor","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Halbarn_Iron-Fur","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Hilund","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Illia","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ingjard","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Iona","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"J\'zargo","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Jenassa","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Jordis_the_Sword-Maiden","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Kharjo","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Lob","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Lydia","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Marcurio","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Mjoll_the_Lioness","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Morwen","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Moth gro-Bagol","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Muiri","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Njada_Stonearm","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Octieve_San","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Odfel","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ogol","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Omluag","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Onmund","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Orla","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Pavo_Attius","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Perth","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Quintus_Navale","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ralis_Sedarys","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Rayya","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Revyn Sadri","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ria","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Roggi_Knot-Beard","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Romlyn_Dreth","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Scouts-Many-Marshes","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Senna","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Serana","gender":"Female","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Shahvee","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Sondas_Drenim","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Sorex_Vinius","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Stenvar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Sven","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Sylgja","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Taarie","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Talvas_Fathryon","gender":"Male","spouse":"No","blades":"No","Steward":"Yes","follower":"No","uesp":"Dragonborn"},{"name":"Teldryn_Sero","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Dragonborn"},{"name":"Temba_Wide-Arm","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Torvar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Ugor","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Uthgerd_the_Unbroken","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Valdimar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Vilkas","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Viola_Giordano","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Vorstag","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Wilhelm","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ysolda","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"}],"starts":[{"shortdesc":"Caught Crossing the Border Illegally","longdesc":"For those who wish to use this to play through the original game start at Helgen, this option will streamline the process to skip the race selection dialogue during the lead up to your execution. All of the tutorial prompts will be removed as well.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Escape My Cell","longdesc":"You\'ve been left to die, forgotten, in a damp, dark cell. All you really want is a second chance - to escape! Fortunately, Mara has taken pity on you and provided you a means to do just that, if you can manage it.<br>With this start option, 3 lockpicks will appear in the soul gem holder. Pick the lock on the jail cell door and win your freedom. It\'s that simple. You will simply begin the game proper as soon as you\'ve climbed up the stairs. Until doing so, you can still go back and ask Mara for another option. After that, you\'re committed.<br>Should you fail to pick the lock, you can go back and pick another start option to get out. Sorry, Mara insists we limit this strictly to 3 lockpicks only.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Arrived by Ship","longdesc":"You will arrive by ship in the port of Solitude, Dawnstar, Windhelm, or Raven Rock with little more than some basic supplies, middle class clothing, and a decent sum of gold to start over upon your arrival.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Property Owner","longdesc":"You will start off with the fully furnished house of your choice in one of 4 major cities. Windhelm is not included due to the quest that interacts directly with the house there. Raven Rock is similarly not included due to the attached quest involved with acquiring that property.<br>Each house will start you off with appropriate class clothing and some leftover cash to spend. There will also be a selection of weapons fitting to the city available on the storage chest in the bedroom.<br>Alternatively, you can choose from one of the 3 Hearthfire houses. For these, you will start off with a fully furnished Entry Way, Main Hall, Cellar, and all exterior additions. The only thing which will not be enabled is the bard since the bard specifically mentions your steward you don\'t have yet. The drafting table outside should be ready to go with whatever additions you want on the house afterward.<br>If owning property in a city is boring, you don\'t like Hearthfire houses, or you\'d prefer to have access to all of the available hold questing, you can choose instead to own a farmhouse. The farmhouse is situated on the main road just north of Rorikstead and comes complete with a pair of NPCs to act as your farm hands. Your farm will generate a regular income that you can collect from the farm hands. You do need to come home from time to time to collect it though. The farmhouse also supports adoption if Hearthfire Multiple Adoptions is installed.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Member of a Guild","longdesc":"You will be a new recruit in one of the joinable factions in the game. The Companions, College of Winterhold, Dark Brotherhood, Thieves Guild, The Dawnguard, or the Volkihar Vampires (Lord Harkon\'s Court). Your starting equipment will be geared toward the faction you have chosen.<br>    For the Thieves Guild, you will begin just inside the Ragged Flagon, having just emerged from the Ratway. Talk to Brynjolf to seal the deal.<br>    For the Dark Brotherhood, you will begin immediately inside the Falkreath Sanctuary and need only speak to Astrid to complete the process.<br>    For the College, you\'ll be placed just outside the Hall of Elements and will have completed the initial joining phase.<br>    For the Companions, you\'ll begin in Jorvaskr and begin with the mission to train with Varkas.<br>    For the Dawnguard, you\'ll start off in Fort Dawnguard ready to pick up the questline just after Bloodlines.<br>    For the Volkihar, you\'ll start off in Harkon\'s castle just after being bitten and becoming a vampire lord.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Patron at an Inn","longdesc":"You will be able to choose from one of several inns throughout Skyrim (and Raven Rock too). Some are relatively safe, others not so much. Nightgate Inn in particular is isolated in the mountains and is more dangerous than most others. Do be careful.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Outlaw in the Wilds","longdesc":"You will begin as a member of a group of bandits. For the sake of variety, the group of bandits will be chosen at random, from any properly configured bandit lair in either Tamriel or Solstheim. You will begin with standard bandit level equipment. The bandit faction at the start location will remain friendly to you as long as you don\'t piss them off first. Tread carefully though, you WILL have a bounty of 1500 gold in the hold the game chooses. The guards will not take kindly to seeing you trotting into a civilized area unless you\'re prepared to pay up.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Soldier in the Army","longdesc":"You begin as a recruited soldier in either the Stormcloaks or the Imperial Legion. Which one you choose will determine the gear you start with. You will begin at the point immediately after what would be each one\'s first mission, which is little more than a cannon fodder quest on either side.<br>Make sure you watch the Jagged Crown scene or things will get messed up!","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Camping in the Woods","longdesc":"You are a lone hunter, camping in the woods. This will start you off with decent low level equipment, a campfire, cooking pot, bedroll and tent. The camp will be in the forest/hills near Helgen and will serve as an alternative method for witnessing the dragon attack that will not require you to actually be in the village when it is destroyed. The camp will remain in place permanently should you wish to return and use it as a base.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Shipwrecked off the Coast","longdesc":"Shipwrecked! You were a passenger aboard a merchant ship on the way to Solitude when the ship struck an iceberg off the coast and then capsized. Make your escape from the doomed vessel, retrieving any useful items on your way out, then make your way to the nearby ice floes. From there, you\'ll quickly realize it\'s a LONG way off to shore.<br>Take care if using survival mods, especially those with hypothermia modules. You can freeze to death quickly!","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Attacked and Left for Dead","longdesc":"You find yourself in a remote area, robbed and left for dead by bandits. They were kind enough to leave what they thought was your corpse dressed in ragged clothes, but nothing more. Can you survive the harsh wilderness and reach safety alive?<br>The random locations now include a few spots on Solstheim as well.<br>With proper setup, any location in Tamriel or Solstheim in any mod can be made to work with this. See the extension documentation for details.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Vampire in a Secluded Lair","longdesc":"The lair has always been home to you, for as long as you can remember. It isn\'t even clear to you anymore how long you\'ve been a vampire, but you know you still hunger for prey and still have an urge to adventure.<br>The game will pick a random vampire lair location from anywhere in Tamriel or Solstheim as long as the dungeon is properly configured. This can include locations added by mods as well. You will begin equipped with standard vampire armor and weapons like all of the other vampires in the game.<br>Be aware you could potentially be dropped into a cell with hostile enemies nearby. Be careful when exiting your lair.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Necromancer in a Hidden Lab","longdesc":"The laboratory you discovered in Blackreach is running low on supplies. It looks like you\'ll need to set forth soon to replenish, and perhaps see what\'s going on in the world these days.<br>Fair warning - there is a Dwemer Sphere outside the door to the lab. You\'ll need to plan ahead before leaving.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Vigilant of Stendarr","longdesc":"You have been accepted into the Vigilants of Stendarr and have been granted living access to their headquarters outside of Dawnstar.<br>The chest next to you when you begin is yours and is a safe storage container.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Warlock\'s Thrall","longdesc":"You snap to your senses, a sudden weight lifted from your mind by a curious ring you found while gutting a fish. You aren\'t even sure why you put it on, but you did. Then, suddenly, it becomes clear... You\'ve been under the control of a pair of warlocks dabbling in necromancy! Fortunately they are not aware you\'ve broken their hold over you, and now is your chance to escape!<br>You begin the game in Boulderfall Cave, the home of two warlocks. Aside from some rather mundane robes and boots, you are equipped with a very powerful Ring of Nullification and a cheap iron dagger. You are safe so long as you choose to remain in the cave. Venture outside, and as soon as you\'ve wandered far enough, the warlocks will realize you\'ve broken their hold and become hostile. Time to run if you want to live!<br>Note: There is no safe storage at this location, so don\'t leave anything here if you want it later.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Live in an Orc Stronghold","longdesc":"You\'ll begin in the orc stronghold of Dushnikh Yal. Though you have lived there for some time, they still call you outlander, and now you once more hunger for adventure.<br>For some people, this may be considered an unbalanced option since you get decked out in a full set of orcish armor and a nice big orcish battleaxe, but you\'re still level 1. Death can still find you easily enough.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Khajiit Caravan Guard","longdesc":"You\'ve been with the caravan for a long time now, and finally your group leader has hired a new guard. Time for some adventure, but you\'ll always be welcome at the camps in Whiterun or Markarth. This option only activates for a Khajiit.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Member of a Forsworn Tribe","longdesc":"Once the true rulers of The Reach, your tribesmen and kin have since been forced to carve out a life in the rugged mountains, away from more comfortable living. The time has come for you to leave and find adventure on your own. Only available for Bretons.<br>Note - You get a usable chest in the start location that\'s safe to keep things in.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"Argonian Dock Worker","longdesc":"You\'ve been on these docks for months now, perhaps longer. The locals aren\'t treating you any better and it\'s high time you did something about it. A life of adventure and glory is just the change of pace you need.<br>Note - The first end table inside the door, with the soul gem holder on it, belongs to you and can be used as storage. The container does not respawn.","mod":"Live Another Life","racialRequirements":"Argonian"},{"shortdesc":"Redguard Alik\'r Warrior","longdesc":"Disillusioned with life back home in Hammerfell, you joined the Alik\'r and set out to Skyrim on a mission. Only things are not what they seem and it looks like time to set out on your own. Nobody back home will know the difference anyway.","mod":"Live Another Life","racialRequirements":"Redguard"},{"shortdesc":"Dunmer Refugee (Windhelm)","longdesc":"Morrowind is still a very hostile place, and you\'ve decided to take your chances in Skyrim instead. Upon arrival though, Windhelm isn\'t at all what you expected or were hoping for. It looks like it\'s time to cast aside your expectations of an easy life and become an adventurer.<br>Note - The bedroll and sack you start standing next to for this are yours. The sack is safe storage.","mod":"Live Another Life","racialRequirements":"Dunmer"},{"shortdesc":"Dunmer Refugee (Raven Rock)","longdesc":"The mainland of Morrowind is still a hostile place, and you\'ve had enough. You\'re taking your chances on Solstheim in Raven Rock. Upon your arrival though, it\'s not at all what you were hoping. They almost treat you as an outsider. It looks like that easy life isn\'t there to be had after all. Might be time to take up adventuring instead.<br>This start will begin in the abandon building on the edge of town and from there, you\'re on your own.<br>Note - The bedroll and sack you start standing next to for this are yours. The sack is safe storage.<br>Starting on Solstheim can be tough since the DLC is intended for higher level characters. Death will visit often if you are not careful!","mod":"Live Another Life","racialRequirements":"Dunmer"},{"shortdesc":"Altmer Agent of the Thalmor","longdesc":"You\'re assigned to the Thalmor Embassy near Solitude. As part of your regular duties, you are tasked with routine investigations of various matters in Skyrim. Though Elenwen has yet to trust you with a field assignment - until now. How fortunate that it should mean finally getting to do some adventuring on the side while you\'re out.<br>You begin the game inside the Thalmor Embassy on the upper floor, standing next to a bed. Since the Embassy does not respawn in the vanilla game, all storage should be safe. You will be a member of the Thalmor faction, so you can take what you wish from the building at any time, and can sleep in any of the beds you can find.<br>Once you have arrived at Helgen, you will be removed from the faction and the Embassy will then be closed to you until the party during the main quest. Thalmor may become hostile toward you at this point due to their assumption that you\'ve abandoned your post. Be aware that membership in the Thalmor faction may also make Stormcloaks hostile toward you, including cities run by them! Unlike the bandit start, you will retain this membership for as long as you avoid going to Helgen.","mod":"Live Another Life","racialRequirements":"Altmer"},{"shortdesc":"Erik the Slayer\'s Childhood Friend","longdesc":"Only available for Nords.<br>You and Erik have lived in Rorikstead all your lives and have been the best of friends since Mralki took you in. Farming isn\'t a bad life, but ever since Lokir started telling all those stories about a life of adventure, it\'s all you two have talked about for months. Erik\'s father has finally given his blessing and the two of you are finally geared up and ready to depart!<br>You begin the game at the Frostfruit Inn in Rorikstead. Erik\'s mini-quest is completed and he has been assigned as your follower. You can dismiss him at any time just like normal. Your starting equipment will be the same as his equipment.","mod":"Live Another Life","racialRequirements":"Nord"},{"shortdesc":"Member of the Penitus Oculatus","longdesc":"Only available for Imperials.<br>You\'ve been assigned to the Emperor\'s detail in Dragon Bridge. The commander has finally realized that someone needs to go out and do some field work to prepare for the Emperor\'s visit to Skyrim. Fortunately, the commander has chosen you for the job. It can\'t hurt to do some adventuring on the side while you\'re out doing your duties.<br>You begin the game at the Penitus Oculatus Outpost in Dragon Bridge. You are equipped with a full uniform, an Imperial sword, and Imperial shield plus incidental gear and loot. As a member of the faction, you will be able to take anything from the outpost if you want, but since this cell respawns, you DO NOT have safe storage. Membership in this faction may cause other factions to react in a hostile manner!<br>Upon the \'Unbound\' quest completing, you will be removed from the faction on the assumption that you have failed to fulfill the duties you were assigned to. You will also be expelled should you decide to turn on your fellow Oculatus members and attack them.","mod":"Live Another Life","racialRequirements":"Imperials"},{"shortdesc":"Surprise Me","longdesc":"Random roll that will pick one of the above. The standard Helgen start will not be included in this. Race specific starts will only apply if the player\'s race matches.","mod":"Live Another Life","racialRequirements":"None"},{"shortdesc":"I am an addict in a skooma den.","longdesc":"I can\'t believe I\'ve finally found the den! The shaking has gotten worse ever since I left home, but now my suffering is at an end. I do have a strange feeling about this den, though...<br>You spawn in Redwater Den with only some basic provisions.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am an adventurer in a Dwemer ruin.","longdesc":"I knew I shouldn\'t have touched that orb, but my curiosity got the better of me. I pray to the Gods that there\'s a way out of here...<br>You spawn in Kagrenzel with a set of leather armor and some basic equipment.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am an alchemist camping in the wilderness.","longdesc":"It\'s been a while since I left home to become an alchemist, and I can\'t help but long for something more exciting to do than picking flowers. Maybe it\'s time I left this grove behind...<br>You spawn at a camp near Evergreen Grove with some provisions and alchemy ingredients.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I have arrived at Angi\'s camp in Falkreath Hold.","longdesc":"I have come across the camp of a markswoman named Angi. Maybe I should ask her to train me.<br>You spawn at Angi\'s camp with a set of leather armor and some basic equipment. Thanks to leomorg for the suggestion!","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am a beggar.","longdesc":"I don\'t even remember how long I\'ve been living here in this gods-forsaken place. It\'s time I got out of here and became an adventurer or joined the Thieves\' Guild or the Forsworn or something along those lines. Gods know anything would be better than continuing to rot away in this dump.<br>You can spawn either in Beggar\'s Row in Riften or the Markarth Warrens with only tattered rags for clothing and a few gold coins.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I was attacked by a dragon.","longdesc":"By the Gods! I knew we should have sent for the guards sooner. When the dragon came, I ran inside immediately, but it looks like the others didn\'t make it. I have no I idea what to do now, but since everything here is destroyed, I have no choice but to leave and start over...<br>You spawn in a hut near Ancient\'s Ascent with some food and a woodcutter\'s axe as your only means of self-defense.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I have been thrown into jail.","longdesc":"Well, here I am... I can\'t believe those imbecile guards actually caught me. If I don\'t want to serve my time in here, I better start looking for a way out.<br>You spawn in a jail of your choosing, where you can either serve your time or try and break out. If you do the latter, be sure to recover your belongings from the evidence chest!","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am a pilgrim to a temple.","longdesc":"I have finally arrived at the temple. Now that I have received the blessings of the Divines, I should start looking for work in town. I can\'t go back home after all...<br>You spawn in a temple in a town with a monk outfit and some provisions.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am a pilgrim to a sacred site.","longdesc":"Depending on your choice, you spawn at the Shrine of Azura, the Sacellum of Boethiah, the Shrine of Mehrunes Dagon, the Eldergleam Sanctuary, the Statue to Meridia, the Shrine of Peryite, Stendarr\'s Beacon, or the Hall of the Vigilant with appropriate equipment and enough provisions to continue your travels.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I was imprisoned by the Thalmor.","longdesc":"I\'ve actually been imprisoned by those gods-damned Thalmor! If I don\'t want to be tortured until I renounce my faith in Talos, now is the time to get out of here. Those guards don\'t seem particularly attentive...<br>You spawn in Northwatch Keep with nothing but a few lockpicks for equipment. Good luck!","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I was slain by a vampire and laid to rest.","longdesc":"A few days ago I was struck down by an intense fever. Luckily, none of the fools that are my family seem to have recognized my symptoms for what they were, so they entombed me here after my death. Now I\'m finally free to leave them behind and start a new life.<br>You spawn in a hall of the dead or graveyard of your choice with your grave goods for equipment.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am a wandering merchant / mercenary.","longdesc":"There\'s an old Cyrodiilic proverb: \'The riskier the road, the greater the profit.\' This civil war in Skyrim is bound to be good for business. I\'d be a fool if I didn\'t take this opportunity. After all, I can hardly make less money than back home...<br>You spawn at one of Skyrim\'s border outposts. If you choose to be a merchant, you start with a horse and an inventory full of random wares: if you choose the mercenary option, you start with a full set of steel plate armor and some provisions. Thanks to ZeroSaber39 for suggesting the border outposts as a starting location!","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am a werewolf at Frostmoon Crag.","longdesc":"I\'ve now been staying with Majni\'s pack for quite a while, but the others still regard me as a stranger. I\'ve got enough gold to pay for passage to Skyrim, so maybe I should leave and start traveling again...<br>You spawn at Frostmoon Crag (obviously) with a few provisions and enough gold to travel to Skyrim.","mod":"New Beginnings","racialRequirements":"None"},{"shortdesc":"I am a warlock/witch in a secluded lair.","longdesc":"It has been how long since I was accepted into this coven? Months? Years? And what have I been doing all that time? I can count the number of times I\'ve left this cave on one hand. It is time I leave and explore the outside world.<br>You start with a mage outfit, some magic scrolls, and some provisions. Male characters spawn in Cragwallow Slope, female ones in Snapleg Cave. The NPCs in your starting location will remain friendly as long as you don\'t attack them.","mod":"New Beginnings","racialRequirements":"None"}]}');

var pc = data.pc;
var npc = data.npcs;

var skyrimVars = {};

skyrimVars['link']="http://www.uesp.net/wiki/Skyrim:";
skyrimVars['dblink']="http://www.uesp.net/wiki/Dragonborn:";

//foo['bar']=blah

function skyrimCharGen() {
	raceGen();
	genderGen();
	combatGen();
	armorGen();
	skill1Gen();
	skill2Gen();
	skill3Gen();
	skill4Gen();
	attributePointSpread();
	spouse1Gen();
	spouse2Gen();
	residenceGen();
	stewardGen();
	followerGen();
	civilWarFaction();
	factionGen();
	diseaseGen();
	dngFaction();
	questOrderGen();
	totalSkillPointsGen();
}

function raceGen() {
	var oldRace = skyrimVars['race'];
	raceRNG = Math.round(getRandomNumber(0,9));
	skyrimVars['race'] = pc.race[raceRNG];

	while (skyrimVars['race'] == oldRace) {
		raceRNG = Math.round(getRandomNumber(0,9));
		skyrimVars['race'] = pc.race[raceRNG];
	}
	startingPoint();
	skyrimLinkGen("#race", "raceGen()", skyrimVars['race'], "Race");
}

function genderGen() {
	if (skyrimVars['gender'] == "Male") {
		skyrimVars['gender'] = "Female";
		$("#gender").html("<font class=\"text-info\"><a onclick=\"genderGen()\">Gender</a>: </font>" + skyrimVars['gender']);
	} else {
		skyrimVars['gender'] = "Male";
		$("#gender").html("<font class=\"text-info\"><a onclick=\"genderGen()\">Gender</a>: </font>" + skyrimVars['gender']);
	}
	spouse1Gen();
	spouse2Gen();

}

function combatGen() {
	var oldCombat = skyrimVars['combat'];
	combatRNG = Math.round(getRandomNumber(0,3));
	skyrimVars['combat'] = pc.combat[combatRNG].name;
	skyrimVars['combatPoints'] = pc.combat[combatRNG].skillpoints;

	while (skyrimVars['combat'] == oldCombat) {
		combatRNG = Math.round(getRandomNumber(0,3));
		skyrimVars['combat'] = pc.combat[combatRNG].name;
		skyrimVars['combatPoints'] = pc.combat[combatRNG].skillpoints;
	}

	skyrimLinkGen("#combatSkillName", "combatGen()", skyrimVars['combat'], "Combat Skill");
	$("#combatSkillPoints").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skyrimVars['combatPoints']);
	totalSkillPointsGen()
}

function armorGen () {
	var oldArmor = skyrimVars['armor'];
	armorRNG = Math.round(getRandomNumber(0,2));
	skyrimVars['armor'] = pc.armor[armorRNG].name;
	skyrimVars['armorPoints'] = pc.armor[armorRNG].skillpoints;

	while (skyrimVars['armor'] == oldArmor) {
		armorRNG = Math.round(getRandomNumber(0,2));
		skyrimVars['armor'] = pc.armor[armorRNG].name;
		skyrimVars['armorPoints'] = pc.armor[armorRNG].skillpoints;
	}

	skyrimLinkGen("#armorSkillName", "armorGen()", skyrimVars['armor'],"Armor");
	$("#armorSkillPoints").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skyrimVars['armorPoints']);
	totalSkillPointsGen()
}

function skill1Gen() {
	skill1RNG = Math.round(getRandomNumber(0,11));
	skyrimVars['skill1Name'] = pc.skills[skill1RNG].name;

	while (skyrimVars['skill1Name'] == skyrimVars['skill2Name'] || skyrimVars['skill1Name'] == skyrimVars['skill3Name'] || skyrimVars['skill1Name'] == skyrimVars['skill4Name']) {
		skill1RNG = Math.round(getRandomNumber(0,11));
		skyrimVars['skill1Name'] = pc.skills[skill1RNG].name;
	}

	skyrimLinkGen("#skill1Name","skill1Gen()",skyrimVars['skill1Name'],"First Skill");
	skyrimVars['skill1Points'] = pc.skills[skill1RNG].skillpoints;
	$("#skill1Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skyrimVars['skill1Points']);
	totalSkillPointsGen()
}

function skill2Gen() {
	skill2RNG = Math.round(getRandomNumber(0,11));
	skyrimVars['skill2Name'] = pc.skills[skill2RNG].name;

	while (skyrimVars['skill2Name'] == skyrimVars['skill1Name'] || skyrimVars['skill2Name'] == skyrimVars['skill3Name'] || skyrimVars['skill2Name'] == skyrimVars['skill4Name']) {
		skill2RNG = Math.round(getRandomNumber(0,11));
		skyrimVars['skill2Name'] = pc.skills[skill2RNG].name;
	}
	
	skyrimVars['skill2Points'] = pc.skills[skill2RNG].skillpoints;
	skyrimLinkGen("#skill2Name","skill2Gen()",skyrimVars['skill2Name'],"Second Skill");
	$("#skill2Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skyrimVars['skill2Points']);
	totalSkillPointsGen()
}

function skill3Gen() {
	skill3RNG = Math.round(getRandomNumber(0,11));
	skyrimVars['skill3Name'] = pc.skills[skill3RNG].name;

	while (skyrimVars['skill3Name'] == skyrimVars['skill1Name'] || skyrimVars['skill3Name'] == skyrimVars['skill2Name'] || skyrimVars['skill3Name'] == skyrimVars['skill4Name']) {
		skill3RNG = Math.round(getRandomNumber(0,11));
		skyrimVars['skill3Name'] = pc.skills[skill3RNG].name;
	}
	
	skyrimVars['skill3Points'] = pc.skills[skill3RNG].skillpoints;
	skyrimLinkGen("#skill3Name","skill3Gen()",skyrimVars['skill3Name'],"Third Skill");
	$("#skill3Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skyrimVars['skill3Points']);
	totalSkillPointsGen()
}

function skill4Gen() {
	skill4RNG = Math.round(getRandomNumber(0,11));
	skyrimVars['skill4Name'] = pc.skills[skill4RNG].name;

	while (skyrimVars['skill4Name'] == skyrimVars['skill1Name'] || skyrimVars['skill4Name'] == skyrimVars['skill2Name'] || skyrimVars['skill4Name'] == skyrimVars['skill3Name']) {
		skill4RNG = Math.round(getRandomNumber(0,11));
		skyrimVars['skill4Name'] = pc.skills[skill4RNG].name;
	}
	
	skyrimVars['skill4Points'] = pc.skills[skill4RNG].skillpoints;
	skyrimLinkGen("#skill4Name","skill4Gen()",skyrimVars['skill4Name'],"Forth Skill");
	$("#skill4Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skyrimVars['skill4Points']);
	totalSkillPointsGen()
}

function totalSkillPointsGen() {
	skyrimVars['totalSkillPoints'] = skyrimVars['combatPoints'] + skyrimVars['armorPoints'] + skyrimVars['skill1Points'] + skyrimVars['skill2Points'] + skyrimVars['skill3Points'] + skyrimVars['skill4Points'];
	$("#totalSkillPoints").html("<font class=\"text-info\">Total Skill Points: </font>" + skyrimVars['totalSkillPoints']);
}

function attributePointSpread() {
	skyrimVars['magicka'] = Math.round(getRandomNumber(1,5));
	skyrimVars['health'] = Math.round(getRandomNumber(1,5));
	skyrimVars['stamina'] = Math.round(getRandomNumber(1,5));

	$("#Health").html("<font class=\"text-danger\"><a onclick=\"attributePointSpread()\">Health</a>: </font>" + skyrimVars['health']);
	$("#Stamina").html("<font class=\"text-success\"><a onclick=\"attributePointSpread()\">Stamina</a>: </font>" + skyrimVars['stamina']);
	$("#Magicka").html("<font class=\"text-info\"><a onclick=\"attributePointSpread()\">Magicka</a>: </font>" + skyrimVars['magicka']);
}

function spouse1Gen() {
	var spousesList = filterObj(npc, {spouse: "Yes"});
	validSpouses = (skyrimVars['gender'] == "Male") ? filterObj(spousesList, {gender: "Female"}) : filterObj(spousesList, {gender: "Male"});
	skyrimVars['spouse1'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];

	while (skyrimVars['spouse1'] == skyrimVars['spouse2'] ||
			skyrimVars['spouse1'] == skyrimVars['steward'] ||
			skyrimVars['spouse1'] == skyrimVars['follower']){
		skyrimVars['spouse1'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}

	if (skyrimVars['spouse1'].uesp == "Skyrim"){
		skyrimLinkGen("#Spouse1","spouse1Gen()",skyrimVars['spouse1'].name,"Spouse 1");
	} else {
		dbLinkGen("#Spouse1","spouse1Gen()",skyrimVars['spouse1'].name,"Spouse 1");
	}
	
	//$("#Spouse1").html("<font class=\"text-info\"><a onclick=\"spouse1Gen()\">Spouse 1</a>: </font>" + skyrimVars['spouse1'].name);
}

function spouse2Gen() {
	var spousesList = filterObj(npc, {spouse: "Yes"});
	validSpouses = (skyrimVars['gender'] == "Male") ? filterObj(spousesList, {gender: "Female"}) : filterObj(spousesList, {gender: "Male"});
	skyrimVars['spouse2'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];

	while (skyrimVars['spouse2'] == skyrimVars['spouse1'] ||
		   skyrimVars['spouse2'] == skyrimVars['steward'] || 
		   skyrimVars['spouse2'] == skyrimVars['follower']){
		skyrimVars['spouse2'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}

	if (skyrimVars['spouse2'].uesp == "Skyrim"){
		skyrimLinkGen("#Spouse2","spouse2Gen()",skyrimVars['spouse2'].name,"Spouse 2");
	} else {
		dbLinkGen("#Spouse2","spouse2Gen()",skyrimVars['spouse2'].name,"Spouse 2");
	}


}

function residenceGen() {
	var oldHome = skyrimVars['primaryResidence'];
	
	var residenceRNG = Math.round(getRandomNumber(0,7));
	skyrimVars['primaryResidence'] = pc.residence[residenceRNG];

	while (skyrimVars['primaryResidence'] == oldHome){
		var residenceRNG = Math.round(getRandomNumber(0,7));
		skyrimVars['primaryResidence'] = pc.residence[residenceRNG];
	}

	skyrimLinkGen("#Residence","residenceGen()",skyrimVars['primaryResidence'],"Primary Residence");
}

function stewardGen() { 
	var stewardsList = filterObj(npc, {Steward: "Yes"});
	skyrimVars['steward'] = stewardsList[Math.round(getRandomNumber(0,32))];

	while (skyrimVars['steward'] == skyrimVars['spouse1'] ||
		   skyrimVars['steward'] == skyrimVars['spouse2'] || 
		   skyrimVars['steward'] == skyrimVars['follower']){
 		skyrimVars['steward'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}

	if (skyrimVars['spouse2'].uesp == "Skyrim"){
		skyrimLinkGen("#Steward","stewardGen()",skyrimVars['steward'].name,"Steward");
	} else {
		dbLinkGen("#Steward","stewardGen()",skyrimVars['steward'].name,"Steward");
	}
}

function followerGen() {
	var followersList = filterObj(npc, {follower: "Yes"});
	skyrimVars['follower'] = followersList[Math.round(getRandomNumber(0,36))];

	while (skyrimVars['follower'] == skyrimVars['spouse1'] ||
		   skyrimVars['follower'] == skyrimVars['spouse2'] || 
		   skyrimVars['follower'] == skyrimVars['steward']){
 		skyrimVars['follower'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}

	if (skyrimVars['spouse2'].uesp == "Skyrim"){
		skyrimLinkGen("#Follower","followerGen()",skyrimVars['follower'].name,"Follower");
	} else {
		dbLinkGen("#Follower","followerGen()",skyrimVars['follower'].name,"Follower");
	}
}

function factionGen() {
	//Greybeards vs. Blades
	if (typeof skyrimVars['bladesFaction'] == "undefined"){
		var bladesRNG = Math.round(getRandomNumber(0,1));
		skyrimVars['bladesFaction'] = pc.blades[bladesRNG];
	} else {
		if (skyrimVars['bladesFaction'] == "Blades") {
			skyrimVars['bladesFaction'] = "Greybeards"
		} else {
			skyrimVars['bladesFaction'] = "Blades"
		}
	}

	skyrimLinkGen("#PrimaryQuestFaction","factionGen()",skyrimVars['bladesFaction'],"Primary Quest Faction");
}

function civilWarFaction() {
	if (typeof skyrimVars['civilWarFaction'] == "undefined"){
		var civilwarRNG = Math.round(getRandomNumber(0,1));
		skyrimVars['civilWarFaction'] = pc.civilwar[civilwarRNG];
	} else {
		skyrimVars['civilWarFaction'] = (skyrimVars['civilWarFaction'] == "Imperial_Legion") ? skyrimVars['civilWarFaction'] = "Stormcloaks" : skyrimVars['civilWarFaction'] = "Imperial_Legion";
	}
	skyrimLinkGen("#CivilWarFaction","civilWarFaction()",skyrimVars['civilWarFaction'],"Civil War Faction");
}

function diseaseGen() {
	var oldDisease = skyrimVars['disease'];

	while (typeof skyrimVars['disease'] == "undefined" | oldDisease == skyrimVars['disease']){
		var diseaseRNG = Math.round(getRandomNumber(0,2));
		skyrimVars['disease'] = pc.disease[diseaseRNG];
	}
	
	skyrimLinkGen("#Disease","diseaseGen()",skyrimVars['disease'],"Disease");
}

function dngFaction() {
	if (skyrimVars['disease'] == "Lycanthropy"){
		skyrimVars['dngFaction'] = pc.dngFactions[1];
	} else if (skyrimVars['disease'] == "None"){
		skyrimVars['dngFaction'] = pc.dngFactions[1];
	} else { 
		skyrimVars['dngFaction'] = pc.dngFactions[Math.round(getRandomNumber(0,1))];
	}

	skyrimLinkGen("#DawnguardFaction","dngFaction()",skyrimVars['dngFaction'],"Dawnguard Faction");
}

function questOrderGen() {
	skyrimVars['questOrder'] = shuffle(pc.factions);

	$("#QuestOrder").html("<font class=\"text-info\"><a onclick=\"questOrderGen()\">Major Faction Alliance Order</a>:<br> </font>" + skyrimVars['questOrder'].join('<br>'));
}

function startingPoint() {
	var starts = data.starts;
	
	var altStartList1 = filterObj(starts, {racialRequirements: "None"});
	var altStartList2 = filterObj(starts, {racialRequirements: skyrimVars['race']});
	var altStartListFinal = altStartList1.concat(altStartList2);

	altstartsRNGUpperBound = altStartListFinal.length - 1;
	altStartRNG = Math.round(getRandomNumber(0,altstartsRNGUpperBound));
	
	skyrimVars['altStart'] = altStartListFinal[altStartRNG];

	$("#startPoint").html("<font class=\"text-info\"> <a onclick=\"startingPoint()\">Modded Game Starting Point</a>:</font> " + skyrimVars['altStart'].shortdesc + ".<br>" + skyrimVars['altStart'].longdesc + "<br><br> Mod Requirement: " + skyrimVars['altStart'].mod);
}