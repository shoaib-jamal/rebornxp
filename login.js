function logInUser(user) {
  $('<link/>', {rel: 'stylesheet', id: 'theme'}).appendTo('head');
  configFile = `/Documents and Settings/${user}/config.json`;
  loadConfig(() => {
    $('windows').initWindows();
    xp.startmenu.update();
    setTimeout(() => {
      xp.filesystem.listDir('/WINDOWS/startup', (name) => {
        if (name.charAt(name.length - 1) !== '/') {
          explorer.fileHandlers.open(xp.filesystem.addPaths('/WINDOWS/startup', name));
        }
      });
    }, 1500);
  });
}

xp.filesystem.fs.root.getDirectory('/Documents and Settings', {create: false}, function(dirEntry) {
  var dirReader = dirEntry.createReader();
  var entries = [];
  
  function readEntries() {
    dirReader.readEntries (function(results) {
      if (!results.length) {
        if (entries.length === 0) {
          $.getScript('setup.js');
        } else if (entries.length === 1) {
          logInUser(entries[0].name.split('/')[0]);
        } else {
          var win = new Window({
              width: 594,
              height: 434,
              title: 'Welcome to RebornXP',
              canClose: false,
              canResize: false,
              canMinimize: false,
              center: true
          });

          win.content(`
          <style>
          .userimg {
              width: 64px;
              height: 64px;
          }
          .userimgopt {
              border: 1px solid transparent;
              width: 48px;
              height: 48px;
              padding: 4px;
              border-radius: 5px;
          }
          .userimgopt.selected {
              border: 1px solid #68b3db;
              background-color: #e1f2fb;
          }
          </style>
          <div style="margin-left:32px;">
              <h1 style="font-weight:normal;">Welcome to RebornXP!</h1>
              <h2 style="font-weight:normal;">Choose a user account to log in</h2>
              <br/><br/>
              <center style="width:calc(100% - 32px);overflow-x:auto;">
                  <table style="font-size:11px;color:#000;">
                      <tr class="accounts">
                      </tr>
                  </table>
              </center>
              <div style="position:absolute;right:8px;bottom:8px;">
                  <button disabled class="next">Log in</button>
              </div>
          </div>
          `);

          xp.filesystem.listDir('/Documents and Settings', (acct) => {
            xp.filesystem.readFile(`/Documents and Settings/${acct}/config.json`, (file) => {
              var config = JSON.parse(file);
              console.log(config);
              var el = $.parseHTML(`<td>
  <img class="userimgopt" account="${acct}" src="${config.profile.image}"/>
  <div style="text-align:center">${acct}</div>
</td>`);
              $(el).find('img').on('click', function() {
                win.el.find('.userimgopt').each(function() {
                    $(this).removeClass('selected');
                });
                $(this).addClass('selected');
                win.el.find('.next').removeAttr('disabled');
              });
              win.el.find('.accounts').append(el);
            });
          });

          win.el.find('.next').on('click', function() {
            var acct = win.el.find('.userimgopt.selected').attr('account');
            win.content('<div style="margin-left:32px;"><h1 style="font-weight:normal;">Welcome</h1></div>');
            setTimeout(() => {
              logInUser(acct);
              win.close();
              xp.audio.playURL('https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2FWindows%20XP%20Logon%20Sound.wav?1522620571979');
            }, 1000);
          });
        }
      } else {
        entries = entries.concat(Array.from(results));
        readEntries();
      }
    }, console.error);
  };

  readEntries();
}, console.error);