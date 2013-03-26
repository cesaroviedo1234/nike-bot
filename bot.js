function nikeBot(userSpecifics) {
    chrome.alarms.create('refresh', {
        when: Date.now() + 2000, 
        periodInMinutes: 0.02
    });
    chrome.tabs.create({url: 'https://twitter.com/nikestore'}, function(twitterTab) {
        var shoes = userSpecifics.shoes;
        chrome.alarms.onAlarm.addListener(function (refresh) {
            twitBot(shoes, twitterTab);
        });
    });
    function twitBot(shoes, tab) {
        if (shoes.length > 0) {
            chrome.tabs.executeScript(tab.id, {file: 'twitWatch.js'}, function(r) {
                chrome.tabs.sendMessage(tab.id, shoes, function(result) {
                    var link = result.link;
                    var shoeIndex = result.shoe;
                    if (link.length > 0) {
                        shoes.splice(shoeIndex, 1);
                        chrome.tabs.create({url: link, active: false}, function(nikeTab) {
                            shoeBot(userSpecifics.cartInfo, nikeTab);
                        });
                    }
                });
            });
        } else {
            chrome.alarms.clear('refresh');
        }
        chrome.tabs.reload(tab.id);
    }
    function shoeBot(cartInfo, tab) {
        function injector(file, message) {
            chrome.tabs.executeScript(tab.id, {file: file}, function(r) {
                chrome.tabs.sendMessage(tab.id, message, function(result) {
                });
            });
        }
        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, updateTab) {
            switch (changeInfo.url.split('?')[0]) {
                case 'http://store.nike.com/us/en_us/':
                    injector('addToCart.js', cartInfo.sizeInfo);
                case 'https://secure-niketown.nike.com/checkout/html/checkout_login.jsp':
                    injector('login.js', cartInfo.loginInfo);
                case 'https://secure-niketown.nike.com/checkout/html/shipping.jsp':
                    injector('shipping.js', cartInfo.shippingInfo);
                /*case 'https://secure-niketown.nike.com/checkout/html/billing.jsp':
                    injector('billing.js', cartInfo.billingInfo);
                */
            }
        });
    }
}
chrome.extension.onMessage.addListener(function(message) {
    nikeBot(message);
});
