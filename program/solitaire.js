$(window).on('xpboot', () => {
  xp.applications.add('solitaire', () => {
    var el = $.parseHTML(`<window width="640" height="480" title="Solitaire">
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
    
   
<iframe height="100%" seamless="seamless" width="100%" src="https://98.js.org/programs/js-solitaire/"></iframe>


  </div> 
    </window>`);
    document.body.appendChild(el[0]);
    $(el).updateWindow();
  });
  
    xp.startmenu.add('solitaire', 'Solitaire', 'data:image/png;base64,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');
});
