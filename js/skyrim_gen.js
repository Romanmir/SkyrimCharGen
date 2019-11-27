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

var data = JSON.parse('{"pc":{"gender":["Male","Female"],"race":["Altmer","Argonian","Bosmer","Breton","Dunmer","Imperial","Khajiit","Nord","Orc","Redguard"],"combat":[{"name":"One-handed","skillpoints":21},{"name":"Two-handed","skillpoints":19},{"name":"Destruction","skillpoints":17},{"name":"Archery","skillpoints":16}],"skills":[{"name":"Alchemy","skillpoints":15},{"name":"Alteration","skillpoints":14},{"name":"Block","skillpoints":13},{"name":"Conjuration","skillpoints":16},{"name":"Enchanting","skillpoints":13},{"name":"Illusion","skillpoints":13},{"name":"Lockpicking","skillpoints":11},{"name":"Pickpocket","skillpoints":12},{"name":"Restoration","skillpoints":13},{"name":"Smithing","skillpoints":10},{"name":"Sneak","skillpoints":13},{"name":"Speech","skillpoints":13}],"armor":[{"name":"Heavy_Armor","skillpoints":12},{"name":"Light_Armor","skillpoints":10},{"name":"No_Armor","skillpoints":0}],"civilwar":["Imperial_Legion","Stormcloaks"],"blades":["Blades","Greybeards"],"disease":["None","Lycanthropy","Vampirism"],"residence":["Breezehome","Hjerim","Honeyside","Proudspire_Manor","Vlindrel_Hall","Heljarchen_Hall","Lakeview_Manor","Windstad_Manor"],"dlcFaction":["Volkihar_Vampire_Clan","Dawnguard_(faction)"]},"npcs":[{"name":"Adelaisa_Vendicci","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Aela_the_Huntress","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Aeri","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Agmaer","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ahtar","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Ainethach","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Angrenor_Once-Honored","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Annekke_Crag-Jumper","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Anwen","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Aranea_Ienith","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Argis_the_Bulwark","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Athis","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Avrusa_Sarethi","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Balimund","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Beleval","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Belrand","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Benor","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Borgakh_the_Steel_Heart","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Brelyna_Maryon","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Calder","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Camilla_Valerius","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Celann","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Cicero","gender":"Male","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Cosnach","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Derkeethus","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"DB Initiate","gender":"Female","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"DB Initiate","gender":"Male","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Dravynea_the_Stoneweaver","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Durak","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Eola","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Erandur","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Erik_the_Slayer","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Faendal","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Farkas","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Filnjar","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Frea","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Dragonborn"},{"name":"Gat_gro-Shargakh","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ghorbash_the_Iron_Hand","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ghorza_gra-Bagol","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Gilfre","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Golldir","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Gregor","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Halbarn_Iron-Fur","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Hilund","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Illia","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Ingjard","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Iona","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"J\'zargo","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Jenassa","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Jordis_the_Sword-Maiden","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Kharjo","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Lob","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Lydia","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Marcurio","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Mjoll_the_Lioness","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Morwen","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Moth gro-Bagol","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Muiri","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Njada_Stonearm","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Octieve_San","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Odfel","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ogol","gender":"Female","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Omluag","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Onmund","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Orla","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Pavo_Attius","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Perth","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Quintus_Navale","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ralis_Sedarys","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"No","uesp":"Dragonborn"},{"name":"Rayya","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Revyn Sadri","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ria","gender":"Female","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Roggi_Knot-Beard","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Romlyn_Dreth","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Scouts-Many-Marshes","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Senna","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Serana","gender":"Female","spouse":"No","blades":"No","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Shahvee","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Sondas_Drenim","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Sorex_Vinius","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Stenvar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Sven","gender":"Male","spouse":"No","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Sylgja","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Taarie","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Talvas_Fathryon","gender":"Male","spouse":"No","blades":"No","Steward":"Yes","follower":"No","uesp":"Dragonborn"},{"name":"Teldryn_Sero","gender":"Male","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Dragonborn"},{"name":"Temba_Wide-Arm","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Torvar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Ugor","gender":"Female","spouse":"No","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Uthgerd_the_Unbroken","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Valdimar","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Vilkas","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"Yes","follower":"Yes","uesp":"Skyrim"},{"name":"Viola_Giordano","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Vorstag","gender":"Male","spouse":"Yes","blades":"Yes","Steward":"No","follower":"Yes","uesp":"Skyrim"},{"name":"Wilhelm","gender":"Male","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"},{"name":"Ysolda","gender":"Female","spouse":"Yes","blades":"No","Steward":"No","follower":"No","uesp":"Skyrim"}]}');
var pc = data.pc;
var npc = data.npcs;

