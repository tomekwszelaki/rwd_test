var webdriver = require('selenium-webdriver'),
    by = webdriver.By,
    until = webdriver.until,
    Q = require('q');

var searchFor = function(driver, phrase, category) {
    return Q.Promise(function(resolve) {
        driver.wait(until.elementLocated(by.id('main-search-text')), 10000)
            .then(function(searchBar) {
                console.log('going to search for "' + phrase + '" in category "' + category + '"');
                searchBar.clear();
                searchBar.sendKeys(phrase);
                // TODO: search by category
                driver.findElement(by.className('search-btn')).click().then(function() {
                    console.log('search clicked, going to resolve this promise');
                    resolve();
                });
            });
    });
};

var clickFirstOffer = function(driver) {
    return Q.Promise(function(resolve) {
        driver.wait(until.elementLocated(by.id('featured-offers')), 10000)
            .then(function() {
                console.log('going to click the first offer');
                driver
                    .findElement(by.id('featured-offers'))
                    .findElement(by.className('offer'))
                    .findElement(by.tagName('a')).click()
                    .then(function() {
                        console.log('first offer clicked. Going to resolve this promise.');
                        resolve();
                    });
            });
    });
};

var searchForAndClickFirstOffer = function(driver, phrase, category) {
    return searchFor(driver, phrase, category)
        .then(function() {
            return clickFirstOffer(driver);
        });
};

var World = function World(callback) {
    this.searchFor = searchFor;
    this.clickFirstOffer = clickFirstOffer;
    this.searchForAndClickFirstOffer = searchForAndClickFirstOffer;
    callback();
};

exports.World = World;