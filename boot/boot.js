$(window).on('xpboot', function() {
  xp.applications.add("w93prg", w93prg);
  xp.applications.add("loadjs", loadJs);
  explorer.fileHandlers.add('txt', (file) => {
    openApp('notepad', ['', file]);
  });
  explorer.fileHandlers.add('js', (file) => {
    execJsPrompt(file);
  });
  explorer.fileHandlers.add('html', (file) => {
    xp.filesystem.toURL(file, (url) => {
      var el = $.parseHTML(`<window title="` + file.replace(/^.*[\\\/]/, '') + `" width="640" height="480">
  <style>
    iframe[seamless]{
      background-color: transparent;
      border: 0px none transparent;
      padding: 0px;
      overflow: hidden;
    }
    .frame-container {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 0px;
      margin: 0px;
    }
  </style>
  <div class="frame-container">
    <iframe seamless="seamless" width="100%" height="100%" id="frame" src="` + url + `"></iframe>
  </div>
</window>`);
      document.body.appendChild(el[0]);
      $(el).updateWindow();
    });
  });
});