var skyrimVars = {};

// var azurarace
// var azuragender
// var azuracombat
// var azuracombatPoints
// var azuraarmor
// var azuraarmorPoints
// var azuraskill1Name
// var azuraskill1Points
// var azuraskill2Name
// var azuraskill2Points
// var azuraskill3Name
// var azuraskill3Points
// var azuraskill4Name
// var azuraskill4Points
// var azuratotalSkillPoints
// var azurahealth
// var azuramagicka
// var azurastamina
// var azurafollower
// var azuraspouse1
// var azuraspouse2
// var azuraprimaryResidence
// var azurasteward
// var azuraprimaryQuestFaction
// var azuradisease
// var azurabladesFaction
// var azuracivilWarFaction


function skyrimCharGen() {

	var stewardsList = filterObj(npc, {Steward: "Yes"});
	var spousesList = filterObj(npc, {spouse: "Yes"});
	var followersList = filterObj(npc, {follower: "Yes"});

	//console.log(data.pc.gender[1]);

	var genderRNG = Math.round(getRandomNumber(0,1));
	var raceRNG = Math.round(getRandomNumber(0,9));
	var combatRNG = Math.round(getRandomNumber(0,3));
	var armorRNG = Math.round(getRandomNumber(0,2));
	var civilwarRNG = Math.round(getRandomNumber(0,1));
	var bladesRNG = Math.round(getRandomNumber(0,1));
	var diseaseRNG = Math.round(getRandomNumber(0,2));
	var residenceRNG = Math.round(getRandomNumber(0,7));
	var dlcFactionRNG = Math.round(getRandomNumber(0,1));

	//special handling for skills because there will be 3-4 skills
	var skill1RNG = Math.round(getRandomNumber(0,11));
	var skill2RNG = Math.round(getRandomNumber(0,11));
	var skill3RNG = Math.round(getRandomNumber(0,11));
	var skill4RNG = Math.round(getRandomNumber(0,11));

	while (skill2RNG == skill1RNG){
		skill2RNG = Math.round(getRandomNumber(0,11));
	}

	while (skill3RNG == skill1RNG || skill3RNG == skill2RNG){
		skill3RNG = Math.round(getRandomNumber(0,11));
	}

	while (skill4RNG == skill1RNG || skill4RNG == skill2RNG || skill4RNG == skill3RNG){
		skill4RNG = Math.round(getRandomNumber(0,11));
	}

	var gender = pc.gender[genderRNG];
	var race = pc.race[raceRNG];
	var civilwarFaction = pc.civilwar[civilwarRNG];
	var bladesFaction = pc.blades[bladesRNG];

	var combat = pc.combat[combatRNG].name;
	var combatPoints = pc.combat[combatRNG].skillpoints;
	
	var armor = pc.armor[armorRNG].name;
	var armorPoints = pc.armor[armorRNG].skillpoints;
	
	var skill1Name = pc.skills[skill1RNG].name; 
	var skill1Points = pc.skills[skill1RNG].skillpoints;
	var skill2Name = pc.skills[skill2RNG].name;
	var skill2Points = pc.skills[skill2RNG].skillpoints;
	var skill3Name = pc.skills[skill3RNG].name;
	var skill3Points = pc.skills[skill3RNG].skillpoints;
	var skill4Name = pc.skills[skill4RNG].name;
	var skill4Points =pc.skills[skill4RNG].skillpoints;

	var magicka = Math.round(getRandomNumber(1,5));
	var health = Math.round(getRandomNumber(1,5));
	var stamina = Math.round(getRandomNumber(1,5));

	//sigh, spouses code block
	var spouseGender = (gender =="Male") ? spouseGender="Female" : spouseGender="Male";
	var validSpouses = filterObj(spousesList, {gender: spouseGender});
	var spouse1 = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	var spouse2 = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];

	while (spouse2 == spouse1){
		spouse2 = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}

	//steward block
	var steward = stewardsList[Math.round(getRandomNumber(0,32))];

	//follower block
	var follower = followersList[Math.round(getRandomNumber(0,36))];

	//residence block
	var primaryResidence = pc.residence[residenceRNG];

	//Disease assignment
	var disease = pc.disease[diseaseRNG];

	//Factions assignment
	var primaryQuestFaction = pc.blades[bladesRNG];

	var civilWarFaction = pc.civilwar[civilwarRNG];

	//Dawnguard faction taking into account the disease from earlier
	if (disease == "Lycanthropy"){
		dngFaction = pc.dlcFaction[0];
	} else if (disease == "Vampirism"){
		dngFaction = pc.dlcFaction[1];
	} else {
		dngFaction = pc.dlcFaction[Math.round(getRandomNumber(0,1))];
	}

	var totalSkillPoints = combatPoints + armorPoints + skill1Points + skill2Points + skill3Points + skill4Points;

	$("#race").html("<font class=\"text-info\"><a onclick=\"raceGen()\">Race</a>: </font>" + race);
	$("#gender").html("<font class=\"text-info\"><a onclick=\"genderGen()\">Gender</a>: </font>" + gender);
	$("#totalSkillPoints").html("<font class=\"text-info\">Total Skill Points: </font>" + totalSkillPoints);
	$("#combatSkillName").html("<font class=\"text-info\"><a onclick=\"combatGen()\">Combat Skill</a>: </font>" + combat);
	$("#combatSkillPoints").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + combatPoints);
	$("#armorSkillName").html("<font class=\"text-info\"><a onclick=\"armorGen()\">Armor Skill</a>: </font>" + armor);
	$("#armorSkillPoints").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + armorPoints);
	$("#skill1Name").html("<font class=\"text-info\">First Skill: </font>" + skill1Name);
	$("#skill1Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skill1Points);
	$("#skill2Name").html("<font class=\"text-info\">Second Skill: </font>" + skill2Name);
	$("#skill2Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skill2Points);
	$("#skill3Name").html("<font class=\"text-info\">Third Skill: </font>" + skill3Name);
	$("#skill3Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skill3Points);
	$("#skill4Name").html("<font class=\"text-info\">Forth Skill: </font>" + skill4Name);
	$("#skill4Points").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + skill4Points);

	$("#Health").html("<font class=\"text-danger\"> Health: </font>" + health);
	$("#Stamina").html("<font class=\"text-success\"> Stamina: </font>" + stamina);
	$("#Magicka").html("<font class=\"text-info\"> Magicka: </font>" + magicka);

	$("#Spouse1").html("<font class=\"text-info\">Spouse 1: </font>" + spouse1.name);
	$("#Spouse2").html("<font class=\"text-info\">Spouse 2: </font>" + spouse2.name);
	$("#Residence").html("<font class=\"text-info\">Primary Residence: </font>" + primaryResidence);
	$("#Steward").html("<font class=\"text-info\">Steward: </font>" + steward.name);
	$("#Follower").html("<font class=\"text-info\">Follower: </font>" + follower.name);
	
	$("#Disease").html("<font class=\"text-info\">Disease: </font>" + disease);
	$("#DawnguardFaction").html("<font class=\"text-info\">Dawnguard Faction: </font>" + dngFaction);
	$("#PrimaryQuestFaction").html("<font class=\"text-info\">Primary Quest Faction: </font>" + primaryQuestFaction);
	$("#CivilWarFaction").html("<font class=\"text-info\">Civil War Faction: </font>" + civilWarFaction);

}

function raceGen() {
	raceRNG = Math.round(getRandomNumber(0,9));
	race = pc.race[raceRNG];
	$("#race").html("<font class=\"text-info\"><a onclick=\"raceGen()\">Race</a>: </font>" + race);
}

function genderGen() {
	genderRNG = Math.round(getRandomNumber(0,1));
	gender = pc.gender[genderRNG];
	$("#gender").html("<font class=\"text-info\"><a onclick=\"genderGen()\">Gender: </font>" + gender);
}

function combatGen() {
	combatRNG = Math.round(getRandomNumber(0,3));
	combat = pc.combat[combatRNG].name;
	combatPoints = pc.combat[combatRNG].skillpoints;
	$("#combatSkillName").html("<font class=\"text-info\"><a onclick=\"combatGen()\">Combat Skill</a>: </font>" + combat);
	$("#combatSkillPoints").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + combatPoints);
	var totalSkillPoints = combatPoints + armorPoints + skill1Points + skill2Points + skill3Points + skill4Points;
	$("#totalSkillPoints").html("<font class=\"text-info\">Total Skill Points: </font>" + totalSkillPoints);
}

