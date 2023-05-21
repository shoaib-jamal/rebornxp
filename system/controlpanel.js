// Add theme chooser to Control Panel
xp.controlpanel.add('Themes', () => {
  xp.chooser('Themes', 'Choose a new theme to apply:', xp.themes, (theme) => {
    xp.theme.set(theme);
  });
});

// Add theme chooser as an application
$(window).on('xpboot', function() {
  xp.applications.add('themes', () => {
    var win = new Window({
      width: 400,
      height: 200,
      title: 'Change Theme',
      canResize: false,
    });

    win.content(`
      <div class="content">
        <h1>Theme Chooser</h1>
        <p>Choose a new theme to apply:</p>
        <select id="themeSelect">
          ${xp.themes.map(theme => `<option value="${theme}">${theme}</option>`).join('')}
        </select>
        <br/><br/>
        <button id="applyThemeBtn">Apply Theme</button>
      </div>
    `);

    win.el.find('#applyThemeBtn').on('click', function() {
      const selectedTheme = win.el.find('#themeSelect').val();
      xp.theme.set(selectedTheme);
      win.close();
    });

    // Calculate window position to center it on the screen
    const screenWidth = $(window).width();
    const screenHeight = $(window).height();
    const windowWidth = win.el.outerWidth();
    const windowHeight = win.el.outerHeight();
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    win.el.css({
      position: 'absolute',
      left: left + 'px',
      top: top + 'px',
    });

    win.el.find('.content').css({
      padding: '20px', // Adjust the padding value as needed
    });

    // Don't need to call show() or open() here

  });
});
