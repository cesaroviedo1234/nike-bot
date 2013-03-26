/*function to add shoes to casrt and move to checkout
  Most of the code is from TKDkickz */
function addToCart(sizeInfo) {
    var size = sizeInfo.size;
    var qty = sizeInfo.qty;
    console.log(size);
    console.log(qty);
	var sizesList=document.getElementsByName("skuAndSize")[0];
	function setQuantity() {
		document.getElementsByName("qty")[0].selectedIndex = qty - 1;
	}
	function setSizeValue() {
		for (var i=0; i<sizesList.length; i++){
			if(sizesList.options[i].text == size) {
				document.getElementsByName("skuAndSize")[0].selectedIndex = i;
				setQuantity();
			}
		}
	}
	if(sizesList != undefined) {
	    setSizeValue();
	    document.getElementsByClassName("button-container add-to-cart")[0].click();
        document.getElementsByClassName("checkout-button nike-button nike-button-orange")[0].click();
	} else {
	    setTimeout(function() {
            addToCart(sizeInfo)
        }, 250);
	}
}
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    addToCart(message);
});
