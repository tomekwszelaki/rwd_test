var config = require('../config');
var should = require('should');

var webdriver = require('selenium-webdriver'),
    by = webdriver.By,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome');

var rwd_steps = function() {
    this.World = require('../world').World;

    this.Given(/^a device (\w+)$/, function(device, callback) {
        var cfg = config.getConfigFor(device);
        var options = new chrome.Options();
        options.addArguments(cfg.userAgent)

        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        this.driver.manage().window().setSize(cfg.resolution.width, cfg.resolution.height);
        this.windowWidth = cfg.resolution.width;
        callback();
    });

    this.When(/^I navigate to the showitem page$/, function(callback) {
        this.driver.get('http://allegro.pl/iphone-6-plus-nowy-i5147668029.html');
        var self = this;
        // when opened on a mobile device an overlay is shown with the information about the mobile app
        // let's wait until it opens and close it before continuing
        this.driver.wait(until.elementLocated(by.className('close')), 10000).then(function() {
            // Unfortunatelly the close button is hidden behind a <div class="push"></div> and webdriver
            // cannot interact with it. So let's refresh a page and the popup will disappear automatically
            self.driver.navigate().refresh();
            callback();
        });
    });

    this.Then(/^the gallery should be approximately (\w+) of the browser window$/, function(size, callback) {
        var self = this;
        this.driver.findElement(by.id('gallery')).getSize().then(function(sizeInfo) {
            console.log('expect the gallery to be approx: ' + size + ' of/as ' + self.windowWidth + ' | was: ' + sizeInfo.width);
            if (size === 'SAME') {
                sizeInfo.width.should.be.approximately(self.windowWidth, self.windowWidth/10);
            }
            if (size === 'A_THIRD') {
                sizeInfo.width.should.be.approximately(self.windowWidth/3, self.windowWidth/20);
            }
            self.driver.quit();
            callback();
        });
    });
};

module.exports = rwd_steps;