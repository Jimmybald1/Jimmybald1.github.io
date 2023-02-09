var defaulttabs = [{
	"id": "tab0",
	"name": "tab0",

	"175_ball_type": null,
	"7500_ball_type": "poison",
	"175k_ball_type": null,
	"15m_ball_type": "cash",
	"400b_ball_type": null,
	"10q_ball_type": null,
	"10s_ball_type": "lightning",
	"100o_ball_type": "demo",
	"5aa_ball_type": null,
	"80ac_ball_type": null,

	"power": 4,
	"speed": 4,
	"start_time": "2023-02-02T00:00",
	"goal": 30000000,
	"ascending_active": false,

	"show_days": false,
	"show_hours": true,
	"show_minutes": true,
	"show_seconds": true,
	"show_level": true,
	"show_skipped": false,
	"show_level_increase": false,
	"show_skipped_increase": false,
	"show_skipped_percentage": false,
	"show_skipped_total_percentage": false,
	"show_level_per_minute": true,
	"show_level_per_hour": true,
	"show_level_per_day": false,
	"show_24h_estimated_result": true,
	"show_goal_reached_on": false,

	"rows": [
	{
		"id": "row0",
		"days": null,
		"hours": 23,
		"minutes": 0,
		"seconds": 0,
		"level": 114537,
		"skipped": null,
	},
	{
		"id": "row1",
		"days": null,
		"hours": 22,
		"minutes": 25,
		"seconds": 56,
		"level": 200448,
		"skipped": null,
	},
	{
		"id": "row2",
		"days": null,
		"hours": null,
		"minutes": null,
		"seconds": null,
		"level": null,
		"skipped": null,
	}]
}];

//StoreItem("levelTracker", defaulttabs);
var tabs = GetItem("levelTracker", defaulttabs);

function GetItem(key, obj) {	
	try {
		var json = window.localStorage.getItem(key);
		if (json === undefined || json === null) {
			StoreItem(key, obj);
		}
		else {
			obj = JSON.parse(json);
		}
	
		console.log(obj);
		return obj;
	}
	catch (e) {
		if (e.name === "NS_ERROR_FILE_CORRUPTED") {
			alert("Somehow your local storage file got corrupted. You will have to manually clear your cookies.")
			return obj;
		}
	}
}

function StoreItem(key, obj) {
	window.localStorage.setItem(key, JSON.stringify(obj));
}

function GetTabValue(tab, key, def) {
	if (Object.keys(tab).includes(key)
		&& tab[key] !== null) {
		return tab[key];
	}
	
	return def;
}

function handleChange(event) {
	var element = event.target;
	var value = element.value;
	var tabsplit = element.id.indexOf('_');
	var tabid = element.id.slice(0, tabsplit);
	var tab = tabs.find(e => e.id === tabid);
	var rowsplit = element.id.indexOf('_', tabsplit + 1)
	var rowid = element.id.slice(tabsplit + 1, rowsplit);
	var row = tab.rows.find(e => e.id === rowid);
	var elementid = element.id.slice(rowsplit + 1);

	if (elementid.includes("type")) {
		console.log(row[elementid], value);
		row[elementid] = value;
	}
	else if (elementid.includes("active")) {
		console.log(row[elementid], element.checked);
		row[elementid] = element.checked;
	}
	else {
		if (value === '') {
			console.log(row[elementid], null);
			row[elementid] = null;
		}
		else {
			console.log(row[elementid], parseInt(value));
			row[elementid] = parseInt(value);
		}
	}

	StoreItem("levelTracker", tabs);
	BuildLevelTracker(tab);
}

function handleSettingsChange(event) {
	var element = event.target;
	var value = element.value;
	var tabsplit = element.id.indexOf('_');
	var tabid = element.id.slice(0, tabsplit);
	var tab = tabs.find(e => e.id === tabid);
	var elementid = element.id.slice(tabsplit + 1);

	if (elementid.includes("show")) {
		console.log(tab[elementid], element.checked);
		tab[elementid] = element.checked;
	}
	else if (elementid.includes("active")) {
		console.log(tab[elementid], element.checked);
		tab[elementid] = element.checked;
	}
	else if (elementid.includes("time")) {
		console.log(tab[elementid], value);
		tab[elementid] = value;
	}
	else {
		if (value === '') {
			console.log(tab[elementid], null);
			tab[elementid] = null;
		}
		else {
			console.log(tab[elementid], parseFloat(value));
			tab[elementid] = parseFloat(value);
		}
	}

	StoreItem("levelTracker", tabs);
	BuildLevelTracker(tab);
}

function handleTabChange(event) {
	var element = event.target;
	var tabsplit = element.id.indexOf('_');
	var tabid = element.id.slice(0, tabsplit);
	var tab = tabs.find(e => e.id === tabid);
	
	if (tabs.includes(tab)) {
		BuildLevelTracker(tab);
	}
}

