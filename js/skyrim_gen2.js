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

var data = JSON.parse('{"pc":{"gender":["Male","Female"],"race":["Altmer","Argonian","Bosmer","Breton","Dunmer","Imperial","Khajiit","Nord","Orc","Redguard"],"combat":[{"name":"One-handed","skillpoints":21},{"name":"Two-handed","skillpoints":19},{"name":"Destruction","skillpoints":17},{"name":"Archery","skillpoints":16}],"skills":[{"name":"Alchemy","skillpoints":15},{"name":"Alteration","skillpoints":14},{"name":"Block","skillpoints":13},{"name":"Conjuration","skillpoints":16},{"name":"Enchanting","skillpoints":13},{"name":"Illusion","skillpoints":13},{"name":"Lockpicking","skillpoints":11},{"name":"Pickpocket","skillpoints":12},{"name":"Restoration","skillpoints":13},{"name":"Smithing","skillpoints":10},{"name":"Sneak","skillpoints":13},{"name":"Speech","skillpoints":13}],"armor":[{"name":"Heavy_Armor","skillpoints":12},{"name":"Light_Armor","skillpoints":10},{"name":"No_Armor","skillpoints":0}],"civilwar":["Imperial_Legion","Stormcloaks"],"blades":["Blades","Greybeards"],"disease":["None","Lycanthropy","Vampirism"],"residence":["Breezehome","Hjerim","Honeyside","Proudspire_Manor","Vlindrel_Hall","Heljarchen_Hall","Lakeview_Manor","Windstad_Manor"],"dngFactions":["Volkihar_Vampire_Clan","Dawnguard_(faction)"],"factions":["Companions","College_of_Winterhold_(faction)","Thieves_Guild_(faction)","Dark_Brotherhood","Bards_College"]},"npcs":[{"name":"Adelaisa_Vendicci","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Aela_the_Huntress","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Aeri","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Agmaer","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ahtar","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Ainethach","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Angrenor_Once-Honored","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Annekke_Crag-Jumper","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Anwen","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Aranea_Ienith","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Argis_the_Bulwark","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Athis","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Avrusa_Sarethi","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Balimund","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Beleval","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Belrand","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Benor","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Borgakh_the_Steel_Heart","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Brelyna_Maryon","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Calder","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Camilla_Valerius","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Celann","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Cicero","gender":"Male","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Cosnach","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Derkeethus","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"DB Initiate","gender":"Female","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"DB Initiate","gender":"Male","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Dravynea_the_Stoneweaver","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Durak","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Eola","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Erandur","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Erik_the_Slayer","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Faendal","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Farkas","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Filnjar","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Frea","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Dragonborn"},{"name":"Gat_gro-Shargakh","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ghorbash_the_Iron_Hand","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ghorza_gra-Bagol","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Gilfre","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Golldir","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Gregor","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Halbarn_Iron-Fur","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Hilund","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Illia","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ingjard","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Iona","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"J\'zargo","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Jenassa","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Jordis_the_Sword-Maiden","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Kharjo","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Lob","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Lydia","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Marcurio","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Mjoll_the_Lioness","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Morwen","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Moth gro-Bagol","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Muiri","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Njada_Stonearm","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Octieve_San","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Odfel","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ogol","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Omluag","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Onmund","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Orla","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Pavo_Attius","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Perth","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Quintus_Navale","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ralis_Sedarys","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Rayya","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Revyn Sadri","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ria","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Roggi_Knot-Beard","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Romlyn_Dreth","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Scouts-Many-Marshes","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Senna","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Serana","gender":"Female","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Shahvee","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Sondas_Drenim","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Sorex_Vinius","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Stenvar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Sven","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Sylgja","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Taarie","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Talvas_Fathryon","gender":"Male","spouse":"No","blades":"No","Steward":"Yes","follower":"No","uesp":"Dragonborn"},{"name":"Teldryn_Sero","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Dragonborn"},{"name":"Temba_Wide-Arm","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Torvar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Ugor","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Uthgerd_the_Unbroken","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Valdimar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Vilkas","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Viola_Giordano","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Vorstag","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Wilhelm","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ysolda","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"}]}');

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
	raceRNG = Math.round(getRandomNumber(0,9));
	skyrimVars['race'] = pc.race[raceRNG];
	skyrimVars['raceLink'] = skyrimVars['link'] + skyrimVars['race'];

	$("#race").html("<font class=\"text-info\"><a onclick=\"raceGen()\">Race</a>: </font><a href=\"" + skyrimVars['raceLink'] + "\" target=\"_blank\">" + skyrimVars['race'] + "</a>");
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
	combatRNG = Math.round(getRandomNumber(0,3));
	skyrimVars['combat'] = pc.combat[combatRNG].name;
	skyrimVars['combatPoints'] = pc.combat[combatRNG].skillpoints;
	skyrimVars['combatLink'] = skyrimVars['link'] + skyrimVars['combat'];

	$("#combatSkillName").html("<font class=\"text-info\"><a onclick=\"combatGen()\">Combat Skill</a>: </font><a href=\""  + skyrimVars['combatLink'] + "\" target=\"_blank\">" + skyrimVars['combat'] + "</a>");
	$("#combatSkillPoints").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skyrimVars['combatPoints']);
	totalSkillPointsGen()
}

