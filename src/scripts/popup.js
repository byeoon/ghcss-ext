const injectCheckbox = document.getElementById('injection');
const ignoreBansCheckbox = document.getElementById('ignore-bans');
const customOverrideCheckbox = document.getElementById('custom-override');
const overrideTextbox = document.getElementById('overridename');

window.onload = function() {
    chrome.storage.local.get("injection", function (data) {
        injectCheckbox.checked = data.injection;
    });

    chrome.storage.local.get("ignoreBans", function (data) {
        ignoreBansCheckbox.checked = data.ignoreBans;
    });

    chrome.storage.local.get("customOverride", function (data) {
        customOverrideCheckbox.checked = data.customOverride;
    });

    chrome.storage.local.get("overrideName", function (data) {
        data.overrideName = overrideTextbox.value;
    });
};

injectCheckbox.addEventListener('change', (event) => {
    chrome.storage.local.set({injection: event.target.checked});
});

ignoreBansCheckbox.addEventListener('change', (event) => {
    chrome.storage.local.set({ignoreBans: event.target.checked});
});

customOverrideCheckbox.addEventListener('change', (event) => {
    chrome.storage.local.set({customOverride: event.target.checked});
});

overrideTextbox.addEventListener('change', (event) => {
    chrome.storage.local.set({overrideName: event.target.checked});
});