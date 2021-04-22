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
    <h2 style="font-weight:normal;">Choose a user name and picture</h2>
    <p>
        Your user name and picture represent your user account. The account you create here is a computer<br>
        administrator account.
    </p>
    <br/>
    <p style="margin-left:64px;">
        <table style="font-size:11px;color:#000;">
            <tr><td rowspan="4" style="width:72px;"><img class="userimg" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fuser.bmp?1522560745448"/></td></tr>
            <tr><td>Type a user name (for example, John)</td></tr>
            <tr><td><input type="text" class="username" style="width:180px;"/></td></tr>
            <tr><td>&nbsp;</td></tr>
        </table>
    </p>
    <br/><br/>
    <p style="margin-left:16px;">
        <table style="font-size:11px;color:#000;">
            <tr>
                <td><img class="userimgopt selected" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fuser.bmp?1522560745448"/></td>
                <td><img class="userimgopt" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fusertile2.bmp?1522560745448"/></td>
                <td><img class="userimgopt" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fusertile3.bmp?1522560745448"/></td>
                <td><img class="userimgopt" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fusertile4.bmp?1522560745448"/></td>
                <td><img class="userimgopt" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fusertile5.bmp?1522560745448"/></td>
                <td><img class="userimgopt" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fusertile6.bmp?1522560745448"/></td>
                <td><img class="userimgopt" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fusertile7.bmp?1522560745448"/></td>
                <td><img class="userimgopt" src="https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2Fusertile8.bmp?1522560745448"/></td>
           </tr>
        </table>
    </p>
    <div style="position:absolute;right:8px;bottom:8px;">
        <button disabled class="next">Next</button>
    </div>
</div>
`);

win.el.find('.username').on('keyup', function() {
  console.log($(this).val());
  if ($(this).val() === '') {
    win.el.find('.next').attr('disabled', 'disabled');
  } else {
    win.el.find('.next').removeAttr('disabled');
  }
});

win.el.find('.next').on('click', function() {
    if (win.el.find('.username').val() === '') {
        xp.alert('You need to type a username in order to continue!');
    } else {
        xp.profile.image = win.el.find('.userimgopt.selected').attr('src');
        xp.profile.name = win.el.find('.username').val();
        configFile = `/Documents and Settings/${xp.profile.name}/config.json`;
        xp.wallpaper.href = 'https://cdn.glitch.com/01d2e04f-e49d-4304-aa9e-55b9849b4cce%2FBliss.jpg?1519950052202';
        win.content(`
<div style="margin-left:32px;">
    <h1 style="font-weight:normal;">Please wait while we set up your computer.</h1>
    <h2 style="font-weight:normal;">Your computer might restart several times during this process.</h2>
</div>`);
        setTimeout(() => {
            requiredDirectories = [
                `/Documents and Settings`,
                `/Documents and Settings/${xp.profile.name}`,
                `/Documents and Settings/${xp.profile.name}/My Documents`,
                `/Documents and Settings/${xp.profile.name}/My Documents/My Pictures`,
                `/Documents and Settings/${xp.profile.name}/My Documents/My Videos`,
                `/Documents and Settings/${xp.profile.name}/My Documents/My Music`
            ];
            var i = 0;
            function createDirs() {
                var dirToCreate = requiredDirectories[i];
                if (dirToCreate !== undefined) {
                    xp.filesystem.createDir(dirToCreate, (e) => {
                        i ++;
                        createDirs();
                    });
                } else {
                    saveConfig();
                    setTimeout(() => {
                        window.location.href = window.location.href;
                    }, 2000);
                }
            }
            createDirs();
        }, 2000);
    }
});

win.el.find('.userimgopt').on('click', function() {
    win.el.find('.userimgopt').each(function() {
        $(this).removeClass('selected');
    });
    $(this).addClass('selected');
    win.el.find('.userimg').attr('src', $(this).attr('src'));
});