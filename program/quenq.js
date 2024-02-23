$(window).on('xpboot', () => {
  xp.applications.add('quenq', () => {
    var el = $.parseHTML(`<window width="800" height="500" title="Quenq Messenger">
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
    
<iframe height="100%" seamless="seamless" width="100%" src="https://www.quenq.com/lobby/"></iframe>
  </div> 
    </window>`);
    document.body.appendChild(el[0]);
    $(el).updateWindow();
  });
    xp.startmenu.add('quenq', 'Messenger', 'program/assets/quenq.png');
});
