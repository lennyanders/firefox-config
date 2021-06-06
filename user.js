//
// --------------------------------------
// configs for aesthetic/behavior reasons
// --------------------------------------
//

// enable userChrome.css
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);

// disable fade to black when going fullscreen
user_pref('full-screen-api.transition-duration.enter', '0 0');
user_pref('full-screen-api.transition-duration.leave', '0 0');

// display all parts of the url in the location bar
user_pref('browser.urlbar.trimURLs', false);

// disable default browser check
user_pref('browser.shell.checkDefaultBrowser', false);

// disable about:config warning
user_pref('browser.aboutConfig.showWarning', false);

// disable about:addons Recommendations pane (also uses Google Analytics)
user_pref('extensions.getAddons.showPane', false);
user_pref('browser.discovery.enabled', false);

// disable recommendations in about:addons Extensions and Themes panes
user_pref('extensions.htmlaboutaddons.recommendations.enabled', false);

// set preferred language for displaying web pages
user_pref('intl.accept_languages', 'en-US, en');

// disable Pocket
user_pref('extensions.pocket.enabled', false);

// disable Firefox Accounts & Sync
user_pref('identity.fxaccounts.enabled', false);

//
// --------------------------------------
// configs to change the browser behavior
// --------------------------------------
//

// enforce user interaction for security by always asking where to download
user_pref('browser.download.useDownloadDir', false);

// disable Form Autofill
user_pref('extensions.formautofill.addresses.enabled', false);
user_pref('extensions.formautofill.available', 'off');
user_pref('extensions.formautofill.creditCards.available', false);
user_pref('extensions.formautofill.creditCards.enabled', false);
user_pref('extensions.formautofill.heuristics.enabled', false);
user_pref('signon.autofillForms', false);

// disable search and form history
user_pref('browser.formfill.enable', false);

// disable saving passwords
user_pref('signon.rememberSignons', false);

// disable formless login capture for Password Manager
user_pref('signon.formlessCapture.enabled', false);

// disable Windows jumplist
user_pref('browser.taskbar.lists.enabled', false);
user_pref('browser.taskbar.lists.frequent.enabled', false);
user_pref('browser.taskbar.lists.tasks.enabled', false);

// enable Container Tabs; gets also automatically enabled by Tree Style Tab extension
user_pref('privacy.userContext.ui.enabled', true);
user_pref('privacy.userContext.enabled', true);

// prevent scripts from moving and resizing open windows
user_pref('dom.disable_window_move_resize', true);

// disable CFR
user_pref('browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons', false);
user_pref('browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features', false);

//
// ------------------------------------
// configs for privacy/security reasons
// ------------------------------------
//

// enable the DNT (Do Not Track) HTTP header (DNT is enforced with Enhanced Tracking Protection regardless of this pref)
user_pref('privacy.donottrackheader.enabled', true);

// disable telemetry
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.server', 'data:,');
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('toolkit.telemetry.newProfilePing.enabled', false);
user_pref('toolkit.telemetry.shutdownPingSender.enabled', false);
user_pref('toolkit.telemetry.updatePing.enabled', false);
user_pref('toolkit.telemetry.bhrPing.enabled', false);
user_pref('toolkit.telemetry.firstShutdownPing.enabled', false);
user_pref('toolkit.telemetry.coverage.opt-out', true);
user_pref('toolkit.coverage.opt-out', true);
user_pref('toolkit.coverage.endpoint.base', '');

// disable Activity Stream telemetry
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
user_pref('browser.newtabpage.activity-stream.telemetry', false);

// disable PingCentre telemetry (used in several System Add-ons)
user_pref('browser.ping-centre.telemetry', false);

// disable Activity Stream Top Stories, Pocket-based and/or sponsored content
user_pref('browser.newtabpage.activity-stream.feeds.section.topstories', false);
user_pref('browser.newtabpage.activity-stream.section.highlights.includePocket', false);
user_pref('browser.newtabpage.activity-stream.showSponsored', false);
user_pref('browser.newtabpage.activity-stream.feeds.discoverystreamfeed', false);

// disable Normandy/Shield (Shield is an telemetry system)
user_pref('app.normandy.enabled', false);
user_pref('app.normandy.api_url', '');

// disable Health Reports
user_pref('datareporting.healthreport.uploadEnabled', false);

// disable new data submission, master kill switch; If disabled, no policy is shown or upload takes place, ever
user_pref('datareporting.policy.dataSubmissionEnabled', false);

// disable Crash Reports
user_pref('breakpad.reportURL', '');
user_pref('browser.tabs.crashReporting.sendReport', false);

// disable Studies
user_pref('app.shield.optoutstudies.enabled', false);

// clear default topsites
user_pref('browser.newtabpage.activity-stream.default.sites', '');

// disable using the OS's geolocation service
user_pref('geo.provider.ms-windows-location', false); // Windows
user_pref('geo.provider.use_corelocation', false); // Mac
user_pref('geo.provider.use_gpsd', false); // Linux

// use Mozilla geolocation service instead of Google when geolocation is enabled
user_pref(
  'geo.provider.network.url',
  'https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%'
);

// disable region updates
user_pref('browser.region.update.enabled', false);
user_pref('browser.region.network.url', '');

// disable search engine updates
user_pref('browser.search.update', false);

// disable WebRTC (Web Real-Time Communication)
user_pref('media.peerconnection.enabled', false);

// limit WebRTC IP leaks if using WebRTC
user_pref('media.peerconnection.ice.default_address_only', true);
user_pref('media.peerconnection.ice.no_host', true);
user_pref('media.peerconnection.ice.proxy_only_if_behind_proxy', true);

// enable First Party Isolation (May break cross-domain logins and site functionality until perfected)
user_pref('privacy.firstparty.isolate', true);

// enable Enhanced Tracking Protection (ETP) in all windows
user_pref('privacy.trackingprotection.enabled', true);

// disable location bar making speculative connections
user_pref('browser.urlbar.speculativeConnect.enabled', false);

// disable location bar leaking single words to a DNS provider
user_pref('browser.urlbar.dnsResolveSingleWordsAfterSearch', 0);

// disable sending additional analytics to web servers
user_pref('beacon.enabled', false);

// enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
user_pref('network.IDN_show_punycode', true);

// disable DNS prefetching
user_pref('network.dns.disablePrefetch', true);

// disable predictor / prefetching
user_pref('network.predictor.enabled', false);

// disable link-hover opening connection to linked server
user_pref('network.http.speculative-parallel-limit', 0);

// try's to prevent browser fingerprinting but also disables dark/light mode detection for websites
// user_pref('privacy.resistFingerprinting', true)
