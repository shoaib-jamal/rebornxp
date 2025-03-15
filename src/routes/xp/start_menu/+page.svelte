<script>
    import {hardDrive, queueProgram } from '../../../lib/store';
    import { my_pictures_id, my_music_id } from '../../../lib/system';
    import * as utils from '../../../lib/utils';
    const { click_outside } = utils;

    let col_1 = [
        {
            name: 'Internet Explorer',
            icon: '/images/xp/icons/InternetExplorer6.png',
            path: './programs/internet_explorer/+page.svelte',
            font: 'bold'
        },
        {
            name: 'Microsoft Word 2003',
            icon: '/images/xp/icons/MSWord.png',
            path: './programs/microsoft_word/+page.svelte',
            font: 'bold'
            
        },
        null,
        {
            name: 'Mozilla Firefox',
            icon: '/images/xp/icons/Firefox.png',
            path: './programs/firefox/+page.svelte',
            
        },
        
        {
            name: 'Internet Messenger',
            icon: '/images/xp/icons/MSNMessenger.png',
            path: './programs/messenger/+page.svelte',
        },
        
        {
            name: 'Media Player Classic',
            icon: '/images/xp/icons/MPC.png',
            path: './programs/media_player_classic/+page.svelte',
            
        },
        {
            name: 'Foxit Reader',
            icon: '/images/xp/icons/FoxitReader.png',
            path: './programs/foxit_reader/+page.svelte',
            
        },
        
       
        
        
        
        {
            name: 'Paint',
            icon: '/images/xp/icons/Paint.png',
            path: './programs/paint/+page.svelte',
            
        },
        {
            name: 'Tour Windows XP',
            icon: '/images/xp/icons/TourXP.png',
            path: './programs/xp_tour/+page.svelte',
            
        },
    ]

    let col_2 = [
        {
            name: 'My Pictures',
            icon: '/images/xp/icons/MyPictures.png',
            path: './programs/my_computer/+page.svelte',
            fs_item: {id: my_pictures_id},
            font: 'bold'
        },
        {
            name: 'My Music',
            icon: '/images/xp/icons/MyMusic.png',
            path: './programs/my_computer/+page.svelte',
            fs_item: {id: my_music_id},
            font: 'bold'
        },
        {
            name: 'My Computer',
            icon: '/images/xp/icons/MyComputer.png',
            path: './programs/my_computer/+page.svelte',
            font: 'bold'
        },
        null,
    //    {
      //      name: 'Control Panel',
        //    icon: '/images/xp/icons/ControlPanel.png',
          //  path: ''
        // },
        {
            name: 'Display Properties',
            icon: '/images/xp/icons/DisplayProperties.png',
            path: './programs/display_properties/+page.svelte',
        },

         {
            name: 'Installer',
            icon: '/images/xp/icons/Programs.png',
            path: './programs/app_installer/+page.svelte'
        },
		  null,
		{
    name: 'Discord Community',
    icon: '/images/xp/icons/discord.png',
    newLink: 'https://discord.gg/9dFx9kKQS6'
},

		
      
       
        {
            name: 'Help and Support',
            icon: '/images/xp/icons/HelpandSupport.png',
            link: 'https://xptour.neocities.org/'
        },
        {
            name: 'Run...',
            icon: '/images/xp/icons/Run.png',
            path: ''
        }
    ]

    let programs = [
        {
            name: 'Display Properties',
            icon: '/images/xp/icons/DisplayProperties.png',
            path: './programs/display_properties/+page.svelte',
        },
        {
            name: 'Windows Catalog',
            icon: '/images/xp/icons/WindowsCatalog.png',
            link: 'https://web.archive.org/web/20020916202544/http://microsoft.com/windowsxp/pro/default.asp'
        },
        {
            name: 'Windows Update',
            icon: '/images/xp/icons/WindowsUpdate.png',
            link: 'https://web.archive.org/web/20020603060817/http://www.microsoft.com/WINDOWS/'
        },
        null,
        // {
//             name: 'Accessories',
//             icon: '/images/xp/icons/StartMenuPrograms.png',
//             top: '-100px',
//             items: [
//                 {
//                     name: 'Accessibility',
//                     icon: '/images/xp/icons/StartMenuPrograms.png',
//                     items: [
//                         {
//                             name: 'Accessibility Wizard',
//                             icon: '/images/xp/icons/AccessibilityWizard.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Magnifier',
//                             icon: '/images/xp/icons/Magnifier.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Narrator',
//                             icon: '/images/xp/icons/Narrator.png',
//                             path: ''
//                         },
//                         {
//                             name: 'On-Screen Keyboard',
//                             icon: '/images/xp/icons/On-ScreenKeyboard.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Utility Manager',
//                             icon: '/images/xp/icons/BAT.png',
//                             path: ''
//                         },
//                     ]
//                 },
//                 {
//                     name: 'Communications',
//                     icon: '/images/xp/icons/StartMenuPrograms.png',
//                     items: [
//                         {
//                             name: 'Hyper Terminal',
//                             icon: '/images/xp/icons/HyperTerminal.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Network Connections',
//                             icon: '/images/xp/icons/NetworkConnections.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Network Setup Wizard',
//                             icon: '/images/xp/icons/NetworkSetup.png',
//                             path: ''
//                         },
//                         {
//                             name: 'New Connection Wizard',
//                             icon: '/images/xp/icons/NewNetworkConnection.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Wireless Network Setup Wizard',
//                             icon: '/images/xp/icons/WirelessNetworkSetup.png',
//                             path: ''
//                         },
//                     ]
//                 },
//                 {
//                     name: 'Entertainment',
//                     icon: '/images/xp/icons/StartMenuPrograms.png',
//                     items: [
//                         {
//                             name: 'Sound Recorder',
//                             icon: '/images/xp/icons/Volume.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Volume Control',
//                             icon: '/images/xp/icons/VolumeLevel.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Windows Media Player',
//                             icon: '/images/xp/icons/WindowsMediaPlayer9.png',
//                             path: ''
//                         },
//                     ]
//                 },
//                 {
//                     name: 'System Tools',
//                     icon: '/images/xp/icons/StartMenuPrograms.png',
//                     items: [
//                         {
//                             name: 'Backup',
//                             icon: '/images/xp/icons/BackupWizard.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Character Map',
//                             icon: '/images/xp/icons/Charmap.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Disk Cleanup',
//                             icon: '/images/xp/icons/DiskCleanup.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Disk Defragmenter',
//                             icon: '/images/xp/icons/DiskDefragmenter.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Files and Settings Transfer Wizard',
//                             icon: '/images/xp/icons/FileandSettingsTransferWizard.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Scheduled Tasks',
//                             icon: '/images/xp/icons/ScheduledTasks.png',
//                             path: ''
//                         },
//                         {
//                             name: 'Security Center',
//                             icon: '/images/xp/icons/SecurityCenter.png',
//                             path: ''
//                         },
//                         {
//                             name: 'System Information',
//                             icon: '/images/xp/icons/SystemInformation.png',
//                             path: ''
//                         },
//                         {
//                             name: 'System Restore',
//                             icon: '/images/xp/icons/SystemRestore.png',
//                             path: ''
//                         },
//                     ]
//                 },
//                 {
//                     name: 'Address Book',
//                     icon: '/images/xp/icons/AddressBook.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Calculator',
//                     icon: '/images/xp/icons/Calculator.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Command Prompt',
//                     icon: '/images/xp/icons/CommandPrompt.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Notepad',
//                     icon: '/images/xp/icons/Notepad.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Paint',
//                     icon: '/images/xp/icons/Paint.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Program Compatibility Wizard',
//                     icon: '/images/xp/icons/HelpandSupport.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Remote Desktop Connection',
//                     icon: '/images/xp/icons/RemoteDesktop.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Synchronize',
//                     icon: '/images/xp/icons/Synchronize.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Tour Windows Xp',
//                     icon: '/images/xp/icons/TourXP.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Windows Explorer',
//                     icon: '/images/xp/icons/Explorer.png',
//                     path: ''
//                 },
//                 {
//                     name: 'Wordpad',
//                     icon: '/images/xp/icons/Wordpad.png',
//                     path: ''
//                 },
//                 
//             ]
//         },
        {
            name: 'Games',
            top: '-30px',
            icon: '/images/xp/icons/StartMenuPrograms.png',
            items: [{"name":"Minesweeper","icon":"/images/xp/icons/Minesweeper.png","path":"./programs/minesweeper/+page.svelte","size":7860},
            
            {"name":"Pinball","icon":"/images/xp/icons/Pinball.png","path":"./programs/pinball/+page.svelte"},
            
            {"name":"Solitaire","icon":"/images/xp/icons/Solitaire.png","path":"./programs/webapp/+page.svelte","webapp":{"background":"rgb(236 233 216 / var(--tw-bg-opacity))","url":"https://98.js.org/programs/js-solitaire/","name":"Solitaire","icon":"/images/xp/icons/Solitaire.png"}},
            
            {"name":"Spider Solitaire","icon":"/images/xp/icons/SpiderSolitaire.png","path":"./programs/webapp/+page.svelte","webapp":{"background":"#111827","url":"https://lrusso.github.io/Spider/Spider.htm","name":"Spider Solitaire","icon":"/images/xp/icons/SpiderSolitaire.png"}}
            
            ]
        },
        {
            name: 'Startup',
            icon: '/images/xp/icons/StartMenuPrograms.png',
            items: []
        },
        {
            name: 'Internet Explorer',
            icon: '/images/xp/icons/InternetExplorer6.png',
            path: './programs/internet_explorer/+page.svelte',
            font: 'bold'
        },
        {
            name: 'Mozilla Firefox',
            icon: '/images/xp/icons/Firefox.png',
            path: './programs/firefox/+page.svelte',
			font: 'bold'
            
        },
        {
            name: 'Internet Messenger',
            icon: '/images/xp/icons/MSNMessenger.png',
            path: './programs/messenger/+page.svelte',
			font: 'bold'
            
        },
        {
            name: 'Microsoft Word 2003',
            icon: '/images/xp/icons/MSWord.png',
            path: './programs/microsoft_word/+page.svelte',
            font: 'bold'
            
        },
        null,
        {
            name: 'Media Player Classic',
            icon: '/images/xp/icons/MPC.png',
            path: './programs/media_player_classic/+page.svelte',
            
        },
        {
            name: 'Oracle VirtualBox',
            icon: '/images/xp/icons/Collab.png',
            path: './programs/collab/+page.svelte',
            
        },
        {
            name: 'Foxit Reader',
            icon: '/images/xp/icons/FoxitReader.png',
            path: './programs/foxit_reader/+page.svelte',
            
        },
        {
            name: 'Flash Player',
            icon: '/images/xp/icons/FlashPlayer.png',
            path: './programs/flash_player/+page.svelte',
            
        },
        {
            name: 'Python REPL',
            icon: '/images/xp/icons/Python.png',
            path: './programs/webapp/+page.svelte',
            "webapp": {
                "background": "#000000",
                "url": "https://pyodide.org/en/stable/console.html",
                "name": "Python REPL",
                "icon": "/images/xp/icons/Python.png"
            },
        },
        {
            name: 'Koodo Reader',
            icon: '/images/xp/icons/Koodo.png',
            path: './programs/koodo/+page.svelte',
            
        },
        {
            name: 'Photon',
            icon: '/images/xp/icons/Photon.png',
            path: './programs/photon/+page.svelte',
            
        },
        {
            name: 'Paint',
            icon: '/images/xp/icons/Paint.png',
            path: './programs/paint/+page.svelte',
            
        },
        {
            name: 'Tour Windows XP',
            icon: '/images/xp/icons/TourXP.png',
            path: './programs/xp_tour/+page.svelte',
            
        },
    ]

    function hide(){
        let el = document.querySelector('#start-menu');
        if(!el.classList.contains('hidden')){
            el.classList.add('hidden');
        }
    }

