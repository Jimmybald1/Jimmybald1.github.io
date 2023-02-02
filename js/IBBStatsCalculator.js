//StoreItem("settings", JSON.stringify(defaultsettings));
var settings = GetItem("settings", defaultsettings);
//StoreItem("statsCalculator", JSON.stringify(defaulttabs));
var tabs = GetItem("statsCalculator", defaulttabs);

// fix for older version where the data was not an array yet.
if (!Array.isArray(tabs)) {
	tabs = [tabs];
	tabs[0].id = "tab0";
	tabs[0].name = "Tab0";
	StoreItem("statsCalculator", tabs);
}

if (!Object.keys(settings).includes("boosts_ph_active") && Object.keys(settings).includes("boosts_ph")){
	settings.boosts_ph_active = settings.boosts_ph;
}

for (var i in tabs) {
	if (!Object.keys(tabs[i]).includes("settings")) {
		tabs[i].settings = structuredClone(settings);
	}
	
	if (!Object.keys(tabs[i].settings).includes("boosts_ph_active") && Object.keys(tabs[i].settings).includes("boosts_ph")){
		tabs[i].settings.boosts_ph_active = tabs[i].settings.boosts_ph;
	}
}

var totalcost = 0;

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

function GetSettings(tab, key, def) {
	if (tab.global_settings_active
		&& Object.keys(settings).includes(key)) {
		return settings[key];
	}
	else if (Object.keys(tab.settings).includes(key)){
		return tab.settings[key];
	}
		
	return def;
}

function SetSettings(tab, key, value) {
	if (tab.global_settings_active) {
		settings[key] = value;
		StoreItem("settings", JSON.stringify(settings));
	}
	else {
		tab.settings[key] = value;
		StoreItem("statsCalculator", JSON.stringify(tabs));
	}
}

function GetSettingsIfTrue(tab, ifkey, key, def) {
	if (tab.global_settings_active
		&& Object.keys(settings).includes(ifkey)
		&& settings[ifkey]
		&& Object.keys(settings).includes(key)) {
		return settings[key];
	}
	else if (Object.keys(tab.settings).includes(ifkey)
		&& tab.settings[ifkey]
		&& Object.keys(tab.settings).includes(key)){
		return tab.settings[key];
	}
		
	return def;
}

function GetTabValue(tab, key, def) {
	if (Object.keys(tab).includes(key)
		&& tab[key] !== null) {
		return tab[key];
	}
	
	return def;
}

function FormatNumber(num) {
	const lookup = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "K" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e9, symbol: "B" },
		{ value: 1e12, symbol: "T" },
		{ value: 1e15, symbol: "q" },
		{ value: 1e18, symbol: "Q" },
		{ value: 1e21, symbol: "s" },
		{ value: 1e24, symbol: "S" },
		{ value: 1e27, symbol: "O" },
		{ value: 1e30, symbol: "N" },
		{ value: 1e33, symbol: "D" },
		{ value: 1e36, symbol: "aa" },
		{ value: 1e39, symbol: "ab" },
		{ value: 1e42, symbol: "ac" },
		{ value: 1e45, symbol: "ad" },
		{ value: 1e48, symbol: "ae" },
		{ value: 1e51, symbol: "af" },
		{ value: 1e54, symbol: "ag" },
		{ value: 1e57, symbol: "ah" },
		{ value: 1e60, symbol: "ai" },
		{ value: 1e63, symbol: "aj" },
		{ value: 1e66, symbol: "ak" },
		{ value: 1e69, symbol: "al" },
		{ value: 1e72, symbol: "am" },
		{ value: 1e75, symbol: "an" },
		{ value: 1e78, symbol: "ao" },
		{ value: 1e81, symbol: "ap" },
		{ value: 1e84, symbol: "aq" },
		{ value: 1e87, symbol: "ar" },
		{ value: 1e90, symbol: "as" },
		{ value: 1e93, symbol: "at" },
		{ value: 1e96, symbol: "au" },
		{ value: 1e99, symbol: "av" },
		{ value: 1e102, symbol: null },
	];

	var item = lookup.slice().reverse().find(function (item) {
		return num >= item.value;
	});

	if (item === undefined) {
		return 0;
	}

	if (item.symbol === null) {
		return item.value.toExponential(2);
	}

	return item ? (num / item.value).toFixed(2) + item.symbol : "0";
}

