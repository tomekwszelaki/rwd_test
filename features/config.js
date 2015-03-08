var envs = {
    test1: {
        allegro: 'http://allegro.pl/',
        aukro_cz: 'http://aukro.cz/'
    }
    // Define the rest of the environments here
};

var devices = {
    NEXUS_4: {
        userAgent: '--user-agent=Mozilla/5.0 (Linux; Android 5.0.2; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
        resolution: {
            width: 768,
            height: 1280
        }
    },
    NEXUS_7: {
        userAgent: '--user-agent=Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
        resolution: {
            width: 800,
            height: 1280
        }
    }
};

var getConfigFor = function(device) {
    return devices[device] || null;
};

var runOn = function(env) {
    return envs[env] || null;
};

module.exports = {
    getConfigFor: getConfigFor,
    runOn: runOn
};


