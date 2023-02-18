function GetItem(key) {	
    try {
        var obj = {};
        var json = window.localStorage.getItem(key);
        if (json === undefined || json === null) {
            return null;
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
            return null;
        }
    }
}

function StoreItem(key, text) {
    window.localStorage.setItem(key, text);
}

function importSettingsFile(event) {
    $('#import_errors').html("");
    var file = event.target.files.item(0)
    file.text()
        .then((data) => {
            var storage = {};
            var clipboard = data;
            try {
                storage = JSON.parse(clipboard);
                console.log(storage);
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    $('#import_errors').html("not valid import data");
                    return;
                }
            }
            
            if (storage !== null) {
                if (storage?.settings !== null) {
                    StoreItem("settings", JSON.stringify(storage.settings));
                }
                if (storage?.statsCalculator !== null) {
                    StoreItem("statsCalculator", JSON.stringify(storage.statsCalculator));
                }
                if (storage?.levelTracker !== null) {
                    StoreItem("levelTracker", JSON.stringify(storage.levelTracker));
                }
            }
        });
        
    $('#import_message').html("Successfully imported data.");
}

function exportSettingsFile() {
    var filename = "IBB_Website_backup.json";
    
    var settings = GetItem("settings");
    var statscalc = GetItem("statsCalculator");
    var leveltracker = GetItem("levelTracker");
    var storage = {
        "settings": settings,
        "statsCalculator": statscalc,
        "levelTracker": leveltracker,
    };
    var text = JSON.stringify(storage, null, 4);
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function importSettingsClipboard(event) {
    $('#import_errors').html("");
    
    navigator.clipboard.readText()
        .then((data) => {
            var storage = {};
            var clipboard = data;
            try {
                storage = JSON.parse(clipboard);
                console.log(storage);
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    $('#import_errors').html("not valid import data");
                    return;
                }
            }
            
            if (storage !== null) {
                if (storage?.settings !== null) {
                    StoreItem("settings", JSON.stringify(storage.settings));
                }
                if (storage?.statsCalculator !== null) {
                    StoreItem("statsCalculator", JSON.stringify(storage.statsCalculator));
                }
                if (storage?.levelTracker !== null) {
                    StoreItem("levelTracker", JSON.stringify(storage.levelTracker));
                }
            }
        });
}

function exportSettingsClipboard(event) {
    $('#import_errors').html("");
    
    var settings = GetItem("settings");
    var statscalc = GetItem("statsCalculator");
    var leveltracker = GetItem("levelTracker");
    var storage = {
        "settings": settings,
        "statsCalculator": statscalc,
        "levelTracker": leveltracker,
    };
    navigator.clipboard.writeText(JSON.stringify(storage, null, 4));
}