function armorGen () {
	armorRNG = Math.round(getRandomNumber(0,2));
	armor = pc.armor[armorRNG].name;
	armorPoints = pc.armor[armorRNG].skillpoints;
	$("#armorSkillName").html("<font class=\"text-info\"><a onclick=\"armorGen()\">Armor Skill</a>: </font>" + armor);
	$("#armorSkillPoints").html("<font align=\"right\" class=\"text-info\">Skill Points: </font>" + armorPoints);
	var totalSkillPoints = combatPoints + armorPoints + skill1Points + skill2Points + skill3Points + skill4Points;
	$("#totalSkillPoints").html("<font class=\"text-info\">Total Skill Points: </font>" + totalSkillPoints);
}

function skillGen () {
	skill1RNG = Math.round(getRandomNumber(0,11));
	skill2RNG = Math.round(getRandomNumber(0,11));
	skill3RNG = Math.round(getRandomNumber(0,11));
	skill4RNG = Math.round(getRandomNumber(0,11));

	while (skill2RNG == skill1RNG){
		skill2RNG = Math.round(getRandomNumber(0,11));
	}

	while (skill3RNG == skill1RNG || skill3RNG == skill2RNG){
		skill3RNG = Math.round(getRandomNumber(0,11));
	}

	while (skill4RNG == skill1RNG || skill4RNG == skill2RNG || skill4RNG == skill3RNG){
		skill4RNG = Math.round(getRandomNumber(0,11));
	}

	skill1Name = pc.skills[skill1RNG].name; 
	skill1Points = pc.skills[skill1RNG].skillpoints;
	skill2Name = pc.skills[skill2RNG].name;
	skill2Points = pc.skills[skill2RNG].skillpoints;
	skill3Name = pc.skills[skill3RNG].name;
	skill3Points = pc.skills[skill3RNG].skillpoints;
	skill4Name = pc.skills[skill4RNG].name;
	skill4Points =pc.skills[skill4RNG].skillpoints;	
}

