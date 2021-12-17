var configFile = '';
var config = {};
var loadingconfig = false;

function saveConfig(callback) {
  if (!loadingconfig) {
    config.wallpaper = xp.wallpaper.href;
    config.profile = xp.profile;
    config.theme = xp.theme.name;
    xp.filesystem.writeFile(configFile, new Blob([JSON.stringify(config)], {type: 'text/plain'}), (e) => {
      if (e) xp.error(e);
      else if (callback !== undefined) callback()
    });
  }
}

function loadConfig(callback) {
  loadingconfig = true;
  xp.filesystem.readFile(configFile, (text) => {
    try {
      config = JSON.parse(text);
      console.log(config);
      xp.wallpaper.set('https://www.hdwallpapers.in/download/artistic_landscape_minimalist_windows_xp_4k_hd_windows_xp-3840x2160.jpg');
      xp.profile = config.profile;
      xp.theme.set('crystal');
    } catch(e) {
      xp.wallpaper.set('https://www.hdwallpapers.in/download/artistic_landscape_minimalist_windows_xp_4k_hd_windows_xp-3840x2160.jpg');
      loadingconfig = false;
      saveConfig();
    }
    loadingconfig = false;
    if (callback !== undefined) callback();
  });
}