function handleCalculatorChange(event) {
	var element = event.target;
	var value = element.value;
	var id = element.id.slice(0, 4);
	var tab = tabs.find(e => e.id === id);
	var elementid = element.id.slice(5);

	if (elementid.includes("type")) {
		console.log(tab[elementid], value);
		tab[elementid] = value;
	}
	else if (elementid.includes("active")) {
		console.log(tab.global_settings_active, element.checked);
		tab[elementid] = element.checked;
	}
	else {
		if (value === '') {
			console.log(tab[elementid], null);
			tab[elementid] = null;
		}
		else {
			console.log(tab[elementid], parseInt(value));
			tab[elementid] = parseInt(value);
		}
	}

	StoreItem("statsCalculator", JSON.stringify(tabs));
	BuildStatsCalculator(tab);
}

function handleSettingsChange(event) {
	var element = event.target;
	var value = element.value;
	var id = element.id.slice(0, 4);
	var tab = tabs.find(e => e.id === id);
	var elementid = element.id.slice(5);

	if (elementid.includes("active")) {
		console.log(GetSettings(tab, elementid), element.checked);
		SetSettings(tab, elementid, element.checked);
	}
	else {
		console.log(GetSettings(tab, elementid), parseFloat(value));
		SetSettings(tab, elementid, parseFloat(value));
	}
	
	BuildStatsCalculator(tab);
}

function handleTabChange(event) {
	var element = event.target;
	var id = element.id.slice(0, 4);
	var tab = tabs.find(e => e.id === id);
	
	if (tabs.includes(tab)) {
		BuildStatsCalculator(tab);
	}
}

function handleNewTab(event) {
	var element = event.target;
	var newindex = tabs.length;			
	
	if (tabs.length > 0) {
		tabs.push(structuredClone(tabs[0]));				
	}
	else {
		tabs.push(structuredClone(defaulttabs[0]))
	}
	var tab = tabs[newindex];
	tab.id = "tab" + newindex;
	tab.name = "Tab" + newindex;
	
	console.log('Create new tab ' + tab.name);
	StoreItem("statsCalculator", JSON.stringify(tabs));
	
	$(navbar_template.replaceAll('%tab%', tab.id).replaceAll('%tabname%', tab.name).replaceAll('%active%', '')).insertBefore('#newtab_id');
	$('#tab_content').append('<div id="' + tab.id + '" class="tab-pane">' + table_template.replaceAll('%tab%', tab.id) + '</div>');
	BuildStatsCalculator(tabs[newindex]);
	$('#' + tab.id + '_name').tab('show');
}

function handleShowAllSettingsToggle(event) {
	var element = event.target;
	var id = element.id.slice(0, 4);
	var tab = tabs.find(e => e.id === id);
	console.log(tab.all_settings_active, element.checked);
	tab.all_settings_active = element.checked;
	
	$('.' + tab.id + '_togglerow').toggleClass('hiderow');
	
	StoreItem("statsCalculator", JSON.stringify(tabs));
}

function handleTabEdit(event) {
	var element = event.target;
	var id = element.id.slice(0, 4);
	var tab = tabs.find(e => e.id === id);
	
	var newname = prompt('Rename tab ' + tab.name)
	if (newname !== null && newname !== "null") {
		console.log('Rename tab ' + tab.name + ' to ' + newname);
		$('#' + tab.id + '_name').html($('#' + tab.id + '_name').html().replace(tab.name, newname));
		tab.name = newname;
		StoreItem("statsCalculator", JSON.stringify(tabs));
	}
}

