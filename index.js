var fs = require('fs');
var path = require('path');
var ig = require('imagemagick');
var colors = require('colors');
var _ = require('underscore');
var Q = require('q');
var nodeFs = require('node-fs');

/**
 * Check which platforms are added to the project and return their icon names and sized
 *
 * @param  {String} projectName
 * @return {Promise} resolves with an array of platforms
 */
var getPlatformIcons = function () {
    var deferred = Q.defer();
    var platforms = [];
    //ok
    platforms.push({
        name: 'ios',
        isAdded: true,
        iconsPath: 'res/icons/ios/',
        icons: [
            // Default icon (avoid Apple submit error ITMS-90032)
            { name: "../../../icon.png", size: 57 },

            { name: "icon.png", size: 57 },
            { name: "icon@2x.png", size: 114 },

            { name: 'icon-20.png', size: 20 },
            { name: 'icon-20@3x.png', size: 60 },   
                       
            { name: 'icon-24@2x.png', size: 48 },
            
            { name: 'icon-27.5@2x.png', size: 55 },
            
            { name: 'icon-29.png', size: 29 },
            { name: 'icon-29@2x.png', size: 58 },
            { name: 'icon-29@3x.png', size: 87 },
            
            { name: 'icon-33@2x.png', size: 66 },
            
            { name: 'icon-40.png', size: 40 },
            { name: 'icon-40@2x.png', size: 80 },  
            
            { name: 'icon-44@2x.png', size: 88 },  
            
            { name: 'icon-46@2x.png', size: 92 },
            
            { name: 'icon-50.png', size: 50 },
            { name: 'icon-50@2x.png', size: 100 },
            
            { name: 'icon-51@2x.png', size: 102 },
            
            { name: 'icon-57.png', size: 57 },
            { name: 'icon-57@2x.png', size: 114 },
            
            { name: 'icon-60.png', size: 60 },
            { name: 'icon-60@2x.png', size: 120 },            
            { name: 'icon-60@3x.png', size: 180 },

            { name: 'icon-small.png', size: 29 },
            { name: 'icon-small@2x.png', size: 58 },            
            { name: 'icon-small@3x.png', size: 87 },
            
            { name: 'icon-72.png', size: 72 },
            { name: 'icon-72@2x.png', size: 144 },
            
            { name: 'icon-76.png', size: 76 },
            { name: 'icon-76@2x.png', size: 152 },            
            
            { name: 'icon-83.5@2x.png', size: 167 },
            
            { name: 'icon-86@2x.png', size: 172 },
            
            { name: 'icon-98@2x.png', size: 196 },
            
            { name: 'icon-108@2x.png', size: 216 },            
            
            { name: 'icon-117@2x.png', size: 234 },
            
            { name: 'icon-167.png', size: 167 },
            
            { name: "icon-1024.png", size: 1024 }

        ]
    });

    //appStore Icon for iOS
    platforms.push({
        name: 'ios',
        desc: "iOS Store",
        iconsPath: 'res/store/ios/',
        isAdded: true,
        icons: [
            { name: "icon-1024.jpg", size: 1024 } // App Store
        ]
    });

    //ok
    platforms.push({
        name: 'android',
        iconsPath: 'res/icons/android/',
        isAdded: true,
        icons: [
            { name: 'icon-36-ldpi.png', size: 36, density: 'ldpi' },
            { name: 'icon-48-mdpi.png', size: 48, density: 'mdpi' },
            { name: 'icon-72-hdpi.png', size: 72, density: 'hdpi' },
            { name: 'icon-96-xhdpi.png', size: 96, density: 'xhdpi' },
            { name: 'icon-144-xxhdpi.png', size: 144, density: 'xxhdpi' },
            { name: 'icon-192-xxxhdpi.png', size: 192, density: 'xxxhdpi' },
        ]
    });

    //appStore Icon for Android
    platforms.push({
        name: 'android',
        desc: "Android Play Store",
        iconsPath: 'res/store/android/',
        isAdded: true,
        icons: [
            { name: "icon-512.png", size: 512 }
        ]
    });

    //appStore Icon for Android
    platforms.push({
        name: 'android_notification',
        desc: "Android Notification Icons",
        iconsPath: 'res/icons/android_notification/',
        isAdded: true,
        icons: [
            { name: "drawable/icon_notification.png", size: 48 },
            { name: "drawable-mdpi/icon_notification.png", size: 24 },
            { name: "drawable-hdpi/icon_notification.png", size: 36 },
            { name: "drawable-xhdpi/icon_notification.png", size: 48 },
            { name: "drawable-xxhdpi/icon_notification.png", size: 72 },
            { name: "drawable-xxxhdpi/icon_notification.png", size: 96 }
        ]
    });
    /*
    //ok
    platforms.push({
        name: 'wp8',
        iconsPath: 'res/icons/wp8/',
        isAdded: true,
        icons: [
            { name: 'ApplicationIcon.png', size: 99 },
            { name: 'Background.png', size: 159 },
        ]
    });

    //ok
    platforms.push({
        name: 'windows',
        iconsPath: 'res/icons/windows/',
        isAdded: true,
        icons: [
            { name: 'Square150x150Logo.scale-100.png', size: 150 },
            { name: 'Square150x150Logo.scale-240.png', size: 360 },
            { name: 'Square30x30Logo.scale-100.png', size: 30 },
            { name: 'Square310x310Logo.scale-100.png', size: 310 },
            { name: 'Square44x44Logo.scale-240.png', size: 106 },
            { name: 'Square70x70Logo.scale-100.png', size: 70 },
            { name: 'Square71x71Logo.scale-240.png', size: 170 },
            { name: 'StoreLogo.scale-100.png', size: 50 },
            { name: 'StoreLogo.scale-240.png', size: 120 },
            { name: 'Wide310x150Logo.scale-100.png', size: 310 },
            { name: 'Wide310x150Logo.scale-240.png', size: 744 },
        ]
    });
    */
    platforms = settings.ICON_PLATFORMS || platforms

    deferred.resolve(platforms);
    return deferred.promise;
};

