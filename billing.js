function billing(billingInfo) {
    document.getElementById('cardType').value = billingInfo.card_type;
    document.getElementById('creditCardNumber').value = billingInfo.card_number;
    document.getElementById('cardExpiresMonth').value = billingInfo.expire_month;
    document.getElementById('cardExpiresYear').value = billingInfo.expire_year;
    document.getElementById('cvNumber').value = billingInfo.security_code;
    document.getElementById('bfname').value = billingInfo.fname;
    document.getElementById('blname').value = billingInfo.lname;
    document.getElementById('baddr1').value = billingInfo.address;
    document.getElementById('bcity').value = billingInfo.city;
    document.getElementById('bzip').value = billingInfo.zip;
    document.getElementById('bphone').value = billingInfo.phone;
    document.getElementById('bfax').value = billingInfo.phone;
    document.getElementById('bemail').value = billingInfo.email;
    document.getElementById('editPayDetails').click();
    document.getElementById('singleState').value = billingInfo.state;
    document.getElementById('stateField').value = billingInfo.state;
    document.getElementById('billingSubmit').click();
}
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    billing(message);
});
