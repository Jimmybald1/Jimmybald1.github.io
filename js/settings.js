var defaultsettings = {
	"prestige_speed": 3.3,
	"prestige_power": 11.3,
	"prestige_ballCost": -66,
	"prestige_speedCost": -66,
	"prestige_powerCost": -66,

	"cards_speed_value": 2,
	"cards_speed_active": true,
	"cards_power_value": 4,
	"cards_power_active": true,
	"cards_qc_value": 5,
	"cards_qc_active": true,
	"cards_spec_value": 4,
	"cards_spec_active": true,
	"cards_catalyst_value": 5.5,
	"cards_catalyst_active": true,
	"cards_shieldpen_value": 20,
	"cards_shieldpen_active": true,

	"perks_speed": 4,
	"perks_power": 4,
	"perks_ballCost": -60,
	"perks_speedCost": -60,
	"perks_powerCost": -60,

	"boosts_ph_active": true,

	"badges_basic": 400,
	"badges_sniper": 400,
	"badges_splash": 400,
	"badges_poison": 400,
	"badges_demo": 400,
	"badges_scatter": 400,
	"badges_pierce": 400,
	"badges_cash": 400,
	"badges_sword": 400,
	"badges_fire": 400,
	"badges_lightning": 400,

	"skillstree_poison_speed": 1.15,
	"skillstree_poison_enrage": 2,
	"skillstree_demo_enrage": 3,
	"skillstree_lightning_power": 1.4,
	"skillstree_lightning_speed": 1.1,
};

//StoreItem("settings", JSON.stringify(defaultsettings));
var settings = GetItem("settings", defaultsettings);

if (!Object.keys(settings).includes("boosts_ph_active") && Object.keys(settings).includes("boosts_ph")){
	settings.boosts_ph_active = settings.boosts_ph;
}

function GetItem(key, obj) {	
	try {
		var json = window.localStorage.getItem(key);
		if (json === undefined || json === null) {
			StoreItem(key, JSON.stringify(obj));
		}
		else {
			obj = JSON.parse(json);
		}
	
		console.log(obj);
		return obj;
	}
	catch (e) {
		if (e.name === "NS_ERROR_FILE_CORRUPTED") {
			alert("Somehow your local storage file got corrupted. You will have to manually clear this.")
			return obj;
		}
	}
}

function StoreItem(key, text) {
	window.localStorage.setItem(key, text);
}

function handleChange(event) {
	var element = event.target;
	var value = element.value;

	if (element.id.includes("active")) {
		console.log(settings[element.id], element.checked);
		settings[element.id] = element.checked;
	}
	else {
		if (value === '') {
			console.log(settings[element.id], null);
			settings[element.id] = null;
		}
		else {
			console.log(settings[element.id], parseFloat(value));
			settings[element.id] = parseFloat(value);
		}
	}

	StoreItem("settings", JSON.stringify(settings));
	BuildSettingsTable();
}

function BuildSettingsTable() {
	var totalbadges = 0;
	for (var key in settings) {
		if (key.includes("active")) {
			$('#' + key).prop('checked', settings[key]);
		}
		else {
			$('#' + key).val(settings[key]);
		}
		
		if (key.includes("badges")) {
			totalbadges += settings[key];
		}
	}
	
	$('#badges_total').html(totalbadges);
	
	var powerCard = settings['cards_power_value'];
	if (powerCard === 2.4
		|| powerCard === 2.8
		|| powerCard === 3.2
		|| powerCard === 3.6) {
		alert('Your power card value is wrong, the card in game has a bug.\n\
These are the possible values:\n\
Level 1: 1.5\n\
Level 2: 2.0\n\
Level 3: 2.5\n\
Level 4: 3.0\n\
Level 5: 3.5\n\
Level 6: 4.0')
	}
}