function armorGen () {
	armorRNG = Math.round(getRandomNumber(0,2));
	skyrimVars['armor'] = pc.armor[armorRNG].name;
	skyrimVars['armorPoints'] = pc.armor[armorRNG].skillpoints;
	$("#armorSkillName").html("<font class=\"text-info\"><a onclick=\"armorGen()\">Armor Skill</a>: </font>" + skyrimVars['armor']);
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
	skyrimVars['skill1Link'] = skyrimVars['link'] + skyrimVars['skill1Name'];

	skyrimVars['skill1Points'] = pc.skills[skill1RNG].skillpoints;
	$("#skill1Name").html("<font class=\"text-info\"><a onclick=\"skill1Gen()\">First Skill</a>: </font><a href=\"" + skyrimVars['skill1Link'] + "\" target=\"_blank\">" + skyrimVars['skill1Name'] + "</a>");
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
	$("#skill2Name").html("<font class=\"text-info\"><a onclick=\"skill2Gen()\">Second Skill</a>: </font>" + skyrimVars['skill2Name']);
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
	$("#skill3Name").html("<font class=\"text-info\"><a onclick=\"skill3Gen()\">Third Skill</a>: </font>" + skyrimVars['skill3Name']);
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
	$("#skill4Name").html("<font class=\"text-info\"><a onclick=\"skill4Gen()\">Forth Skill</a>: </font>" + skyrimVars['skill4Name']);
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
		skyrimVars['spouse1Link'] = skyrimVars['link'] + skyrimVars['spouse1'].name;
	} else {
		skyrimVars['spouse1Link'] = skyrimVars['dblink'] + skyrimVars['spouse1'].name;
	}

	$("#Spouse1").html("<font class=\"text-info\"><a onclick=\"spouse1Gen()\">Spouse 1</a>: </font>" + skyrimVars['spouse1'].name);
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
		skyrimVars['spouse2Link'] = skyrimVars['link'] + skyrimVars['spouse2'].name;
	} else {
		skyrimVars['spouse2Link'] = skyrimVars['dblink'] + skyrimVars['spouse2'].name;
	}

	$("#Spouse2").html("<font class=\"text-info\"><a onclick=\"spouse2Gen()\">Spouse 2</a>: </font>" + skyrimVars['spouse2'].name);
}

function residenceGen() {
	var residenceRNG = Math.round(getRandomNumber(0,7));
	skyrimVars['primaryResidence'] = pc.residence[residenceRNG];
	$("#Residence").html("<font class=\"text-info\"><a onclick=\"residenceGen()\">Primary Residence</a>: </font>" + skyrimVars['primaryResidence']);
}