function launch(item){
    console.log(item);
    let { path, fs_item, webapp, link, newLink } = item;
    if (newLink) {
        openLinkInNewTab(newLink);
    } else if (link) {
        open_link(link);
    } else if (path) {
        queueProgram.set({
            path, 
            fs_item,
            webapp
        })
    }
    hide();
}


    function open_link(link){
        queueProgram.set({
            path: './programs/internet_explorer/+page.svelte',
            fs_item: {url: link}
        })
    }
	function openLinkInNewTab(newLink) {
    window.open(newLink, '_blank');
}


    async function show_shutdown_panel(){
        const ShutDownPanel = (await import('../shutdown_panel/+page.svelte')).default;
        let panel = new ShutDownPanel({
            target: document.querySelector('#desktop')
        });
        panel.self = panel;
        hide();
    }

</script>

<div id="start-menu" class="absolute bottom-[30px] left-0 h-[500px] w-[380px] z-20 flex flex-col shadow-lg rounded-t-md hidden"
    style:background-color="rgb(66, 130, 214)"
    use:click_outside on:click_outside={hide}>
    <div class="h-[3px] absolute top-0 left-[3px] right-[3px]" style="background: linear-gradient(to right, transparent 0px, rgba(255, 255, 255, 0.3) 1%, rgba(255, 255, 255, 0.5) 2%, rgba(255, 255, 255, 0.5) 95%, rgba(255, 255, 255, 0.3) 98%, rgba(255, 255, 255, 0.2) 99%, transparent 100%);
    box-shadow: rgb(14 96 203) 0px -1px 1px inset;"></div>

    <div class="w-full h-[65px] rounded-t-xl shrink-0"
        style="background-image: url('data:image/png;base64,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')">
    <img src="/files/profiles/chess.png" style="
    width: 48px;
    height: 48px;
    position: absolute;
    top: 9px;
    left: 9px;
