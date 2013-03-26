function shipping(shippingInfo) {
    document.getElementById('fname').value = shippingInfo.fname;
    document.getElementById('lname').value = shippingInfo.lname;
    document.getElementById('address1Field').value = shippingInfo.address;
    document.getElementById('singleCity').value = shippingInfo.city;
    document.getElementById('singleState').value = shippingInfo.state;
    document.getElementById('postalCodeField').value = shippingInfo.zip;
    document.getElementById('shippingSubmit').click();
}
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    shipping(message);
});