function stewardGen() { 
	var stewardsList = filterObj(npc, {Steward: "Yes"});
	skyrimVars['steward'] = stewardsList[Math.round(getRandomNumber(0,32))];

	while (skyrimVars['steward'] == skyrimVars['spouse1'] ||
		   skyrimVars['steward'] == skyrimVars['spouse2'] || 
		   skyrimVars['steward'] == skyrimVars['follower']){
 		skyrimVars['steward'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}

	$("#Steward").html("<font class=\"text-info\"><a onclick=\"stewardGen()\">Steward</a> </font>" + skyrimVars['steward'].name);
}

function followerGen() {
	var followersList = filterObj(npc, {follower: "Yes"});
	skyrimVars['follower'] = followersList[Math.round(getRandomNumber(0,36))];

	while (skyrimVars['follower'] == skyrimVars['spouse1'] ||
		   skyrimVars['follower'] == skyrimVars['spouse2'] || 
		   skyrimVars['follower'] == skyrimVars['steward']){
 		skyrimVars['follower'] = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}

	$("#Follower").html("<font class=\"text-info\"><a onclick=\"followerGen()\">Follower</a>: </font>" + skyrimVars['follower'].name);
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

	skyrimVars['bladesFactionLink'] = skyrimVars['link'] + skyrimVars['bladesFaction'];
	$("#PrimaryQuestFaction").html("<font class=\"text-info\"><a onclick=\"factionGen()\">Primary Quest Faction</a>: </font><a href=\"" + skyrimVars['bladesFaction'] + "\" target=\"_blank\">" + skyrimVars['bladesFaction']);
}

function civilWarFaction() {
	if (typeof skyrimVars['civilWarFaction'] == "undefined"){
		var civilwarRNG = Math.round(getRandomNumber(0,1));
		skyrimVars['civilWarFaction'] = pc.civilwar[civilwarRNG];
	} else {
		skyrimVars['civilWarFaction'] = (skyrimVars['civilWarFaction'] == "Imperial_Legion") ? skyrimVars['civilWarFaction'] = "Stormcloaks" : skyrimVars['civilWarFaction'] = "Imperial_Legion";
	}

	skyrimVars['civilWarFactionLink'] = skyrimVars['link'] + skyrimVars['civilWarFaction'];
	$("#CivilWarFaction").html("<font class=\"text-info\"><a onclick=\"civilWarFaction()\">Civil War Faction</a>: </font><a href=\"" + skyrimVars['civilWarFactionLink'] + "\" target=\"_blank\">" + skyrimVars['civilWarFaction']);
}

function diseaseGen() {
	var diseaseRNG = Math.round(getRandomNumber(0,2));
	skyrimVars['disease'] = pc.disease[diseaseRNG];

	skyrimVars['diseaseLink'] = skyrimVars['link'] + skyrimVars['disease'];
	$("#Disease").html("<font class=\"text-info\"><a onclick=\"diseaseGen()\">Disease</a>: </font><a href=\"" + skyrimVars['diseaseLink'] + "\" target=\"_blank\">" + skyrimVars['disease'] + "</a>");
}

function dngFaction() {
	if (skyrimVars['disease'] == "Lycanthropy"){
		skyrimVars['dngFaction'] = pc.dngFactions[1];
	} else if (skyrimVars['disease'] == "None"){
		skyrimVars['dngFaction'] = pc.dngFactions[1];
	} else { 
		skyrimVars['dngFaction'] = pc.dngFactions[Math.round(getRandomNumber(0,1))];
	}
	$("#DawnguardFaction").html("<font class=\"text-info\"><a onclick=\"dngFaction()\">Dawnguard Faction</a>: </font>" + skyrimVars['dngFaction']);
}

function questOrderGen() {
	skyrimVars['questOrder'] = shuffle(pc.factions);
	$("#QuestOrder").html("<font class=\"text-info\"><a onclick=\"questOrderGen()\">Major Faction Alliance Order</a>:<br> </font>" + skyrimVars['questOrder'].join('<br>'));
}

function printThisPage() {
	html2canvas(document.querySelector("#printThis")).then(canvas => {
        saveAs(canvas.toDataURL(), 'file-name.png');
	});
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