">
	<div style="position: absolute;
    top: 22px;
    left: 80px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 20px;   font-family: 'Trebuchet';
    color: #FFFFFF;">Administrator</div>
    
    </div>

    <div class="shrink-0 h-[3px] w-full" style:background-image="linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(218, 136, 74) 50%, rgba(0, 0, 0, 0) 100%)">
    </div>

    <div class="grow bg-slate-50 mx-0.5 flex flex-row">
        
        <div class="grow w-1/2 flex flex-col h-full shrink-0">
            {#each col_1 as item}
                {#if item == null}
                    <div class="my-0.5 mx-auto w-5/6 h-[2px] bg-slate-200 shrink-0"></div>
                {:else}
                    <div class="flex flex-row items-center grow p-1 group hover:bg-blue-500" on:click={() => launch(item)}>
                        <div class="w-8 h-8 bg-contain mr-1"
                            style:background-image="url({item.icon})">
                        </div>
                        <div class="text-[11px] group-hover:text-white text-black {item.font == 'bold' ? 'font-bold' : ''}">
                            {item.name}
                        </div>
                    </div>
                {/if}
            {/each}
            <div class="my-0.5 mx-auto w-5/6 h-[2px] bg-slate-200 shrink-0"></div>
            <div class="relative grow group">
                
                <div class="flex pl-9 py-2 items-center flex-row  group-hover:bg-blue-500">
                    <div class="font-bold text-black text-[11px] group-hover:text-white">All Programs</div>
                    <div class="w-4 h-4 ml-1 bg-contain bg-[url(/images/xp/icons/876.png)]"></div>
                </div>

                <div class="absolute left-[90%] bottom-0 w-[250px] shadow-xl border-t border-l-4 border-blue-500 hidden group-hover:block bg-slate-50">
                    <div class="absolute -left-[50px] bottom-0 w-[820px] h-[500px] ">
                        <div class="absolute left-[300px] top-0 -bottom-[100px] right-0 " on:click|self={hide}></div>
                    </div>
                    {#each programs as item}
                        {#if item == null}
                            <div class="my-0.5 mx-auto w-5/6 h-[1px] bg-slate-200 shrink-0"></div>
                        {:else}
                            <div class="flex flex-row items-center grow p-1 group-sub1 hover:bg-blue-500 relative"  on:click={() => launch(item)}>
                                <div class="w-5 h-5 bg-contain mr-1 shrink-0"
                                    style:background-image="url({item.icon})">
                                </div>
                                <div class="text-[11px]  text-slate-800 grow group-sub1-hover:text-white">
                                    {item.name}
                                </div>
                                <div class="w-[10px] shrink-0">
                                    {#if item.items != null}
                                        <svg class="fill-slate-900 group-sub1-hover:fill-slate-50 w-[10px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                                    {/if}
                                </div>

                                {#if item.items != null}
                                    <div class="absolute left-[100%] top-0 w-[200px] shadow-xl border-t border-b border-l-4 border-blue-500 hidden group-sub1-hover:block bg-slate-50"
                                        style:top="{item.top}">
                                        <div  on:click|self={hide} class="absolute left-0 -bottom-[50px] w-[500px]" style:height="{item.items.length * 37}px"></div>
                                        {#if item.items.length == 0}
                                            <div class="h-6 text-slate-400 text-[11px] w-full px-4 flex flex-row items-center">(Empty)</div>
                                        {/if}
                                        {#each item.items as subitem}
                                            {#if subitem == null}
                                                <div class="my-0.5 mx-auto w-5/6 h-[1px] bg-slate-200 shrink-0"></div>
                                            {:else}
                                                <div class="flex flex-row items-center grow p-1 group-sub2 hover:bg-blue-500 relative" on:click={() => launch(subitem)}>
                                                    <div class="w-5 h-5 bg-contain mr-1 shrink-0"
                                                        style:background-image="url({subitem.icon})">
                                                    </div>
                                                    <div class="text-[11px]  text-slate-800 grow group-sub2-hover:text-white">
                                                        {subitem.name}
                                                    </div>
                                                    <div class="w-[10px] shrink-0">
                                                        {#if subitem.items != null}
                                                            <svg class="fill-slate-900 group-sub2-hover:fill-slate-50 w-[10px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                                                        {/if}
                                                    </div>
                                                    {#if subitem.items != null}
                                                        <div class="absolute left-[100%] top-0 w-[220px] shadow-xl border-t border-b border-l-4 border-blue-500 hidden group-sub2-hover:block bg-slate-50">
                                                            {#each subitem.items as subsubitem}
                                                                {#if subsubitem == null}
                                                                    <div class="my-0.5 mx-auto w-5/6 h-[1px] bg-slate-200 shrink-0"></div>
                                                                {:else}
                                                                    <div class="flex flex-row items-center grow p-1 group-sub3 hover:bg-blue-500 relative" on:click={() => launch(subsubitem)}>
                                                                        <div class="w-5 h-5 bg-contain mr-1 shrink-0"
                                                                            style:background-image="url({subsubitem.icon})">
                                                                        </div>
                                                                        <div class="text-[11px]  text-slate-800 grow group-sub3-hover:text-white">
                                                                            {subsubitem.name}
                                                                        </div>
                                                                        <div class="w-[10px] shrink-0">
                                                                            {#if subsubitem.items != null}
                                                                                <svg class="fill-slate-900 group-sub3-hover:fill-slate-50 w-[10px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                                                                            {/if}
                                                                        </div>
                                                                    </div>
                                                                {/if}
                                                            {/each}
                                                        </div>
                                                    {/if}
                                                </div>
                                            {/if}
                                        {/each}
                                    </div>
                                {/if}

                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>

        <div class="grow w-1/2 flex flex-col h-full shrink-0" style="background-color: rgba(211,229,250,255)">
            {#each col_2 as item}
                {#if item == null}
                    <div class="my-0.5 mx-auto w-5/6 h-[1px] bg-blue-100 shrink-0"         style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAACCAYAAAAAVa3XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gMFATAew637bAAAATxJREFUOMvVkjFOQzEMhj87fQGpQogBiYEjAEuPwT04FJfhAnSCjRUWGBBCRZA0NkPy2kf1YCsCS5GdP7//xI7l5iHxm3Z1113kAjnDh0EukA3eMxzvM3OHpUExKIPYvPrDPWZm4F4xcygABsYad+rCwQ0OpswYYo2DtH3L3bQec/6XSe9l5Ezaeatdep6s854XzEXXmAAqlacACqFhK1zh6ZV50IoFhYlCGMQicP/CfLeDTqELsKNwfpovt96T3x72k+njGR2QLEKGECJuEdcIgE6mbcoiKpFSQLX3HRoiVhJIRCRi1rovEQXMwFvs0kHDVPuS49cX2ciEb3Jod/CNxl8xTz+VhfjIZ+u4xrBn4hlr+apN2xNG5bgn8LT6G7NMCGCWqveESNNdLqqmJUQTpSTouH07ut52dz4BovuZZ2cYYLgAAAAASUVORK5CYII=')"></div>
                {:else}
                    <div class="flex flex-row items-center grow p-1 group hover:bg-blue-500" on:click={() => launch(item)}>
                        <div class="w-7 h-7 bg-contain mr-1"
                            style:background-image="url({item.icon})">
                        </div>
                        <div class="text-[11px] group-hover:text-white text-slate-800 {item.font == 'bold' ? 'font-bold' : ''}">
                            {item.name}
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>

    <div class="w-full h-[40px] shrink-0 flex items-center justify-end px-2" 
        style:background-image="linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%)">
        <div class="p-1 rounded-sm hover:brightness-110 flex flex-row items-center" on:click={show_shutdown_panel}>
            <div class="w-6 h-6 bg-[url(/images/xp/icons/Logout.png)] bg-contain"></div>
            <span class="text-slate-50 text-[11px] ml-1">Log Off</span>
        </div>
        <div class="p-1 ml-2 rounded-sm hover:brightness-110 flex flex-row items-center" on:click={show_shutdown_panel}>
            <div class="w-6 h-6 bg-[url(/images/xp/icons/Power.png)] bg-contain" ></div>
            <span class="text-slate-50 text-[11px] ml-1">Turn Off Computer</span>
        </div>
    </div>

</div>