function handleTabRemove(event) {
	var element = event.target;
	var id = element.id.slice(0, 4);
	var tab = tabs.find(e => e.id === id);
	
	if (confirm('Are you sure you want to delete tab ' + tab.name)) {
		console.log('Delete tab ' + tab.name);
		tabs.splice(tabs.indexOf(tab), 1);
		$('#' + tab.id + '_id').remove();
		$('#' + tab.id).remove();
		StoreItem("statsCalculator", JSON.stringify(tabs));
		if (tabs.length > 0) {
			BuildStatsCalculator(tabs[0]);
			$('#' + tabs[0].id + '_name').tab('show');
		}
	}
}

function BuildPage() {				
	// Build Html of nav tabs
	for (var i = 0; i < tabs.length; i++) {
		var id = tabs[i].id;
		var name = tabs[i].name;
		$('#tab_nav').append(navbar_template.replaceAll('%tab%', id).replaceAll('%tabname%', name).replaceAll('%active%', ((i == 0) ? 'active' : '')));
	}
	
	$('#tab_nav').append('<li id="newtab_id" class=""><a id="newtab_name" href="#" onclick="handleNewTab(event)">+</a></li>');
	
	// Build Html of all tabs				
	for (var i = 0; i < tabs.length; i++) {
		var id = "tab" + i;
		$('#tab_content').append('<div id="' + id + '" class="tab-pane ' + ((i == 0) ? 'active' : '') + '">' + table_template.replaceAll('%tab%', id) + '</div>');
	}
	
	if (tabs.length > 0) {
		BuildStatsCalculator(tabs[0]);
	}
}		

function BuildStatsCalculator(tab) {
	var tagid = '#' + tab.id + '_';
	
	// Calculator
	for (var key in tab) {
		if (key.includes("active")) {
			$(tagid + key).prop('checked', tab[key]);
		}
		else {
			$(tagid + key).val(tab[key]);
		}
	}

	totalcost = 0;
	for (var i in slots) {
		CalculateRow(tab, slots[i]);
	}

	$(tagid + 'totalcost').html(FormatNumber(totalcost));
	
	// Tab-Settings
	var tabsettings = ((tab.global_settings_active) ? settings : tab.settings);
	for (var key in tabsettings) {
		if (key.includes("active")) {
			$(tagid + key).prop('checked', GetSettings(tab, key, false));
		}
		else {
			$(tagid + key).val(GetSettings(tab, key, null));
		}
	}
	
	if (!tab.all_settings_active) {
		$('.' + tab.id + '_togglerow').addClass('hiderow');
	}
}

function CalculateRow(tab, slot) {
	var tagid = '#' + tab.id + '_';
	
	var balltype = tab[slot + "_type"];
	if (balltype === null || balltype === "null") {
		$(tagid + slot + '_speed').html("");
		$(tagid + slot + '_power').html("");
		$(tagid + slot + '_cost').html("");
		$(tagid + slot + '_dmg_poison').html("");
		$(tagid + slot + '_1shot_brick').html("");
		$(tagid + slot + '_1shot_hex').html("");
		$(tagid + slot + '_1shot_shield').html("");
		return;
	}

	// Speed
	var speed = CalculateSpeed(tab, balltype, slot);
	$(tagid + slot + '_speed').html(speed.toFixed(2));

	// Power
	var power = CalculatePower(tab, balltype, slot);
	$(tagid + slot + '_power').html(FormatNumber(power));

	// Cost
	var cost = CalculateCost(tab, slot);
	$(tagid + slot + '_cost').html(FormatNumber(cost));
	totalcost += cost;
	
	// Damage with x Poison
	var damage = null;
	if (balltype !== "poison" && balltype !== "cash") {
		damage = CalculateDamageWithPoison(tab, power);
		if (damage !== null) {
			$(tagid + slot + '_dmg_poison').html(FormatNumber(damage));
		}
		else {
			damage = power;
		}
	}
	
	// Last 1 shots.			
	if (balltype !== "poison" && balltype !== "cash") {
		// Green bricks
		var bricklevel = CalculateLastBrickLevel(damage);
		$(tagid + slot + '_1shot_brick').html(bricklevel.toLocaleString("en-US", {minimumFractionDigits: 0, maximumFractionDigits: 0}));
		
		// Hex bricks
		var hexlevel = CalculateLastBrickLevel(damage / 25);
		$(tagid + slot + '_1shot_hex').html(hexlevel.toLocaleString("en-US", {minimumFractionDigits: 0, maximumFractionDigits: 0}));
		
		// Shield Hex bricks
		var shielddamage = damage / 25 / (500 / GetSettingsIfTrue(tab, "cards_shieldpen_active", "cards_shieldpen_value", 1));
		if (balltype === "sword") {
			shielddamage = damage / 25;
		}				
		var shieldlevel = CalculateLastBrickLevel(shielddamage);
		$(tagid + slot + '_1shot_shield').html(shieldlevel.toLocaleString("en-US", {minimumFractionDigits: 0, maximumFractionDigits: 0}));
	}
}