/**
 * Check which platforms are added to the project and return their splash screen names and sizes
 *
 * @param  {String} projectName
 * @return {Promise} resolves with an array of platforms
 */
var getPlatformSplashs = function () {
    var deferred = Q.defer();
    var platforms = [];

    //ok
    platforms.push({
        name: 'ios',
        isAdded: true,
        splashPath: 'res/screens/ios/',
        splash: [
            { name: "Default@2x~universal~anyany.png" , width: 2732 , height: 2732 },
            { name: "Default@2x~universal~comany.png" , width: 1278 , height: 2732 },
            { name: "Default@2x~universal~comcom.png" , width: 1334 , height: 750 },
            { name: "Default@3x~universal~anyany.png" , width: 2208 , height: 2208 },
            { name: "Default@3x~universal~anycom.png" , width: 2208 , height: 1242 },
            { name: "Default@3x~universal~comany.png" , width: 1242 , height: 2208 }
        ]
    });

    //ok
    platforms.push({
        name: 'android',
        isAdded: true,
        splashPath: 'res/screens/android/',
        splash: [
            { name: "screen-ldpi-portrait.png", width: 320, height: 426, density: "port-ldpi" }, // 200x320
            { name: "screen-ldpi-landscape.png", width: 426, height: 320, density: "land-ldpi" }, // 320x200
            { name: "screen-hdpi-portrait.png", width: 480, height: 640, density: "port-hdpi" }, // 320x480
            { name: "screen-hdpi-landscape.png", width: 640, height: 480, density: "land-hdpi" }, // 480x320
            { name: "screen-mdpi-portrait.png", width: 320, height: 470, density: "port-mdpi" }, // 480x800
            { name: "screen-mdpi-landscape.png", width: 470, height: 320, density: "land-mdpi" }, // 800x480
            { name: "screen-xhdpi-portrait.png", width: 720, height: 960, density: "port-xhdpi" }, // 720x1280
            { name: "screen-xhdpi-landscape.png", width: 960, height: 720, density: "land-xhdpi" }, // 1280x720
            { name: "screen-xxhdpi-portrait.png", width: 960, height: 1600, density: "port-xxhdpi" }, // 960x1600
            { name: "screen-xxhdpi-landscape.png", width: 1600, height: 960, density: "land-xxhdpi" }, // 1600x960
            { name: "screen-xxxhdpi-portrait.png", width: 1280, height: 1920, density: "port-xxhdpi" }, // 1280x1920
            { name: "screen-xxxhdpi-landscape.png", width: 1920, height: 1280, density: "land-xxhdpi" } // 1920x1280
        ]
    });

    /*
    platforms.push({
        name: 'android',    //we want to use the specific android splash (if there is one)
        desc: "Android Play Store (Cover Image)",
        isAdded: true,
        splashPath: 'res/store/android/',
        splash: [
            { name: 'cover-store.png', width: 1024, height: 500 },
        ]
    });
    */
    /*
    //ok
    // https://msdn.microsoft.com/en-us/library/windows/apps/ff769511(v=vs.105).aspx
    platforms.push({
        name: 'wp8',
        isAdded: true,
        splashPath: 'res/screens/wp8/',
        splash: [
            { width: 768, height: 1280, name: "SplashScreenImage.jpg" },
            { width: 480, height: 800, name: "SplashScreenImage.screen-WVGA.jpg" },
            { width: 768, height: 1280, name: "SplashScreenImage.screen-WXGA.jpg" },
            { width: 720, height: 1280, name: "SplashScreenImage.screen-720p.jpg" }
        ]
    });

    //ok
    platforms.push({
        name: 'windows',
        isAdded: true,
        splashPath: 'res/screens/windows/',
        splash: [
            { width: 620, height: 300, name: "SplashScreen.scale-100.png" },
            { width: 1152, height: 1920, name: "SplashScreen.scale-240.png" },
            { width: 1152, height: 1920, name: "SplashScreenPhone.scale-240.png" },
        ]
    });
    */
    platforms = settings.SPLASH_PLATFORMS || platforms

    deferred.resolve(platforms);
    return deferred.promise;
};