function handleNewTab(event) {
	var newindex = tabs.length;			
	
	if (tabs.length > 0) {
		for (var i = 0; i < tabs.length; i++) {
			if (tabs.find(e => e.id === 'tab' + i) === undefined) {
				newindex = i;
				break;
			}
		}
		
		tabs.push(structuredClone(tabs[0]));
	}
	else {
		tabs.push(structuredClone(defaulttabs[0]))
	}
	
	var tab = tabs[tabs.length - 1];
	tab.id = "tab" + newindex;
	tab.name = "Tab " + newindex;
	tab.rows = [];
	
	console.log('Create new tab ' + tab.name);
	StoreItem("levelTracker", tabs);
	
	// Add nav bar tab
	$(navbar_template.replaceAll('%tab%', tab.id).replaceAll('%tabname%', tab.name).replaceAll('%active%', '')).insertBefore('#newtab_id');
	// Add table
	$('#tab_content').append('<div id="' + tab.id + '" class="tab-pane">' + level_tracker_template.replaceAll('%tab%', tab.id) + '</div>');
	// Add + to table
	$('#' + tab.id + '_table').append('<tr id="' + tab.id + '_newrow_id" class="newrow"><td><a id="' + tab.id + '_newrow_name" href="#" onclick="handleNewRow(event)">+</a></td></tr>');
	// Add Show/Hide checkboxes
	$(level_tracker_show_columns_template.replaceAll('%tab%', tab.id)).insertAfter('#' + tab.id + '_mini_settings');

	BuildLevelTracker(tab);
	$('#' + tab.id + '_name').tab('show');
}

function handleTabEdit(event) {
	var element = event.target;
	var tabsplit = element.id.indexOf('_');
	var tabid = element.id.slice(0, tabsplit);
	var tab = tabs.find(e => e.id === tabid);
	
	var newname = prompt('Rename tab ' + tab.name, tab.name)
	if (newname !== null && newname !== "null") {
		console.log('Rename tab ' + tab.name + ' to ' + newname);
		$('#' + tab.id + '_name').html($('#' + tab.id + '_name').html().replace(tab.name, newname));
		tab.name = newname;
		StoreItem("levelTracker", tabs);
	}
}

function handleTabRemove(event) {
	var element = event.target;
	var tabsplit = element.id.indexOf('_');
	var tabid = element.id.slice(0, tabsplit);
	var tab = tabs.find(e => e.id === tabid);
	
	if (confirm('Are you sure you want to delete tab ' + tab.name)) {
		console.log('Delete tab ' + tab.name);
		tabs.splice(tabs.indexOf(tab), 1);
		$('#' + tab.id + '_id').remove();
		$('#' + tab.id).remove();
		StoreItem("levelTracker", tabs);
		if (tabs.length > 0) {
			BuildLevelTracker(tabs[0]);
			$('#' + tabs[0].id + '_name').tab('show');
		}
	}
}

function handleNewRow(event) {
	var element = event.target;	
	var tabsplit = element.id.indexOf('_');
	var tabid = element.id.slice(0, tabsplit);
	var tab = tabs.find(e => e.id === tabid);

	var newindex = tab.rows.length;
	
	for (var i = 0; i < tab.rows.length; i++) {
		if (tab.rows.find(e => e.id === 'row' + i) === undefined) {
			newindex = i;
			break;
		}
	}

	tab.rows.push({
		"id": 'row' + newindex,
		"days": null,
		"hours": null,
		"minutes": null,
		"seconds": null,
		"level": null,
		"skipped": null,
	});
	
	console.log('Create new row');
	StoreItem("levelTracker", tabs);
	
	$(level_tracker_row_template.replaceAll('%tab%', tab.id).replaceAll('%row%', tab.rows[tab.rows.length - 1].id)).insertBefore('#' + tab.id + '_newrow_id');
	BuildLevelTracker(tab);
}