function CalculateSpeed(tab, balltype, slot) {		
	var increment = speedbasestats[balltype].increment;
	var modifier = speedbasestats[balltype].modifier;
	var basestat = basestats[slot][balltype].speed;
	var speedLevel = GetTabValue(tab, slot + '_speedLevel', 0);

	var speedBase = (increment * speedLevel * (Math.pow(modifier, speedLevel))) + basestat;
	var speed = (speedBase
		* GetSettings(tab, "prestige_speed", 1)
		* GetSettingsIfTrue(tab, "cards_speed_active", "cards_speed_value", 1)
		* ((GetSettings(tab, "cards_qc_active", false)) ? 0.5 : 1)
		* ((GetSettings(tab, "perks_speed", 1) > 1) ? GetSettings(tab, "perks_speed") : 1)
		* ((speedLevel > 40) ? 0.4 : 1)
		* ((speedLevel > 80) ? 0.4 : 1)
		* SkillsTreeModifier(tab, balltype, "speed", 1)
		* SkillsTreeModifier(tab, balltype, "enrage", 1));
	return speed;
}

function CalculatePower(tab, balltype, slot) {			
	var increment = powerbasestats[balltype].increment;
	var modifier = powerbasestats[balltype].modifier;
	var basestat = basestats[slot][balltype].power;
	var speedLevel = GetTabValue(tab, slot + '_speedLevel', 0);
	var powerLevel = GetTabValue(tab, slot + '_powerLevel', 0);

	var powerBase = (1
		+ (increment * powerLevel * (Math.pow(modifier, powerLevel)))
		+ ((balltype === "poison" || balltype === "cash") ? basestat - 1 : 0))
		* ((balltype !== "poison" && balltype !== "cash") ? basestat : 1);
	var power = (powerBase
		* GetSettings(tab, "prestige_power", 1)
		* GetSettingsIfTrue(tab, "cards_power_active", "cards_power_value", 1)
		* GetSettingsIfTrue(tab, "cards_qc_active", "cards_qc_value", 1)
		* ((balltype === "poison" || balltype === "cash") ? GetSettingsIfTrue(tab, "cards_spec_active", "cards_spec_value", 1) : 1)
		* ((GetSettings(tab, "perks_power", 1) > 1) ? GetSettings(tab, "perks_power") : 1)
		* ((GetSettings(tab, "boosts_ph_active", false)) ? 3 : 1)
		* ((speedLevel > 40) ? 5 : 1)
		* ((speedLevel > 80) ? 5 : 1)
		* (1 + (GetSettings(tab, "badges_" + tab[slot + '_type']) * 0.2))
		* SkillsTreeModifier(tab, balltype, "power", 1));
	return power;
}

