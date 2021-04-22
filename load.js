var scripts = [
  'core.js',
  'window-api.js',
  'contextmenus.js',
  'filesystem.js',
  'xp.js',
  'jquery.terminal-2.0.0.min.js',
  'unix_formatting.js',
  'terminal.js',
  'script.js',
  'explorer.js',
  'help.js',
  'browser.js',
  'notepad.js',
  'imageviewer.js',
  'mediaplayer.js',
  'config.js',
  'controlpanel.js',
  'uac.js',
  'audio.js',
  'lambda.js',
  '//xp-js-appstore.glitch.me/appstore.js',
  'boot.js'
];
var stylesheets = [
  'fonts.css',
  'xp.css',
  'icons.css',
  'widgets.css',
  'window.css',
  'contextmenus.css',
  'cursors.css',
  'desktop.css',
  'startmenu.css',
  'explorer.css',
  'jquery.terminal-2.0.0.min.css'
];
var requiredDirectories = [];

$(function() {
  $('windows').html(`
<div class="_ui_boot">
  <div class="_ui_boot_copyright"></div>
  <div class="_ui_boot_companylogo"></div>
  <center class="_ui_boot_logo">
    <div class="_ui_boot_winlogo"></div>
    <div class="_ui_boot_progress"></div>
    <!--<div style="bottom:0;position:absolute;width:100%;" id="loadingstatus"></div>-->
  </center>
</div>`);
  console.log('Loading scripts and stylesheets...');
  $('<link/>', {rel: 'stylesheet', href: 'boot.css'}).appendTo('head');
  var scriptsindex = 0;
  var stylesindex = 0;
  
  function loadStylesheets() {
    $.ajax({
      url: stylesheets[stylesindex],
      dataType: "script",
      success: function(data){
        $("head").append("<style>" + data + "</style>");
        stylesindex ++;
        if (stylesindex < stylesheets.length) {
          loadStylesheets();
        } else {
          loadScripts();
        }
      }
    });
  }
  
  function loadScripts() {
    $.ajax({
      url: scripts[scriptsindex],
      dataType: "script",
      success: function(data){
        scriptsindex ++;
        if (scriptsindex < scripts.length) {
          loadScripts();
        } else {
          console.log('Finished loading');
          console.log('Checking for necessary directories');
          
          function checkDir(path, callback) {
            var times = 0;
            xp.filesystem.listDir(path, (e) => {
              if (times === 0)
                callback(typeof e === 'string');
              times ++;
            });
          }
          
          var i = 0;
          function checkNextDir(t) {
            var dirToCreate = requiredDirectories[i];
            if (dirToCreate !== undefined) {
              xp.filesystem.createDir(dirToCreate, (e) => {
                i ++;
                checkNextDir();
              });
            } else {
              xp.audio.init();
              var event = new Event('xpboot');
              window.dispatchEvent(event);
              console.log('Dispatched boot event');
              $('windows').html('<div class="_ui_wallpaper fullscreen"><img class="_ui_wallpaper_image" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fvistalogin.png?1522888496458"/></div>');
              $.getScript('login.js');
              xp.audio.playURL('https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2FWindows%20XP%20Startup.wav?1522620562681');
            }
          }
          
          xp.filesystem.create(512*1024*1024, () => {
            xp.filesystem.fs.root.getDirectory('/', {create: false}, function(dirEntry) {
              var dirReader = dirEntry.createReader();
              var entries = [];

              function readEntries() {
                dirReader.readEntries (function(results) {
                  if (results.length === 0) {
                    $('._ui_boot').remove();
                    $('windows').html('<div class="_ui_wallpaper fullscreen"><img class="_ui_wallpaper_image" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fvistalogin.png?1522888496458"/></div>');
                    $.getScript('setup.js');
                  } else {
                    xp.filesystem.createDir('/WINDOWS', (e) => {
                      requiredDirectories = [
                        '/WINDOWS',
                        '/WINDOWS/system32',
                        '/WINDOWS/startup',
                        '/Program Files',
                        '/Documents and Settings'
                      ];
                      checkNextDir();
                    });
                  }
                }, console.error);
              };

              readEntries();
            }, console.error);
          });
        }
      }
    });
  }
  
  loadStylesheets();
});