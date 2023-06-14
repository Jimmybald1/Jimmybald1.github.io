var defaultwindfallsettings = {
	sg_start: '5aa',
	sg_goal: '80ac',
	sc_start: '5aa',
	sc_cost: '1600',
	cg_cost: '1600',
	cg_goal: '80ac',
}

var windfallsettings = GetItem("windfallSettings", defaultwindfallsettings);

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
function FormatNumber(num) {
	var item = lookup.slice().reverse().find(function (item) {
		return num >= item.value;
	});

	if (item === undefined) {
		return 0;
	}

	if (item.symbol === null) {
		return num.toExponential(4);
	}

	return item ? (num / item.value).toFixed(4) + item.symbol : "0";
}
function UnFormatNumber(text) {
	if (!isNaN(text)) {
		return parseFloat(text);
	}
	
	var num = parseFloat(text);
	if (isNaN(num)) {
		return NaN;
	}
	
	var symbol = text.replace(num, '').replace(/0*/, '');
	var item = lookup.slice().reverse().find(function (item) {
		return symbol == item.symbol;
	});

	if (item === undefined) {
		return NaN;
	}
	
	return num * item.value;
}

function BuildPage() {
	// Fill in settings
	for (var key in windfallsettings) {
		$('#' + key).val(windfallsettings[key]);
	}
	
	CalcStartGoal(windfallsettings.sg_start, windfallsettings.sg_goal);
	CalcStartCost(windfallsettings.sc_start, windfallsettings.sc_cost);
	CalcCostGoal(windfallsettings.cg_cost, windfallsettings.cg_goal);
}

function CalcStartGoal(start, goal) {
	if (start === undefined || goal === undefined) {
		return;
	}
	
	var start = UnFormatNumber(start);
	var goal = UnFormatNumber(goal);
	if (isNaN(start) || isNaN(goal)) {
		$('#sg_result').html(NaN)
		return;
	}
	
	var windfalls = Math.log(goal / start) / Math.log(1.3);
	var cost = Math.ceil(windfalls) * 25;
	
	$('#sg_result').html('This will cost ' + cost + '  gems')
}

function CalcStartCost(start, cost) {
	if (start === undefined || cost === undefined) {
		return;
	}
	
	var start = UnFormatNumber(start);
	var cost = UnFormatNumber(cost);
	if (isNaN(start) || isNaN(cost)) {
		$('#sc_result').html(NaN)
		return;
	}
	
	var windfalls = Math.floor(cost / 25);
	var goal = start * Math.pow(1.3, windfalls);
	
	if (goal == Infinity || goal > 1e308) {
		$('#sc_result').html('World Value too large, number overflow.')
		return;
	}
	
	$('#sc_result').html('World Value result: ' + FormatNumber(goal))
}

function CalcCostGoal(cost, goal) {
	if (cost === undefined || goal === undefined) {
		return;
	}
	
	var cost = UnFormatNumber(cost);
	var goal = UnFormatNumber(goal);
	if (isNaN(cost) || isNaN(goal)) {
		$('#cg_result').html(NaN)
		return;
	}
	
	var windfalls = Math.floor(cost / 25);
	var start = goal / Math.pow(1.3, windfalls);
	
	$('#cg_result').html('Exact starting World Value: ' + FormatNumber(start))
}

function handleWindfallChange(event) {
	var element = event.target;
	var id = element.id;
	var value = element.value;
	
	if (value === '') {
		value = undefined;
	}
	
	console.log(windfallsettings[id], value);
	windfallsettings[id] = value;
	StoreItem('windfallSettings', windfallsettings);
	BuildPage();
}


















