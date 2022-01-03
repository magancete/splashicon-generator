[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UPBTHKNBECBQL)

# splashicon-generator

Automatic icon and splash screen resizing for any **Cordova** based applications including **PhoneGap**. It uses an ```icon.png``` and a ```splash.png``` to automatically resize and copy it for all the platforms your project supports (currently works with **iOS**, **Android** and **Windows Phone 8**).

Consider using the base icon and splash images in the `model` folder, so that images are not cropped and resized incorrectly.

### Installation

     $ npm install https://github.com/magancete/splashicon-generator -g

---

### Usage

Create an ```icon.png``` and a ```splash.png``` file in a 'model' folder under the root folder of your cordova project and run:

     $ splashicon-generator

You can change the default folder for the base images using the argument `imagespath`. Consider the following example:

     $ splashicon-generator --imagespath="project/assets"

This will look for an ```icon.png``` and a ```splash.png``` in the **project/assets** folder under the root folder of your cordova project.

### Model

Use the Photoshop templates provided in the model folder to generate the PNG files.

### Icon

Should be a 1024x1024px with a 5% margin.

#### Splash

Your splash must be 2732x2732px as it now is the largest resolution (used by iPad Pro 12.9"), and the artwork should fit a center square (1200x1200px).
This Photoshop splash screen template provides the recommended size and guidelines of the artwork’s safe zone.

#### Platform specific assets

You can provide a platform-specific icon by creating a subfolder with the name of the platform.

- model
    - icon.png      // Default icon used for all platforms if not overriden.
    - splash.png    // Default splash used for all platforms if not overriden.
    - android
        - icon.png  // Override the default icon for the 'android' platform. So you can use an icon with alpha, as apple doens't allow.

---

### Requirements

#### ImageMagick

Install on a Mac:

     $ brew install imagemagick

On linux:

    $ sudo apt-get install imagemagick

On windows, see http://www.imagemagick.org/script/binary-releases.php#windows. Also, on the version 7.0.0+ you will have to check the 'Install legacy utilities' option (which is not enabled by default).


---

### Configuring icons for Cordova project

Include in your ```config.xml``` file:

```xml
<platform name="android">
    <icon density="ldpi" src="res/icons/android/icon-36-ldpi.png" />
    <icon density="mdpi" src="res/icons/android/icon-48-mdpi.png" />
    <icon density="hdpi" src="res/icons/android/icon-72-hdpi.png" />
    <icon density="xhdpi" src="res/icons/android/icon-96-xhdpi.png" />
    <icon density="xxhdpi" src="res/icons/android/icon-144-xxhdpi.png" />
    <icon density="xxxhdpi" src="res/icons/android/icon-192-xxxhdpi.png" />
</platform>
<platform name="ios">
    <icon src="res/icons/ios/icon-20.png" height="20" width="20"/>
    <icon src="res/icons/ios/icon-20@3x.png" height="60" width="60"/>
    <icon src="res/icons/ios/icon-24@2x.png" height="48" width="48"/>
    <icon src="res/icons/ios/icon-27.5@2x.png" height="55" width="55"/>
    <icon src="res/icons/ios/icon-29.png" height="29" width="29"/>
    <icon src="res/icons/ios/icon-29@2x.png" height="58" width="58"/>
    <icon src="res/icons/ios/icon-29@3x.png" height="87" width="87"/>
    <icon src="res/icons/ios/icon-33@2x.png" height="66" width="66"/>
    <icon src="res/icons/ios/icon-40.png" height="40" width="40"/>
    <icon src="res/icons/ios/icon-40@2x.png" height="80" width="80"/>
    <icon src="res/icons/ios/icon-46@2x.png" height="92" width="92"/>
    <icon src="res/icons/ios/icon-50.png" height="50" width="50"/>
    <icon src="res/icons/ios/icon-50@2x.png" height="100" width="100"/>
    <icon src="res/icons/ios/icon-51@2x.png" height="102" width="102"/>
    <icon src="res/icons/ios/icon-57.png" height="57" width="57"/>
    <icon src="res/icons/ios/icon-57@2x.png" height="114" width="114"/>
    <icon src="res/icons/ios/icon-60.png" height="60" width="60"/>
    <icon src="res/icons/ios/icon-60@2x.png" height="120" width="120"/>
    <icon src="res/icons/ios/icon-60@3x.png" height="180" width="180"/>
    <icon src="res/icons/ios/icon-72.png" height="72" width="72"/>
    <icon src="res/icons/ios/icon-72@2x.png" height="144" width="144"/>
    <icon src="res/icons/ios/icon-76.png" height="76" width="76"/>
    <icon src="res/icons/ios/icon-76@2x.png" height="152" width="152"/>
    <icon src="res/icons/ios/icon-83.5@2x.png" height="167" width="167"/>
    <icon src="res/icons/ios/icon-86@2x.png" height="172" width="172"/>
    <icon src="res/icons/ios/icon-98@2x.png" height="196" width="196"/>
    <icon src="res/icons/ios/icon-108@2x.png" height="216" width="216"/>
    <icon src="res/icons/ios/icon-117@2x.png" height="234" width="234"/>
    <icon src="res/icons/ios/icon-167.png" height="167" width="167"/>
    <icon src="res/icons/ios/icon-1024.png" height="1024" width="1024"/>
</platform>
<platform name="windows">
    <icon height="150" src="res/icons/windows/Square150x150Logo.scale-100.png" width="150" />
    <icon height="360" src="res/icons/windows/Square150x150Logo.scale-240.png" width="360" />
    <icon height="30" src="res/icons/windows/Square30x30Logo.scale-100.png" width="30" />
    <icon height="" src="res/icons/windows/Square310x310Logo.scale-100.png" width="" />
    <icon height="106" src="res/icons/windows/Square44x44Logo.scale-240.png" width="106" />
    <icon height="70" src="res/icons/windows/Square70x70Logo.scale-100.png" width="70" />
    <icon height="170" src="res/icons/windows/Square71x71Logo.scale-240.png" width="170" />
    <icon height="50" src="res/icons/windows/StoreLogo.scale-100.png" width="50" />
    <icon height="120" src="res/icons/windows/StoreLogo.scale-240.png" width="120" />
    <icon height="150" src="res/icons/windows/Wide310x150Logo.scale-100.png" width="310" />
    <icon height="360" src="res/icons/windows/Wide310x150Logo.scale-240.png" width="744" />
</platform>
<platform name="wp8">
    <icon height="99" src="res/icons/wp8/ApplicationIcon.png" width="99" />
    <icon height="159" src="res/icons/wp8/Background.png" width="159" />
</platform>
```

---

### Configuring splash for Cordova project

Include in your ```config.xml``` file:

```xml
<preference name="SplashScreen" value="screen"/>
<platform name="android">
    <splash density="land-hdpi" src="res/screens/android/screen-hdpi-landscape.png" />
    <splash density="land-ldpi" src="res/screens/android/screen-ldpi-landscape.png" />
    <splash density="land-mdpi" src="res/screens/android/screen-mdpi-landscape.png" />
    <splash density="land-xhdpi" src="res/screens/android/screen-xhdpi-landscape.png" />
    <splash density="land-xxhdpi" src="res/screens/android/screen-xxhdpi-landscape.png" />
    <splash density="land-xxxhdpi" src="res/screens/android/screen-xxxhdpi-landscape.png" />
    <splash density="port-hdpi" src="res/screens/android/screen-hdpi-portrait.png" />
    <splash density="port-ldpi" src="res/screens/android/screen-ldpi-portrait.png" />
    <splash density="port-mdpi" src="res/screens/android/screen-mdpi-portrait.png" />
    <splash density="port-xhdpi" src="res/screens/android/screen-xhdpi-portrait.png" />
    <splash density="port-xxhdpi" src="res/screens/android/screen-xxhdpi-portrait.png" />
    <splash density="port-xxxhdpi" src="res/screens/android/screen-xxxhdpi-portrait.png" />
</platform>
<platform name="ios">
    <splash src="res/screens/ios/Default@2x~universal~anyany.png" />
    <splash src="res/screens/ios/Default@2x~universal~comany.png" />
    <splash src="res/screens/ios/Default@2x~universal~comcom.png" />
    <splash src="res/screens/ios/Default@3x~universal~anyany.png" />
    <splash src="res/screens/ios/Default@3x~universal~anycom.png" />
    <splash src="res/screens/ios/Default@3x~universal~comany.png" />
</platform>
<platform name="windows">
    <splash width="620" height="300" src="res/screens/windows/SplashScreen.scale-100.png" />
    <splash width="1152" height="1920" src="res/screens/windows/SplashScreen.scale-240.png" />
    <splash width="1152" height="1920" src="res/screens/windows/SplashScreenPhone.scale-240.png" />
</platform>
<platform name="wp8">
    <splash width="768" height="1280" src="res/screens/wp8/SplashScreenImage.jpg" />
    <splash width="720" height="1280" src="res/screens/wp8/SplashScreenImage.screen-720p.jpg" />
    <splash width="480" height="800" src="res/screens/wp8/SplashScreenImage.screen-WVGA.jpg" />
    <splash width="768" height="1280" src="res/screens/wp8/SplashScreenImage.screen-WXGA.jpg" />
</platform>
```

**Notes**:

With new versions of the Cordova you may want to use the config `<preference name="SplashMaintainAspectRatio" value="true" />` to avoid distorted images on android.
More info on [cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen).

---

### Configuring splash and icon for PhoneGap project

You can use the same configuration of an cordova project just adjusting the xml elements as their documentation says:

[http://docs.phonegap.com/phonegap-build/configuring/icons-and-splash/](http://docs.phonegap.com/phonegap-build/configuring/icons-and-splash/)

---

### Generate custom assets

You can use this package under node to specify custom assets. I personally use this for adding a custom Icon for Push on android. That needs to be an icon with transparency.
I use it with gulp like this:

```js
var splashiconGenerator = require("splashicon-generator");

gulp.task('generate-splashicon', function(done) {
    // Generate all the default assets
    splashiconGenerator.generate()
    .then(function() {

        // Configure the custom assets with their sizes
        var options = {
            ICON_FILE: path.join('model', 'pushicon.png'),
            SPLASH_FILE: '', // ignore plash generation
            ICON_PLATFORMS: [{
                name: 'android-push-icon',
                iconsPath: 'res/icons/android/',
                isAdded: true,
                icons: [
                    { name: 'push-icon-36-ldpi.png', size: 36, density: 'ldpi' },
                    { name: 'push-icon-48-mdpi.png', size: 48, density: 'mdpi' },
                    { name: 'push-icon-72-hdpi.png', size: 72, density: 'hdpi' },
                    { name: 'push-icon-96-xhdpi.png', size: 96, density: 'xhdpi' },
                    { name: 'push-icon-144-xxhdpi.png', size: 144, density: 'xxhdpi' },
                    { name: 'push-icon-192-xxxhdpi.png', size: 192, density: 'xxxhdpi' }
                ]
            }]
        };
        // Generate only the custom assets specified in the `options` parameter
        splashiconGenerator.generate(options).then(function() {
            done();
        });
    });
});
```

Then just add it to the `config.xml`:

```xml
<!-- pushicon -->
<platform name="android">
    <icon density="ldpi" src="res/icons/android/push-icon-36-ldpi.png" />
    <icon density="mdpi" src="res/icons/android/push-icon-48-mdpi.png" />
    <icon density="hdpi" src="res/icons/android/push-icon-72-hdpi.png" />
    <icon density="xhdpi" src="res/icons/android/push-icon-96-xhdpi.png" />
    <icon density="xxhdpi" src="res/icons/android/push-icon-144-xxhdpi.png" />
    <icon density="xxxhdpi" src="res/icons/android/push-icon-192-xxxhdpi.png" />
</platform>
```

---

### References

- [iOS Human Interface Guidelines - Graphics](https://developer.apple.com/ios/human-interface-guidelines/graphics/app-icon/)

---

### License

MIT
