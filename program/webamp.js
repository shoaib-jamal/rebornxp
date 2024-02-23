window.addEventListener('xpboot', () => {
    // Load the Webamp library
    const webampScript = document.createElement('script');
    webampScript.src = 'https://unpkg.com/webamp';
    document.head.appendChild(webampScript);

    // Wait for the script to be loaded before initializing Webamp
    webampScript.onload = () => {
        xp.applications.add('webamp', () => {
            
            
            // from Webamp demo
	const album = 'netBloc Vol. 24: tiuqottigeloot';

            const webamp = new Webamp({
                initialTracks: [
                    
                    {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Diablo_Swing_Orchestra_-_01_-_Heroines.mp3',
    duration: 322.612245,
    metaData: {
      title: 'Heroines',
      artist: 'Diablo Swing Orchestra',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Eclectek_-_02_-_We_Are_Going_To_Eclecfunk_Your_Ass.mp3',
    duration: 190.093061,
    metaData: {
      title: 'We Are Going To Eclecfunk Your Ass',
      artist: 'Eclectek',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Auto-Pilot_-_03_-_Seventeen.mp3',
    duration: 214.622041,
    metaData: {
      title: 'Seventeen',
      artist: 'Auto-Pilot',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Muha_-_04_-_Microphone.mp3',
    duration: 181.838367,
    metaData: {
      title: 'Microphone',
      artist: 'Muha',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Just_Plain_Ant_-_05_-_Stumble.mp3',
    duration: 86.047347,
    metaData: {
      title: 'Stumble',
      artist: 'Just Plain Ant',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Sleaze_-_06_-_God_Damn.mp3',
    duration: 226.795102,
    metaData: {
      title: 'God Damn',
      artist: 'Sleaze',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Juanitos_-_07_-_Hola_Hola_Bossa_Nova.mp3',
    duration: 207.072653,
    metaData: {
      title: 'Hola Hola Bossa Nova',
      artist: 'Juanitos',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Entertainment_for_the_Braindead_-_08_-_Resolutions_Chris_Summer_Remix.mp3',
    duration: 314.331429,
    metaData: {
      title: 'Resolutions (Chris Summer Remix)',
      artist: 'Entertainment for the Braindead',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Nobara_Hayakawa_-_09_-_Trail.mp3',
    duration: 204.042449,
    metaData: {
      title: 'Trail',
      artist: 'Nobara Hayakawa',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Paper_Navy_-_10_-_Tongue_Tied.mp3',
    duration: 201.116735,
    metaData: {
      title: 'Tongue Tied',
      artist: 'Paper Navy',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/60_Tigres_-_11_-_Garage.mp3',
    duration: 245.394286,
    metaData: {
      title: 'Garage',
      artist: '60 Tigres',
      album,
    },
  },
  {
    url:
      'https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/CM_aka_Creative_-_12_-_The_Cycle_Featuring_Mista_Mista.mp3',
    duration: 221.44,
    metaData: {
      title: 'The Cycle (Featuring Mista Mista)',
      artist: 'CM aka Creative',
      album,
    },
  },
                    
                ],
                
            });

            // Render Webamp within the specified container
            const webampContainer = document.createElement('div');
            webampContainer.className = 'webamp-container';
            

            document.body.appendChild(webampContainer);
            webamp.renderWhenReady(webampContainer);

            
        });

        // Add Webamp to the start menu
        xp.startmenu.add('webamp', 'Winamp', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAAGuSURBVFhHrZRRloMgDAB7yb3k/u2PB/MCLAMEAySIUt+bGkLIxNrXTwjhNfGKN3vPgzP6XLP5BJocx9E0m0Fdqv35wgClQTjPc2mIvP+X5OF3c4ByOMkFbwhyOX/JtwYoBxu5NQT3FCOcyFOtXswoB025UIfQ4okcmoXHipyaQV7EnhyGRM+qvMoeyMFMCndy9nfkYCZhRa5FnvzVADN5bapEnpz6u/+JMZGL18Q3yJl6tnNBu8hF2+KG+M1w3v2zqkHeHORDQ77unr4GeCXltdCHftYQ+cOQmwNIU2EmV2sZAPohuFg0YiHtqUYNllwG6/L00X31EHy6Q7gDePI+F+nlggwRq+a/gZ5BPnlq0P2E4RsQStI8lPcMuV4XPDEMvwEJasIYYpC/eGro5VCDJpmL0qEcF7kjhpkYLDk0Cw3Fg7yTgtRZUsGTw5AQqnzjqWEmBzup5Y74G3IYExP5qhhW5NAubuRclqxnVQ5XQGi8b/LSrNxNqfBEDldAqMQil/2mLl7fkMMVqAGIZ43K3rYcroDQeWqLUrclhyuI4dMmpf61HMzkE3bkIYTPP7z0VJ1idtq7AAAAAElFTkSuQmCC');
    };
});

