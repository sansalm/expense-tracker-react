let aPriceList;


const setPriceList = priceList => {
    aPriceList = priceList;

};


const getPrice = (itemId, quantity) => {
    //console.log('Looking for identifying the price of itemId 2: ', aPriceList[1].prices[1].price)
    let price = 0

    if (quantity < aPriceList[itemId - 1].prices[1].qty) {
        price = (aPriceList[itemId - 1].prices[0].price * quantity)
    }

    if (quantity >= aPriceList[itemId - 1].prices[1].qty & quantity < aPriceList[itemId - 1].prices[2].qty) {
        price = (aPriceList[itemId - 1].prices[1].price * quantity)
    }

    if (quantity >= aPriceList[itemId - 1].prices[2].qty) {
        price = (aPriceList[itemId - 1].prices[2].price * quantity)
    }
    return price;

};


const priceList = {
    setPriceList,
    getPrice

};

module.exports = priceList