/**
 * Check which platforms are added to the project and return their dark splash screen names and sizes
 *
 * @param  {String} projectName
 * @return {Promise} resolves with an array of platforms
 */
var getPlatformDarkSplashs = function () {
    var deferred = Q.defer();
    var platforms = [];

    //ok
    platforms.push({
        name: 'ios',
        isAdded: true,
        splashPath: 'res/screens/ios/',
        splash: [
            { name: "Default@2x~universal~anyany~dark.png" , width: 2732 , height: 2732 },
            { name: "Default@2x~universal~comany~dark.png" , width: 1278 , height: 2732 },
            { name: "Default@2x~universal~comcom~dark.png" , width: 1334 , height: 750 },
            { name: "Default@3x~universal~anyany~dark.png" , width: 2208 , height: 2208 },
            { name: "Default@3x~universal~anycom~dark.png" , width: 2208 , height: 1242 },
            { name: "Default@3x~universal~comany~dark.png" , width: 1242 , height: 2208 }
        ]
    });

    //ok
    platforms.push({
        name: 'android',
        isAdded: true,
        splashPath: 'res/screens/android/',
        splash: [
            { name: "screen-night-ldpi-portrait.png", width: 320, height: 426, density: "port-night-ldpi" }, // 200x320
            { name: "screen-night-ldpi-landscape.png", width: 426, height: 320, density: "land-night-ldpi" }, // 320x200
            { name: "screen-night-hdpi-portrait.png", width: 480, height: 640, density: "port-night-hdpi" }, // 320x480
            { name: "screen-night-hdpi-landscape.png", width: 640, height: 480, density: "land-night-hdpi" }, // 480x320
            { name: "screen-night-mdpi-portrait.png", width: 320, height: 470, density: "port-night-mdpi" }, // 480x800
            { name: "screen-night-mdpi-landscape.png", width: 470, height: 320, density: "land-night-mdpi" }, // 800x480
            { name: "screen-night-xhdpi-portrait.png", width: 720, height: 960, density: "port-night-xhdpi" }, // 720x1280
            { name: "screen-night-xhdpi-landscape.png", width: 960, height: 720, density: "land-night-xhdpi" }, // 1280x720
            { name: "screen-night-xxhdpi-portrait.png", width: 960, height: 1600, density: "port-night-xxhdpi" }, // 960x1600
            { name: "screen-night-xxhdpi-landscape.png", width: 1600, height: 960, density: "land-night-xxhdpi" }, // 1600x960
            { name: "screen-night-xxxhdpi-portrait.png", width: 1280, height: 1920, density: "port-night-xxhdpi" }, // 1280x1920
            { name: "screen-night-xxxhdpi-landscape.png", width: 1920, height: 1280, density: "land-night-xxhdpi" } // 1920x1280
        ]
    });

    /*
    platforms.push({
        name: 'android',    //we want to use the specific android splash (if there is one)
        desc: "Android Play Store (Cover Image)",
        isAdded: true,
        splashPath: 'res/store/android/',
        splash: [
            { name: 'cover-store-dark.png', width: 1024, height: 500 },
        ]
    });
    */
    /*
    //ok
    // https://msdn.microsoft.com/en-us/library/windows/apps/ff769511(v=vs.105).aspx
    platforms.push({
        name: 'wp8',
        isAdded: true,
        splashPath: 'res/screens/wp8/',
        splash: [
            { width: 768, height: 1280, name: "SplashScreenImage-dark.jpg" },
            { width: 480, height: 800, name: "SplashScreenImage-dark.screen-WVGA.jpg" },
            { width: 768, height: 1280, name: "SplashScreenImage-dark.screen-WXGA.jpg" },
            { width: 720, height: 1280, name: "SplashScreenImage-dark.screen-720p.jpg" }
        ]
    });

    //ok
    platforms.push({
        name: 'windows',
        isAdded: true,
        splashPath: 'res/screens/windows/',
        splash: [
            { width: 620, height: 300, name: "SplashScreen-dark.scale-100.png" },
            { width: 1152, height: 1920, name: "SplashScreen-dark.scale-240.png" },
            { width: 1152, height: 1920, name: "SplashScreenPhone-dark.scale-240.png" },
        ]
    });
    */
    platforms = settings.SPLASH_PLATFORMS || platforms

    deferred.resolve(platforms);
    return deferred.promise;
};