function CalculateCost(tab, slot) {
	var amountLevel = GetTabValue(tab, slot + '_amount', 0);
	var speedLevel = GetTabValue(tab, slot + '_speedLevel', 0);
	var powerLevel = GetTabValue(tab, slot + '_powerLevel', 0);

	var ballcostmod = (1 + (GetSettings(tab, "prestige_ballCost", 0) / 100)) * (1 + (GetSettings(tab, "perks_ballCost", 0) / 100));
	var speedcostmod = (1 + (GetSettings(tab, "prestige_speedCost", 0) / 100)) * (1 + (GetSettings(tab, "perks_speedCost", 0) / 100));
	var powercostmod = (1 + (GetSettings(tab, "prestige_powerCost", 0) / 100)) * (1 + (GetSettings(tab, "perks_powerCost", 0) / 100));

	var sumballcost = 0;
	for (var i = 0; i < amountLevel; i++) {
		sumballcost += basecosts[slot].ball * Math.pow(1.9, i)
	}

	var sumspeedcost = 0;
	for (var i = 0; i < speedLevel; i++) {
		sumspeedcost += basecosts[slot].speed * Math.pow(1.9, i)
	}

	var sumpowercost = 0;
	for (var i = 0; i < powerLevel; i++) {
		sumpowercost += basecosts[slot].power * Math.pow(1.9, i)
	}

	var buycost = basecosts[slot].buy;
	var ballcost = ((amountLevel > 0) ? sumballcost * ballcostmod : 0);
	var speedcost = ((speedLevel > 0) ? sumspeedcost * speedcostmod : 0);
	var powercost = ((powerLevel > 0) ? sumpowercost * powercostmod : 0);
	var prestige1cost = ((speedLevel > 40) ? basecosts[slot].speed * Math.pow(1.9, 38) * 9.49 : 0) * speedcostmod;
	var prestige2cost = ((speedLevel > 80) ? basecosts[slot].speed * Math.pow(1.9, 78) * 9.49 : 0) * speedcostmod;
	var cost = buycost + ballcost + speedcost + powercost + prestige1cost + prestige2cost;
	return cost;
}

function SkillsTreeModifier(tab, balltype, stat, def) {
	var key = 'skillstree_' + balltype + '_' + stat;
	return GetSettings(tab, key, def);
}

function CalculateDamageWithPoison(tab, otherpower) {
	var tagid = '#' + tab.id + '_';
	var poisonSlot = null;
	for (var i in slots) {
		if (tab[slots[i] + "_type"] === "poison") {
			poisonSlot = slots[i];
			$(tagid + 'header_dmg_poison').html("Damage w/<br>" + poisonSlot + " Poison");
			if (poisonSlot === "7500") {
				$(tagid + 'header_dmg_poison').html("Damage w/<br>7.5k Poison");
			}
			
			break;
		}
	}
	
	if (poisonSlot === null) {
		$(tagid + 'header_dmg_poison').html("Damage w/<br>?? Poison");
		return null;
	}
	
	var poisonDamage = CalculatePower(tab, "poison", poisonSlot);
	var damage = otherpower * poisonDamage * GetSettingsIfTrue(tab, "cards_catalyst_active", "cards_catalyst_value", 1);
	return damage;
}

function CalculateLastBrickLevel(balldamage) {
	// Find first brick level where balldamage < brick health
	var nexthealthjump = null;
	for (var i in brickmult) {
		var health = Math.pow(brickmult[i].level, 1.32) * brickmult[i].cumulative;
		if (balldamage < health) {
			nexthealthjump = i;
			break;
		}
	}
	
	// If none found -> over 200k
	if (nexthealthjump === null) {
		var level = Math.pow(balldamage / brickmult[brickmult.length - 1].cumulative, 1/1.32);
		return level;
	}
	
	// Check if balldamage > previous brick health
	var previoushealth = Math.pow(brickmult[nexthealthjump].level - 1, 1.32) * brickmult[nexthealthjump - 1].cumulative;
	if (balldamage > previoushealth) {
		// If greater -> next level - 1 (balldamage between first and previous health)
		var level = brickmult[nexthealthjump].level - 1;
		return level;
	}
	else {
		// If smaller -> use cumulative of previous level
		var level = Math.pow(balldamage / brickmult[nexthealthjump - 1].cumulative, 1/1.32);
		return level;				
	}
}