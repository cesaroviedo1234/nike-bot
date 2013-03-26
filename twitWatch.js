function twitWatch(shoes) {
    var result = {
        link: "",
        shoe: ""
    };
    var tweets = document.getElementsByClassName('js-tweet-text');
    shoes.forEach(function(ele, index, array) {
        var pattern = new RegExp(ele + '.*now available', "mi");
        console.log(pattern);
        for (i = 0, len=tweets.length; i < len; i++) {
            var tweet = tweets[i].childNodes;
            console.log(tweets.length);
            if (pattern.test(tweet[0].nodeValue)) {
                result.link = tweet[1].getAttribute('href');
                result.shoe = index;
                console.log(result);
                return result;
            }
        }
    });
    return result;
}

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    sendResponse(twitWatch(message));
});