/**
 * @var {Object} settings - names of the confix file and of the icon image
 * TODO: add option to get these values as CLI params
 */
var settings = {};
settings.ICON_FILE = path.join('model', 'icon.png');
settings.SPLASH_FILE = path.join('model', 'splash.png');
settings.SPLASH_DARK_FILE = path.join('model', 'splash-dark.png');

/**
 * @var {Object} console utils
 */
var display = {};
display.success = function (str) {
    str = '✓  '.green + str;
    console.log('  ' + str);
};
display.error = function (str) {
    str = '✗  '.red + str;
    console.log('  ' + str);
};
display.header = function (str) {
    console.log('');
    console.log(' ' + str.cyan.underline);
    console.log('');
};

/**
 * Resizes and creates a new icon in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} icon
 * @return {Promise}
 */
var generateIcon = function (platform, icon) {
    var deferred = Q.defer();
    try {
        var filePath = path.join(platform.iconsPath, icon.name);
        var filedirName = path.dirname(filePath);
        if (!fs.existsSync(filedirName)) {
            nodeFs.mkdirSync(filedirName, '0777', true);
        }
        var srcPath = settings.ICON_FILE;
        var platformIconPath = path.join(path.dirname(srcPath), platform.name, path.basename(srcPath));
        if (fs.existsSync(platformIconPath)) {
            srcPath = platformIconPath;
        }
        ig.resize({
            srcPath: srcPath,
            dstPath: filePath,
            quality: 1,
            format: icon.name.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
            width: icon.size,
            height: icon.size,
        }, function (err, stdout, stderr) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve();
                display.success(icon.name + ' created');
            }
        });
    } catch (error) {
        deferred.reject(err);
    }
    return deferred.promise;
};

