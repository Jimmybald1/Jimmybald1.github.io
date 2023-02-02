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
		console.log(settings[element.id], parseFloat(value));
		settings[element.id] = parseFloat(value);
	}

	StoreItem("settings", JSON.stringify(settings));
}

function BuildSettingsTable() {
	for (var key in settings) {
		if (key.includes("active")) {
			$('#' + key).prop('checked', settings[key]);
		}
		else {
			$('#' + key).val(settings[key]);
		}
	}
}