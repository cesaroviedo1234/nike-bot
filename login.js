function login(loginInfo) {
    document.getElementById("tunnelEmailInput").value = loginInfo.email;
    document.getElementById("tunnelPasswordInput").value = loginInfo.password;
    document.getElementById("ch4_loginButton").click();
}
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    login(message);
});
