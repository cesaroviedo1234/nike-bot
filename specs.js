function submit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var size = document.getElementById('size').value;
    var qty = document.getElementById('qty').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var shoes = document.getElementById('shoes').value.split(', ');
    var userSpecifics = {
        cartInfo: {
            loginInfo: {
                email: email,
                passowrd: password
            },
            sizeInfo: {
                size: size,
                qty: qty
            },
            shippingInfo: {
                fname: fname,
                lname: lname,
                address: address,
                city: city,
                state: state,
                zip: zip
            },
            /*billingInfo: {
                fname: fname,
                lname: lname,
                card_type: cardType,
                card_number: cardNumber,
                expire_month: month,
                expire_year: year,
                security_code: security,
                address: address,
                city: city,
                state: state,
                zip: zip,
                phone: phone,
                email: email
            }*/
        },
        shoes: shoes
    }
    chrome.extension.sendMessage(userSpecifics);
}
function tester (userSpecifics) {
    console.log(userSpecifics.shoes);
    chrome.tabs.create({url: 'http://google.com'}, function(tab) {
        console.log(tab.id);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('start');
    button.addEventListener('click', submit);
});