function handleDeleteRow(event) {
	var element = event.target;	
	var tabsplit = element.id.indexOf('_');
	var tabid = element.id.slice(0, tabsplit);
	var tab = tabs.find(e => e.id === tabid);
	var rowsplit = element.id.indexOf('_', tabsplit + 1)
	var rowid = element.id.slice(tabsplit + 1, rowsplit);
	var row = tab.rows.find(e => e.id === rowid);

	tab.rows.splice(tab.rows.indexOf(row), 1);
	
	console.log('Delete row ' + row.id);
	StoreItem("levelTracker", tabs);
	
	$('#' + element.id).parent().parent().remove();
	BuildLevelTracker(tab);
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
		var id = tabs[i].id;
		$('#tab_content').append('<div id="' + id + '" class="tab-pane ' + ((i == 0) ? 'active' : '') + '">' + level_tracker_template.replaceAll('%tab%', id) + '</div>');
		for (var r = 0; r < tabs[i].rows.length; r++) {
			$('#' + id + '_table').append(level_tracker_row_template.replaceAll('%tab%', id).replaceAll('%row%', tabs[i].rows[r].id));
		}

		$('#' + id + '_table').append('<tr id="' + id + '_newrow_id" class="newrow"><td><a id="' + id + '_newrow_name" href="#" onclick="handleNewRow(event)">+</a></td></tr>');

		$(level_tracker_show_columns_template.replaceAll('%tab%', id)).insertAfter('#' + id + '_mini_settings');
	}
	
	if (tabs.length > 0) {
		BuildLevelTracker(tabs[0]);
	}
}		

function BuildLevelTracker(tab) {
	var tagid = '#' + tab.id + '_';
	
	// Fill in settings
	for (var key in tab) {
		if (key.includes("show")) {
			$(tagid + key).prop('checked', tab[key]);
			if (!tab[key]) {
				$('.' + tab.id + '_' + key + '_togglecolumn').addClass('hide');
			}
			else {
				$('.' + tab.id + '_' + key + '_togglecolumn').removeClass('hide');
			}
		}
		else if (key.includes("active")) {
			$(tagid + key).prop('checked', tab[key]);
		}
		else {
			$(tagid + key).val(tab[key]);
		}
	}

	$(tagid + 'goal_reached_on').html(tab.goal?.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}) + '<br>reached on:');
	
	// Fill in row values
	for (var i = 0; i < tab.rows.length; i++) {
		for (var key in tab.rows[i]) {
			if (tab['show_' + key]) {
				$(tagid + tab.rows[i].id + '_' + key).val(tab.rows[i][key]/*?.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})*/);
			}
		}
	}
	
	for (var i = 0; i < tab.rows.length; i++) {
		CalculateRow(tab, i);
	}
}

function CalculateRow(tab, index) {	
	var row = tab.rows[index];
	var prevrow = ((index > 0) ? tab.rows[index - 1] : null);
	
	var tagid = '#' + tab.id + '_' + row.id + '_';
	
	if ((row?.days === null
		&& row?.hours === null
		&& row?.minutes === null
		&& row?.seconds === null)
		|| row?.level === null) {
		$(tagid + 'level_increase').html("");
		$(tagid + 'skipped_increase').html("");
		$(tagid + 'skipped_percentage').html("");
		$(tagid + 'skipped_total_percentage').html("");
		$(tagid + 'level_per_minute').html("");
		$(tagid + 'level_per_hour').html("");
		$(tagid + 'level_per_day').html("");
		$(tagid + '24h_estimated_result').html("");
		$(tagid + 'goal_reached_on').html("");
		return;
	}

	var levelincrease = row?.level - ((prevrow !== null) ? prevrow?.level : 0);
	$(tagid + 'level_increase').html(levelincrease);

	var skippedincrease = row?.skipped - ((prevrow !== null) ? prevrow?.skipped : 0);
	$(tagid + 'skipped_increase').html(skippedincrease);
	$(tagid + 'skipped_percentage').html((skippedincrease / levelincrease * 100)?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '%');
	$(tagid + 'skipped_total_percentage').html((row?.skipped / row?.level * 100)?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '%');

	var prevseconds = ((prevrow !== null) ? prevrow?.seconds + (prevrow?.minutes * 60) + (prevrow?.hours * 3600) + (prevrow?.days * 3600 * 24) : 24 * 3600);
	var seconds = row?.seconds + (row?.minutes * 60) + (row?.hours * 3600) + (row?.days * 3600 * 24);
	var levelperseconds = levelincrease / (tab?.ascending_active ? (seconds - prevseconds) : (prevseconds - seconds));
	$(tagid + 'level_per_minute').html((levelperseconds * 60)?.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}));
	$(tagid + 'level_per_hour').html((levelperseconds * 3600)?.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}));
	$(tagid + 'level_per_day').html((levelperseconds * 3600 * 24)?.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}));

	var timeleft = (tab?.ascending_active ? ((seconds < (3600 * 24)) ? ((3600 * 24) - seconds) : 0) : seconds)
	$(tagid + '24h_estimated_result').html((row?.level + (timeleft * levelperseconds))?.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0}));

	var levelsleft = tab?.goal !== null ? tab?.goal - row?.level : 0;
	var date = new Date(tab?.start_time);
	date.setSeconds(date.getSeconds() + (levelsleft / levelperseconds));
	$(tagid + 'goal_reached_on').html(date.toLocaleDateString(undefined));
}