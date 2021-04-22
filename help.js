$(window).on('xpboot', () => {
  xp.applications.add('winhelp', () => {
    var el = $.parseHTML(`<window width="640" height="360" title="Help & Support">
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
          Introduction
        </h1>
        <p>RebornXP is an effort to bring back the late 2000's personal computing experience right to your desktop.</p>
        <p>I always remembered the nostalgic feeling of WindowsXP which is now discontinued and unfortunately gone from everybody's heart.</p>
        <p>It is a solo project, entirely developed by me in a corner of my room using a huge amount of JavaScript, so it lacks some good features.</p>
        <p>RebornXP is open source, and I would love to accept forks and pull requests on <a href="https://github.com/shoaib-jamal/reborn-xp">GitHub</a></p>
        <p>Best Regards,</p>
        <p>Shoaib Jamal</p>
        <p><b>Disclamier:<br>The Windows XP name, artwork, trademark are surely property of Microsoft. This project is provided for educational purposes only. It is not affiliated with and has not been approved by Microsoft.</p></b>
      </div>
    </window>`);
    document.body.appendChild(el[0]);
    $(el).updateWindow();
  });
});