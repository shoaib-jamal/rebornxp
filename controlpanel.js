$(window).on('xpboot', function() {
  xp.controlpanel.add('Themes', () => {
    xp.chooser('Themes', 'Choose a theme:', xp.themes, (theme) => {
      xp.theme.set(theme);
    });
  });
});