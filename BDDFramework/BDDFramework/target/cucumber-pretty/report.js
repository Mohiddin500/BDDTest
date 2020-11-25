$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Fod.feature");
formatter.feature({
  "line": 1,
  "name": "Fod feature",
  "description": "",
  "id": "fod-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 139381000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "serp page display",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user verify title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user select the hotel",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify hotel information section display",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 21992118600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 4237916800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6424523900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9857693400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 13233801700,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 22509400,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_verify_title()"
});
formatter.result({
  "duration": 10445300,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_select_the_hotel()"
});
formatter.result({
  "duration": 1348680000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ch3 class\u003d\"cursor-p\"\u003e...\u003c/h3\u003e is not clickable at point (1072, 492). Other element would receive the click: \u003cdiv class\u003d\"asa bgnd-white pstn-fxd show-on-desktop\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-NB5G9QP\u0027, ip: \u0027192.168.29.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49753}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: aa2d8c1e056f25daec86a9c95cb4c1c4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.utilities.CommonUtilityManager.clickOnFirstListElement(CommonUtilityManager.java:102)\r\n\tat pageobjects.SerpPage.selectHotel(SerpPage.java:72)\r\n\tat stepdefinitions.SerpSteps.user_select_the_hotel(SerpSteps.java:58)\r\n\tat ✽.When user select the hotel(Fod.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FodSteps.verify_hotel_information_section_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Hotel Information display scenario",
  "description": "",
  "id": "fod-feature;hotel-information-display-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user verify title",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user verify Url",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify hotel information section display",
  "keyword": "Then "
});
formatter.match({
  "location": "SerpSteps.user_verify_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SerpSteps.user_verify_Url()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FodSteps.verify_hotel_information_section_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1660029300,
  "status": "passed"
});
formatter.before({
  "duration": 618100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "serp page display",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user verify title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user select the hotel",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify hotel information section display",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 10819907300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 3165547700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6383927800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9762701800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 8792205000,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 38672300,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_verify_title()"
});
formatter.result({
  "duration": 11279100,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_select_the_hotel()"
});
formatter.result({
  "duration": 1197186400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ch3 class\u003d\"cursor-p\"\u003e...\u003c/h3\u003e is not clickable at point (1072, 492). Other element would receive the click: \u003cdiv class\u003d\"asa bgnd-white pstn-fxd show-on-desktop\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-NB5G9QP\u0027, ip: \u0027192.168.29.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49855}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c5924c96ec96c4353494b225b9753933\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.utilities.CommonUtilityManager.clickOnFirstListElement(CommonUtilityManager.java:102)\r\n\tat pageobjects.SerpPage.selectHotel(SerpPage.java:72)\r\n\tat stepdefinitions.SerpSteps.user_select_the_hotel(SerpSteps.java:58)\r\n\tat ✽.When user select the hotel(Fod.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FodSteps.verify_hotel_information_section_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "# And close browser"
    }
  ],
  "line": 22,
  "name": "NearBy Hotel display scenario",
  "description": "",
  "id": "fod-feature;nearby-hotel-display-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user verify title",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user verify Url",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "verify nearby hotel section display",
  "keyword": "Then "
});
formatter.match({
  "location": "SerpSteps.user_verify_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SerpSteps.user_verify_Url()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FodSteps.verify_nearby_hotel_section_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1312165400,
  "status": "passed"
});
formatter.before({
  "duration": 807800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "serp page display",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user verify title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user select the hotel",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify hotel information section display",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 12237404100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 3031645300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6360457200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9779987000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 10732164500,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 28739400,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_verify_title()"
});
formatter.result({
  "duration": 9699300,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_select_the_hotel()"
});
formatter.result({
  "duration": 1133751300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ch3 class\u003d\"cursor-p\"\u003e...\u003c/h3\u003e is not clickable at point (1072, 492). Other element would receive the click: \u003cdiv class\u003d\"asa bgnd-white pstn-fxd show-on-desktop\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-NB5G9QP\u0027, ip: \u0027192.168.29.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49945}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b1db2f744ba706a092eec1390c25dbe9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.utilities.CommonUtilityManager.clickOnFirstListElement(CommonUtilityManager.java:102)\r\n\tat pageobjects.SerpPage.selectHotel(SerpPage.java:72)\r\n\tat stepdefinitions.SerpSteps.user_select_the_hotel(SerpSteps.java:58)\r\n\tat ✽.When user select the hotel(Fod.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FodSteps.verify_hotel_information_section_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#  And close browser"
    }
  ],
  "line": 29,
  "name": "Carona text display scenario",
  "description": "",
  "id": "fod-feature;carona-text-display-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user verify title",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user verify Url",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "verify Carona text section display",
  "keyword": "Then "
});
formatter.match({
  "location": "SerpSteps.user_verify_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SerpSteps.user_verify_Url()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FodSteps.verify_Carona_text_section_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1356322100,
  "status": "passed"
});
formatter.uri("Home.feature");
formatter.feature({
  "line": 1,
  "name": "Home feature",
  "description": "",
  "id": "home-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1473100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login scenario test",
  "description": "",
  "id": "home-feature;login-scenario-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on user icon and signin button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify login popup",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 10213273100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.user_click_on_user_icon_and_signin_button()"
});
formatter.result({
  "duration": 413899600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.user_enter_username_and_password()"
});
formatter.result({
  "duration": 1512974800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 3119379000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.verify_login_popup()"
});
formatter.result({
  "duration": 12547390600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1207165400,
  "status": "passed"
});
formatter.before({
  "duration": 347300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "# And close browser"
    }
  ],
  "line": 13,
  "name": "Family section display scenario",
  "description": "",
  "id": "home-feature;family-section-display-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "verify title",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "verify family section display",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 10766962000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.verify_title()"
});
formatter.result({
  "duration": 9691900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.verify_family_section_display()"
});
formatter.result({
  "duration": 242045500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 2009291400,
  "status": "passed"
});
formatter.before({
  "duration": 417100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "# And close browser"
    }
  ],
  "line": 20,
  "name": "Search scenario test",
  "description": "",
  "id": "home-feature;search-scenario-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 11440003800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 3206190100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6361669100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9745347500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 9382556500,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 29761801,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1347697200,
  "status": "passed"
});
formatter.uri("Serp.feature");
formatter.feature({
  "line": 1,
  "name": "serp feature",
  "description": "",
  "id": "serp-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 617001,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "serp page display",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 11140868800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 3016584000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6376814799,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9711644200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 10472891500,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 37894401,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search results section display scenario",
  "description": "",
  "id": "serp-feature;search-results-section-display-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user verify title",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user verify Url",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify search results section display",
  "keyword": "Then "
});
formatter.match({
  "location": "SerpSteps.user_verify_title()"
});
formatter.result({
  "duration": 8968600,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_verify_Url()"
});
formatter.result({
  "duration": 6385300,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_section_display()"
});
formatter.result({
  "duration": 93097200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1655069400,
  "status": "passed"
});
formatter.before({
  "duration": 409000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "serp page display",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 10919000401,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 3136641900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6413612600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9825455100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 8882465000,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 39607800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "#   And close browser"
    }
  ],
  "line": 19,
  "name": "Sort by price scenario",
  "description": "",
  "id": "serp-feature;sort-by-price-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user verify sortbyprice tab display",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user click on sortbyprice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "SerpSteps.user_verify_sortbyprice_tab_display()"
});
formatter.result({
  "duration": 137666400,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.user_click_on_sortbyprice_tab()"
});
formatter.result({
  "duration": 374241400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1288866100,
  "status": "passed"
});
formatter.before({
  "duration": 563800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "serp page display",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 10030297900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 3220059700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6422597300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9697335400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 8341439100,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 41471600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#  And close browser"
    }
  ],
  "line": 25,
  "name": "Filter section display scenario",
  "description": "",
  "id": "serp-feature;filter-section-display-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user verify filters section display",
  "keyword": "Then "
});
formatter.match({
  "location": "SerpSteps.user_verify_filters_section_display()"
});
formatter.result({
  "duration": 151764400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1297061200,
  "status": "passed"
});
formatter.before({
  "duration": 367200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "serp page display",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on TT Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter destination and departfrom",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select nights and guests",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.user_is_on_TT_Homepage()"
});
formatter.result({
  "duration": 11527528300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.enter_destination_and_departfrom()"
});
formatter.result({
  "duration": 3169366800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_date()"
});
formatter.result({
  "duration": 6377194600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.select_nights_and_guests()"
});
formatter.result({
  "duration": 9699827300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.click_on_search_button()"
});
formatter.result({
  "duration": 9106663100,
  "status": "passed"
});
formatter.match({
  "location": "SerpSteps.verify_search_results_are_displayed()"
});
formatter.result({
  "duration": 26188700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#  And close browser"
    }
  ],
  "line": 31,
  "name": "Select a hotel scenario",
  "description": "",
  "id": "serp-feature;select-a-hotel-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user select the hotel",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "verify hotel information section display",
  "keyword": "Then "
});
formatter.match({
  "location": "SerpSteps.user_select_the_hotel()"
});
formatter.result({
  "duration": 1159558100,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ch3 class\u003d\"cursor-p\"\u003e...\u003c/h3\u003e is not clickable at point (1072, 492). Other element would receive the click: \u003cdiv class\u003d\"asa bgnd-white pstn-fxd show-on-desktop\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-NB5G9QP\u0027, ip: \u0027192.168.29.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50578}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0f246f375171bfe80d623ef4d6452c02\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.utilities.CommonUtilityManager.clickOnFirstListElement(CommonUtilityManager.java:102)\r\n\tat pageobjects.SerpPage.selectHotel(SerpPage.java:72)\r\n\tat stepdefinitions.SerpSteps.user_select_the_hotel(SerpSteps.java:58)\r\n\tat ✽.When user select the hotel(Serp.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FodSteps.verify_hotel_information_section_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1376615500,
  "status": "passed"
});
});