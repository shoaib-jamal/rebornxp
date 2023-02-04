$(window).on('xpboot', function() {
  xp.controlpanel.add('Themes', () => {
    xp.chooser('Themes', 'Choose a new theme to apply:', xp.themes, (theme) => {
      xp.theme.set(theme);
    });
  });
});
