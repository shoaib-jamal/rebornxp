$(window).on('xpboot', () => {
  xp.applications.add('winhelp', () => {
    var el = $.parseHTML(`<window width="640" height="520" title="Help">
      <style>
        .docs_container {
          overflow: scroll;
          padding-left: 4px;
          padding-right: 4px;
          height: calc(100% - 4px);
        }
      </style>
      <div class="docs_container">
        <h1>
          RebornXP
        </h1>
        <p>RebornXP is an effort to bring back the late 2000's personal computing experience right to your desktop.</p>
        <p>I always remembered the nostalgic feeling of WindowsXP which is now discontinued and unfortunately gone from everyone's heart.</p>
        <p>This is just a hobby and Open Source Project, and there are not many people to support its development, so it lacks some good features.</p>
        <p>RebornXP is open source, and I would love to accept forks and pull requests on <a href="https://github.com/shoaib-jamal/reborn-xp">GitHub</a></p>
        <p>You are free to use RebornXP, or parts of RebornXP in your projects.</p>
        <img src="xpthrives.jpg" width="50%" height="50%">
        <p><b>Disclamier:<br>The Windows XP name, artwork, trademark are surely property of Microsoft. This project is provided for educational purposes only. It is not affiliated with and has not been approved by Microsoft.</p></b>
      </div>
    </window>`);
    document.body.appendChild(el[0]);
    $(el).updateWindow();
  });
});