/**
 * Generates icons based on the platform object
 *
 * @param  {Object} platform
 * @return {Promise}
 */
var generateIconsForPlatform = function (platform) {
    var deferred = Q.defer();
    var desc = platform.desc ? platform.desc : platform.name;
    display.header('Generating Icons for ' + desc);
    var all = [];
    var icons = platform.icons;
    icons.forEach(function (icon) {
        all.push(generateIcon(platform, icon));
    });
    Q.all(all).then(function () {
        deferred.resolve();
    }).catch(function (err) {
        console.log(err);
    });
    return deferred.promise;
};

/**
 * Goes over all the platforms and triggers icon generation
 *
 * @param  {Array} platforms
 * @return {Promise}
 */
var generateIcons = function (platforms) {
    var deferred = Q.defer();
    var sequence = Q();
    var all = [];
    _(platforms).where({
        isAdded: true
    }).forEach(function (platform) {
        sequence = sequence.then(function () {
            return generateIconsForPlatform(platform);
        });
        all.push(sequence);
    });
    Q.all(all).then(function () {
        deferred.resolve();
    });
    return deferred.promise;
};


/**
 * Checks if a valid icon file exists
 *
 * @return {Promise} resolves if exists, rejects otherwise
 */
var validIconExists = function () {
    var deferred = Q.defer();
    fs.exists(settings.ICON_FILE, function (exists) {
        if (exists) {
            display.success(settings.ICON_FILE + ' exists');
            deferred.resolve(true);
        } else {
            display.error(settings.ICON_FILE + ' does not exist in the root folder');
            deferred.resolve(false);
        }
    });
    return deferred.promise;
};


/**
 * Crops and creates a new splash in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} splash
 * @return {Promise}
 */
var generateSplash = function (platform, splash) {
    var deferred = Q.defer();
    try {
        var filePath = path.join(platform.splashPath, splash.name);
        var filedirName = path.dirname(filePath);
        if (!fs.existsSync(filedirName)) {
            nodeFs.mkdirSync(filedirName, '0777', true);
        }
        var srcPath = settings.SPLASH_FILE;
        var platformIconPath = path.join(path.dirname(srcPath), platform.name, path.basename(srcPath));
        if (fs.existsSync(platformIconPath)) {
            srcPath = platformIconPath;
        }
        ig.crop({
            srcPath: srcPath,
            dstPath: filePath,
            quality: 1,
            format: splash.name.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
            width: splash.width,
            height: splash.height,
        }, function (err, stdout, stderr) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve();
                display.success(splash.name + ' created');
            }
        });
    } catch (error) {
        deferred.reject(err);
    }
    return deferred.promise;
};

/**
 * Crops and creates a new dark splash in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} splash
 * @return {Promise}
 */
var generateDarkSplash = function (platform, splash) {
    var deferred = Q.defer();
    try {
        var filePath = path.join(platform.splashPath, splash.name);
        var filedirName = path.dirname(filePath);
        if (!fs.existsSync(filedirName)) {
            nodeFs.mkdirSync(filedirName, '0777', true);
        }
        var srcPath = settings.SPLASH_DARK_FILE;
        var platformIconPath = path.join(path.dirname(srcPath), platform.name, path.basename(srcPath));
        if (fs.existsSync(platformIconPath)) {
            srcPath = platformIconPath;
        }
        ig.crop({
            srcPath: srcPath,
            dstPath: filePath,
            quality: 1,
            format: splash.name.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
            width: splash.width,
            height: splash.height,
        }, function (err, stdout, stderr) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve();
                display.success(splash.name + ' created');
            }
        });
    } catch (error) {
        deferred.reject(err);
    }
    return deferred.promise;
};

/**
 * Generates splash based on the platform object
 *
 * @param  {Object} platform
 * @return {Promise}
 */
