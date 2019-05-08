
let localSettings = JSON.parse(localStorage.getItem("userSettings"));

if (!localSettings) {
    localStorage.setItem("recipes", JSON.stringify(""));
}

export default localSettings;