function totalSkillPointsGen() {
	totalSkillPoints = combatPoints + armorPoints + skill1Points + skill2Points + skill3Points + skill4Points;
}

function attributePointSpread() {
	magicka = Math.round(getRandomNumber(1,5));
	health = Math.round(getRandomNumber(1,5));
	stamina = Math.round(getRandomNumber(1,5));
}

function spouseGen() {
	validSpouses = (gender == "Male") ? filterObj(spousesList, {gender: "Female"}) : filterObj(spousesList, {gender: "Male"});
	spouse1 = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	spouse2 = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];

	while (spouse2 == spouse1){
		spouse2 = validSpouses[Math.round(getRandomNumber(0,validSpouses.length-1))];
	}
}

function stewardGen() { 
	var steward = stewardsList[Math.round(getRandomNumber(0,32))];
}

function followerGen() {
	var follower = followersList[Math.round(getRandomNumber(0,36))];
}

function residenceGen() {
	var primaryResidence = pc.residence[residenceRNG];
}

function diseaseFactionGen() {
	var disease = pc.disease[diseaseRNG];
}

function factionsGen() {
	var primaryQuestFaction = pc.blades[bladesRNG];
	var civilWarFaction = pc.civilwar[civilwarRNG];
}

function dngFaction() {
	if (disease == "Lycanthropy"){
		dngFaction = pc.dlcFaction[0];
	} else if (disease == "Vampirism"){
		dngFaction = pc.dlcFaction[1];
	} else {
		dngFaction = pc.dlcFaction[Math.round(getRandomNumber(0,1))];
	}
}