var generateSplashForPlatform = function (platform) {
    var deferred = Q.defer();
    var desc = platform.desc ? platform.desc : platform.name;
    display.header('Generating splash screen for ' + desc);
    var all = [];
    var splashes = platform.splash;
    splashes.forEach(function (splash) {
        all.push(generateSplash(platform, splash));
    });
    Q.all(all).then(function () {
        deferred.resolve();
    }).catch(function (err) {
        console.log(err);
    });
    return deferred.promise;
};

/**
 * Generates splash based on the platform object
 *
 * @param  {Object} platform
 * @return {Promise}
 */
var generateDarkSplashForPlatform = function (platform) {
    var deferred = Q.defer();
    var desc = platform.desc ? platform.desc : platform.name;
    display.header('Generating dark splash screen for ' + desc);
    var all = [];
    var splashes = platform.splash;
    splashes.forEach(function (splash) {
        all.push(generateDarkSplash(platform, splash));
    });
    Q.all(all).then(function () {
        deferred.resolve();
    }).catch(function (err) {
        console.log(err);
    });
    return deferred.promise;
};

/**
 * Goes over all the platforms and triggers splash screen generation
 *
 * @param  {Array} platforms
 * @return {Promise}
 */
var generateSplashes = function (platforms) {
    var deferred = Q.defer();
    var sequence = Q();
    var all = [];
    _(platforms).where({
        isAdded: true
    }).forEach(function (platform) {
        sequence = sequence.then(function () {
            return generateSplashForPlatform(platform);
        });
        all.push(sequence);
    });
    Q.all(all).then(function () {
        deferred.resolve();
    });
    return deferred.promise;
};
/**
 * Checks if a valid splash file exists
 *
 * @return {Promise} resolves if exists, rejects otherwise
 */
var validSplashExists = function () {
    var deferred = Q.defer();
    fs.exists(settings.SPLASH_FILE, function (exists) {
        if (exists) {
            display.success(settings.SPLASH_FILE + ' exists');
            deferred.resolve(true);
        } else {
            display.error(settings.SPLASH_FILE + ' does not exist in the root folder');
            deferred.resolve(false);
        }
    });
    return deferred.promise;
};

/**
 * Goes over all the platforms and triggers dark splash screen generation
 *
 * @param  {Array} platforms
 * @return {Promise}
 */
var generateDarkSplashes = function (platforms) {
    var deferred = Q.defer();
    var sequence = Q();
    var all = [];
    _(platforms).where({
        isAdded: true
    }).forEach(function (platform) {
        sequence = sequence.then(function () {
            return generateDarkSplashForPlatform(platform);
        });
        all.push(sequence);
    });
    Q.all(all).then(function () {
        deferred.resolve();
    });
    return deferred.promise;
};
/**
 * Checks if a valid dark splash file exists
 *
 * @return {Promise} resolves if exists, rejects otherwise
 */
var validDarkSplashExists = function () {
    var deferred = Q.defer();
    fs.exists(settings.SPLASH_DARK_FILE, function (exists) {
        if (exists) {
            display.success(settings.SPLASH_DARK_FILE + ' exists');
            deferred.resolve(true);
        } else {
            display.error(settings.SPLASH_DARK_FILE + ' does not exist in the root folder');
            deferred.resolve(false);
        }
    });
    return deferred.promise;
};



function generate(options) {
    settings = options || settings;
    display.header('Checking Splash & Icon');
    return Q.all([validIconExists(), validSplashExists(), validDarkSplashExists()])
        .then(function (results) {
            var hasIcon = results[0] === true;
            var hasSplash = results[1] === true;
            var promise;

            if (!hasIcon && !hasSplash) {
                //console.log(arguments);
                promise = Q.reject();
            }

            if (hasIcon) {
                promise = Q.when(promise)
                    .then(getPlatformIcons)
                    .then(generateIcons);
            }

            if (hasSplash) {
                promise = Q.when(promise)
                    .then(getPlatformSplashs)
                    .then(generateSplashes)
                    .then(getPlatformDarkSplashs)
                    .then(generateDarkSplashes);
            }

            return Q.when(promise);
        })
        .catch(function (err) {
            if (err) {
                console.log(err);
            }
        }).then(function () {
            console.log('');
        });
}

module.exports = {
    generate: generate
};
