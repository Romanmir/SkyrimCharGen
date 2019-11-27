#!/usr/bin/perl

use strict;
use warnings;

use Data::Dumper;
use CGI qw/:standard/;

my @NPCs = (
	{'name' => 'Adelaisa_Vendicci','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Aela_the_Huntress','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Aeri','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Agmaer','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Ahtar','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Ainethach','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Angrenor_Once-Honored','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Annekke_Crag-Jumper','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Anwen','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Aranea_Ienith','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Argis_the_Bulwark','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Athis','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Avrusa_Sarethi','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Balimund','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Beleval','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Belrand','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Benor','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Borgakh_the_Steel_Heart','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Brelyna_Maryon','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Calder','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Camilla_Valerius','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Celann','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Cicero','gender' => 'Male','spouse' => 'No','blades' => 'No','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Cosnach','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Derkeethus','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'DB Initiate','gender' => 'Female','spouse' => 'No','blades' => 'No','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'DB Initiate','gender' => 'Male','spouse' => 'No','blades' => 'No','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Dravynea_the_Stoneweaver','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Durak','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Eola','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Erandur','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Erik_the_Slayer','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Faendal','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Farkas','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Filnjar','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Frea','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Dragonborn'},
	{'name' => 'Gat_gro-Shargakh','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Ghorbash_the_Iron_Hand','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Ghorza_gra-Bagol','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Gilfre','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Golldir','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Gregor','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Halbarn_Iron-Fur','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Dragonborn'},
	{'name' => 'Hilund','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Dragonborn'},
	{'name' => 'Illia','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Ingjard','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Iona','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'J\'zargo','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Jenassa','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Jordis_the_Sword-Maiden','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Kharjo','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Lob','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Lydia','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Marcurio','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Mjoll_the_Lioness','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Morwen','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Dragonborn'},
	{'name' => 'Moth gro-Bagol','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Muiri','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Njada_Stonearm','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Octieve_San','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Odfel','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Ogol','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Omluag','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Onmund','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Orla','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Pavo_Attius','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Perth','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Quintus_Navale','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Ralis_Sedarys','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'No','uesp' => 'Dragonborn'},
	{'name' => 'Rayya','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Revyn Sadri','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Ria','gender' => 'Female','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Roggi_Knot-Beard','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Romlyn_Dreth','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Scouts-Many-Marshes','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Senna','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Serana','gender' => 'Female','spouse' => 'No','blades' => 'No','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Shahvee','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Sondas_Drenim','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Sorex_Vinius','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Stenvar','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Sven','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Sylgja','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Taarie','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Talvas_Fathryon','gender' => 'Male','spouse' => 'No','blades' => 'No','Steward' => 'Yes','follower' => 'No','uesp' => 'Dragonborn'},
	{'name' => 'Teldryn_Sero','gender' => 'Male','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Dragonborn'},
	{'name' => 'Temba_Wide-Arm','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Torvar','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Ugor','gender' => 'Female','spouse' => 'No','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Uthgerd_the_Unbroken','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Valdimar','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Vilkas','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'Yes','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Viola_Giordano','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Vorstag','gender' => 'Male','spouse' => 'Yes','blades' => 'Yes','Steward' => 'No','follower' => 'Yes','uesp' => 'Skyrim'},
	{'name' => 'Wilhelm','gender' => 'Male','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'},
	{'name' => 'Ysolda','gender' => 'Female','spouse' => 'Yes','blades' => 'No','Steward' => 'No','follower' => 'No','uesp' => 'Skyrim'}
);

my @race = qw(Altmer Argonian Bosmer Breton Dunmer Imperial Khajiit Nord Orc Redguard);
my @gender = qw(Male Female);
my @combat = qw(One-handed Two-handed Destruction Archery);
my @sec = qw(Alchemy Alteration Block Conjuration Enchanting Illusion Lockpicking Pickpocket Restoration Smithing Sneak Speech);
my @armor = qw(Heavy_Armor Light_Armor);
my @civilwar = qw(Imperial_Legion Stormcloaks);
my @blades = qw(Blades Greybeards);
my @disease = qw(None Lycanthropy Vampirism);
my @houses = qw(Breezehome Hjerim Honeyside Proudspire_Manor Vlindrel_Hall Heljarchen_Hall Lakeview_Manor Windstad_Manor);
my @dngrd = qw(Volkihar_Vampire_Clan Dawnguard_\(faction\));

my @fem_spouses = grep { $_ -> {'gender'} eq "Female" } (grep { $_ -> {'spouse'} eq "Yes" } @NPCs);
my @male_spouses = grep { $_ -> {'gender'} eq "Male" } (grep { $_ -> {'spouse'} eq "Yes" } @NPCs);
my @stewards = grep { $_ -> {'Steward'} eq "Yes" } @NPCs;
my @followers = grep { $_ -> {'follower'} eq "Yes" } @NPCs;

my %skill_points = (
        "One-handed" => "21",
        "Two-handed" => "19",
        "Destruction" => "17",
        "Archery" => "16",
        "Alchemy" => "15",
        "Alteration" => "14",
        "Conjuration" => "16",
        "Enchanting" => "13",
        "Illusion" => "13",
        "Lockpicking" => "11",
        "Pickpocket" => "12",
        "Restoration" => "13",
        "Smithing" => "10",
        "Sneak" => "13",
        "Speech" => "13",
        "Heavy_Armor" => "12",
        "Light_Armor" => "10",
	"Block" => "13"
);

my $female_list_len=@fem_spouses;
my $male_list_len=@male_spouses;
my $steward_list_len=@stewards;
my $follower_list_len=@followers;

my $rac = int(rand(10));
my $sex = int(rand(2));
my $com = int(rand(4));
my $sec1 = int(rand(11));
my $sec2 = int(rand(11));
my $sec3 = int(rand(11));
my $sec4 = int(rand(11));
my $arm = int(rand(2));
my $war = int(rand(2));
my $dis = int(rand(3));
my $bvg = int(rand(2));
my $disease = int(rand(3));
my $digs = int(rand(8));
my $dawnguard = int(rand(2));
my $fem1 = int(rand($female_list_len));
my $fem2 = int(rand($female_list_len));
my $male1 = int(rand($male_list_len));
my $male2 = int(rand($male_list_len));
my $stew = int(rand($steward_list_len));
my $follower = int(rand($follower_list_len));
#my $total_stats = int(rand(9));

my $skyrim_docs = "http://www.uesp.net/wiki/Skyrim:";

#Figure out spouses, Give two options. Also stewards and followers.  
my $docs_fem1;
my $docs_fem2;
my $docs_male1;
my $docs_male2;
my $docs_steward;
my $docs_follower;

if ($fem_spouses[$fem1] -> {'uesp'} eq "Dragonborn") {
	$docs_fem1 = "http://www.uesp.net/wiki/Dragonborn:";
} else {
	$docs_fem1 = "http://www.uesp.net/wiki/Skyrim:";
}
if ($fem_spouses[$fem2] -> {'uesp'} eq "Dragonborn") {
	$docs_fem2 = "http://www.uesp.net/wiki/Dragonborn:";
} else {
	$docs_fem2 = "http://www.uesp.net/wiki/Skyrim:";
}
if ($male_spouses[$male1] -> {'uesp'} eq "Dragonborn") {
	$docs_male1 = "http://www.uesp.net/wiki/Dragonborn:";
} else {
	$docs_male1 = "http://www.uesp.net/wiki/Skyrim:";
}
if ($male_spouses[$male2] -> {'uesp'} eq "Dragonborn") {
	$docs_male2 = "http://www.uesp.net/wiki/Dragonborn:";
} else {
	$docs_male2 = "http://www.uesp.net/wiki/Skyrim:";
}
if ($stewards[$stew] -> {'uesp'} eq "Dragonborn") {
	$docs_steward = "http://www.uesp.net/wiki/Dragonborn:";
} else {
	$docs_steward = "http://www.uesp.net/wiki/Skyrim:";
}
if ($followers[$follower] -> {'uesp'} eq "Dragonborn") {
	$docs_follower = "http://www.uesp.net/wiki/Dragonborn:";
} else {
	$docs_follower = "http://www.uesp.net/wiki/Skyrim:";
}

# Re-do the rand func until some other number comes up
while ($sec2 eq $sec1) {
	$sec2 = int(rand(11));
};

while ($sec3 eq $sec2 or $sec3 eq $sec1) {
	$sec3 = int(rand(11));
};

while ($sec4 eq $sec3 or $sec4 eq $sec2 or $sec4 eq $sec1) {
	$sec4 = int(rand(11));
};

# Same with the spouse listing
while ($fem2 eq $fem1) {
	$fem2 = int(rand($female_list_len));
};

while ($male2 eq $male1) {
	$male2 = int(rand($male_list_len));
};

#Handle Dawnguard insanity (disease versus faction).
#The disease that one has determines what faction.
if ($dis eq 1 ) {
	$dawnguard = 1;
}

if ($dis eq 2 ) {
	$dawnguard = 0;
}

if ($dis eq 0 ) {
	$dawnguard = int(rand(2));
}

#Figure out stats Assignment
#a number ispicked between 0-9 then that number is used to 
my $magicka = int(rand(9))+1;
my $health = int(rand(9))+1;
my $stamina = int(rand(9))+1;

#Get a total all of the perks
my $total_perks = $skill_points{$combat[$com]} + $skill_points{$armor[$arm]} + $skill_points{$sec[$sec1]} + $skill_points{$sec[$sec2]} + $skill_points{$sec[$sec3]} + $skill_points{$sec[$sec4]};

#
#Print stuff for troubleshooting
#
#print "Content-type: text/plain\n\n";

#foreach my $NPC(@stewards) {
#	my $name = $NPC -> {'name'};
#	print Dumper $name;
#}

#print Dumper $fem_spouses[$fem1] -> {'uesp'};
#print Dumper $docs_fem1;
#print Dumper $docs_fem2;
#print Dumper $docs_male1;
#print Dumper $docs_male2;
#print Dumper $docs_steward;
#print Dumper $docs_follower;

#exit 0;

print "Content-type: text/html\n\n";

print <<HTML;
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://tools.romanmirror.net/css/bootstrap.min.css">

<script src="https://tools.romanmirror.net/js/bootstrap.min.js"></script>

</head>
<body>
<div class="col-md-6">
<h4><p class="text-info">For an extra challenge, use the following characteristics when creating a new game.<br><br>
You are only allowed to put points in to the following skills:<br><br>


In order to keep these values copy/paste them to an external file<br><br></p></h4>

<button type="submit" class="btn btn-danger" onclick="window.location.reload()">Re-generate</button><br>

<br>
<br>
<div id=\"mainBody\" class=\"well\" class=\"col-md-8 col-xs-2\">
<table class=\"table table-bordered table-condensed\">
HTML
#Race, Gender and Skills
print "<tr><td><font class=\"muted\"><strong>Race, Gender and Skills</strong></td><td></td></tr>";
print "<tr><td><font class=\"text-info\">Race: <a class=\"text-warning\" href=$skyrim_docs" . $race[$rac] .  " target=\"_blank\">" . $race[$rac] . "</a></td>	<td><font class=\"text-error\">Total: " . $total_perks . "</font></td></tr>\n";
print "<tr><td><font class=\"text-info\">Gender: <a class=\"text-warning\">" . $gender[$sex] . "</td><td></td></tr>\n";
print "<tr><td><font class=\"text-info\">Combat style: <a class=\"text-warning\" href=$skyrim_docs" . $combat[$com] . " target=\"_blank\">" . $combat[$com] . "</a></td>	<td><font class=\"text-error\">Perks:" . $skill_points{$combat[$com]} . "</font></td></tr>\n";
print "<tr><td><font class=\"text-info\">Armor Style: <a class=\"text-warning\" href=$skyrim_docs" . $armor[$arm] . " target=\"_blank\">" . $armor[$arm] . "</a></td>    <td><font class=\"text-error\">Perks:" . $skill_points{$armor[$arm]} . "</font></td></tr>\n";
print "<tr><td><font class=\"text-info\">First Skill: <a class=\"text-warning\" href=$skyrim_docs" . $sec[$sec1] . " target=\"_blank\">" . $sec[$sec1] . "</a></td>      <td><font class=\"text-error\">Perks:" . $skill_points{$sec[$sec1]} . "</font></td></tr>\n";
print "<tr><td><font class=\"text-info\">Second Skill: <a class=\"text-warning\" href=$skyrim_docs" . $sec[$sec2] . " target=\"_blank\">" . $sec[$sec2] . "</a></td>     <td><font class=\"text-error\">Perks:" . $skill_points{$sec[$sec2]} . "</font></td></tr>\n";
print "<tr><td><font class=\"text-info\">Third Skill: <a class=\"text-warning\" href=$skyrim_docs" . $sec[$sec3] . " target=\"_blank\">" . $sec[$sec3] . "</a></td>      <td><font class=\"text-error\">Perks:" . $skill_points{$sec[$sec3]} . "</font></td></tr>\n";
print "<tr><td><font class=\"text-info\">Fourth Skill: <a class=\"text-warning\" href=$skyrim_docs" . $sec[$sec4] . " target=\"_blank\">" . $sec[$sec4] . "</a></td>     <td><font class=\"text-error\">Perks:" . $skill_points{$sec[$sec4]} . "</font></td></tr>\n";
print "<tr><td><font class=\"muted\"><strong>Stats Spread</strong></td><td></td></tr>";
print "<tr><td><font class=\"text-info\">Magicka:</td><td><font class=\"text-info\">" . $magicka . "</td></tr>\n";
print "<tr><td><font class=\"text-error\">Health</td><td><font class=\"text-error\">" . $health . "</td></tr>\n";
print "<tr><td><font class=\"text-success\">Stamina</td><td><font class=\"text-success\">" . $stamina . "</td></tr>\n";

#Spouse, Home and Followers
print "<tr><td><font class=\"muted\"><strong>Spouse, Home and Followers</strong></td><td></td></tr>";
if ($sex eq 0) {
print "<tr><td><font class=\"text-info\">Female Spouse: </td><td><a class=\"text-warning\" href=$docs_fem1" . $fem_spouses[$fem1] -> {'name'} . " target=\"_blank\">" . $fem_spouses[$fem1] -> {'name'} . "</a></td></tr>\n";
print "<tr><td><font class=\"text-info\">Female Spouse: </td><td><a class=\"text-warning\" href=$docs_fem2" . $fem_spouses[$fem2] -> {'name'} . " target=\"_blank\">" . $fem_spouses[$fem2] -> {'name'} . "</a></td></tr>\n";
} else {
print "<tr><td><font class=\"text-info\">Male Spouse: </td><td><a class=\"text-warning\" href=$docs_male1" . $male_spouses[$male1] -> {'name'} . " target=\"_blank\">" . $male_spouses[$male1] -> {'name'} . "</a></td></tr>\n";
print "<tr><td><font class=\"text-info\">Male Spouse: </td><td><a class=\"text-warning\" href=$docs_male2" . $male_spouses[$male2] -> {'name'} . " target=\"_blank\">" . $male_spouses[$male2] -> {'name'} . "</a></td></tr>\n";
}
print "<tr><td><font class=\"text-info\">Primary Residence*: </td><td><a class=\"text-warning\" href=$skyrim_docs" . $houses[$digs] . " target=\"_blank\">" . $houses[$digs] . "</a></td></tr>\n";
print "<tr><td><font class=\"text-info\">Steward: </td><td><a class=\"text-warning\" href=$docs_steward" . $stewards[$stew] -> {'name'} . " target=\"_blank\">" . $stewards[$stew] -> {'name'} . "</a></td></tr>\n";
print "<tr><td><font class=\"text-info\">Followers: </td><td><a class=\"text-warning\" href=$docs_follower" . $followers[$follower] -> {'name'} . " target=\"_blank\">" . $followers[$follower] -> {'name'} . "</a></td></tr>\n";

#Disease
print "<tr><td><font class=\"muted\"><strong>Disease</strong></td><td></td></tr>";
print "<tr><td><font class=\"text-info\">Disease: </td><td><a class=\"text-warning\" href=$skyrim_docs" . $disease[$dis] . " target=\"_blank\">" . $disease[$dis] . "</a></td></tr>\n";

#Factions
print "<tr><td><font class=\"muted\"><strong>Factions</strong></td><td></td></tr>";
print "<tr><td><font class=\"text-info\">Primary Quest Faction: </td><td><a class=\"text-warning\" href=$skyrim_docs" . $blades[$bvg] . " target=\"_blank\">" . $blades[$bvg] . "</a></td></tr>\n";
print "<tr><td><font class=\"text-info\">Civil War Faction: </td><td><a class=\"text-warning\" href=$skyrim_docs" . $civilwar[$war] . " target=\"_blank\">" . $civilwar[$war] . "</a></td></tr>\n";
print "<tr><td><font class=\"text-info\">Dawnguard Faction: </td><td><a class=\"text-warning\" href=$skyrim_docs" . $dngrd[$dawnguard] . " target=\"_blank\">" . $dngrd[$dawnguard] . "</a></td></tr>\n";
print "</table>";

print "<p>";
print "*The primary residence is defined as the location that your spouse lives.<br><br>\n";
print "</div>\n";
print "<font class=\"text-muted\">\n";
print "	<small>To Do: <br>\n";
print "<ol>\n";
print " <li> Random Faction Quest Line order/length\n";
print "</ol>\n";
print " </small>\n";
print "</font>\n";
print "</p>\n";

print "</body>\n";
print "</html>\n";
