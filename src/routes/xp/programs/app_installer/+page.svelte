<script>
    

    import Window from '../../../../lib/components/xp/Window.svelte';
    import Button from '../../../../lib/components/xp/Button.svelte';
    import { runningPrograms, systemVolume, zIndex, hardDrive, queueProgram } from '../../../../lib/store';
    import { desktop_folder, doctypes } from '../../../../lib/system';
    import * as fs from '../../../../lib/fs';

    export let id;
    export let window;
    export let self;
    export let parentNode;
    export let exec_path;

    let webapp_url = '';
    let fetch_btn;
    let install_btn;
    let webapp;
    let error;
    let installed = false;
    let fs_item_id;
    let browser = 'unknown';
	
	 export async function destroy(){
        runningPrograms.update(programs => programs.filter(p => p != self));
        self.$destroy();
    }

    function detectBrowser() {
        const userAgent = navigator.userAgent;
        if (userAgent.includes('Chrome') || userAgent.includes('CriOS') || userAgent.includes('Edge') || userAgent.includes('Vivaldi') || userAgent.includes('Brave') || userAgent.includes('Opera')) {
            browser = 'chrome';
        } else if (userAgent.includes('Firefox')) {
            browser = 'firefox';
        }
    }

    detectBrowser();

 function isValidDomain(domain) {
        const domainRegex = /^(?:(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,}|(?:(?:[a-z0-9-]+\.)+[a-z]{2,}))(?:\/[^\s]*)?$/i;
        const domainWithoutProtocol = domain.replace(/^https?:\/\//i, '');
        return domainRegex.test(domainWithoutProtocol);
    }




    export let options = {
        title: 'Installer',
        min_width: 500,
        min_height: 400,
        width: 500,
        height: 400,
        icon: '/images/xp/icons/Programs.png',
        resizable: false,
        maximize_btn_disabled: true,
        id: id,
        exec_path
    };

    function open_link(link){
        queueProgram.set({
            path: './programs/internet_explorer/+page.svelte',
            fs_item: {url: link}
        })
    }

     async function fetch_webapp_info(){
        error = null;
        fetch_btn.disabled = true;
        fetch_btn.title = 'Fetching'

        try {
            const response = await fetch('/api/webapp_info', {
                method: 'GET',
                headers: {
                    'webapp_url': webapp_url,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            webapp = data.webapp;
            fetch_btn.title = ' Fetch ';
            fetch_btn.disabled = false;

            if(webapp.xframe_restricted){
                error = {
                    message: `The webapp you requested has the X-Frame-Options header value set, which prevents RebornXP from loading it. However, you can still use this app on RebornXP by installing the Ignore X-Frame Headers extension.`,
                    chromeLink: 'https://chromewebstore.google.com/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe',
                    firefoxLink: 'https://addons.mozilla.org/en-US/firefox/addon/ignore-x-frame-options-header/'
                };
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    async function install(){
        fs_item_id = await fs.new_fs_item_raw({
            basename: webapp.name,
            ext: '.exe',
            executable: true,
            icon: webapp.icon,
            webapp: {
                name: webapp.name,
                icon: webapp.icon,
                url: webapp.url
            }
        }, desktop_folder);
        installed = true;
    }

    async function launch(){
        let fs_item = $hardDrive[fs_item_id];
        if(fs_item.type == 'file'){
            if(fs_item.executable){
                queueProgram.set({
                    path: fs_item.url,
                    webapp: fs_item.webapp
                })
            } else if(doctypes[fs_item.ext] != null){
                queueProgram.set({
                    path: doctypes[fs_item.ext][0].path,
                    fs_item: fs_item
                })
            } else {
                queueProgram.set({
                    path: './programs/notepad/+page.svelte',
                    fs_item: fs_item
                })
            }
        } else {
            queueProgram.set({
                    path: './programs/my_computer/+page.svelte',
                    fs_item: fs_item
                })
        }
        destroy();
    }
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>
    <div slot="content" class="absolute inset-1 bg-xp-yellow-light">
        {#if !installed}
        <div class="absolute inset-0 flex flex-col p-2 text-[14px] text-slate-900 font-Trebuchet justify-between">
            <div class="flex-col flex grow-0 overflow-hidden">
                <p>This installer will help you convert any website into a RebornXP application. Start by entering URL of the website you want to install.</p>
                <div class="mt-2 flex flex-row">
                    <input bind:value={webapp_url} on:input={() => {webapp = null;error = null}} placeholder="webapp url" class="grow p-1 text-slate-800 mr-2 text-sm">
                    <Button bind:this={fetch_btn} title=" Fetch " disabled={!isValidDomain(webapp_url)} on_click={fetch_webapp_info}></Button>                </div>
                {#if webapp}
                <div class="flex flex-row p-2 overflow-hidden my-2">
                    <div class="grow-0 shrink-0 bg-cover bg-no-repeat w-12 h-12 m-1" style:background-image="url({webapp.icon})"></div>
                    <div class="">
                        <p class="font-bold text-base">{webapp.name}</p>
                        <p>{webapp.desc}</p>
                    </div>
                </div>
                {/if}
                {#if error}
                    <p class="p-2 text-red-400">{error.message}</p>
                    {#if browser === 'chrome'}
                        <p class="p-2 text-blue-400"><a href={error.chromeLink} target="_blank"><u>Click here to install the Ignore X-Frame Headers extension for Chrome-based browsers.</u></a></p>
                    {:else if browser === 'firefox'}
                        <p class="p-2 text-blue-400"><a href={error.firefoxLink} target="_blank"><u>Click here to install the Ignore X-Frame Headers extension for Firefox.</u></a></p>
                    {:else}
                        <p class="p-2 text-blue-400"><a href={error.chromeLink} target="_blank">Click here to install the Ignore X-Frame Headers extension for Chrome-based browsers.</a></p>
                        <p class="p-2 text-blue-400"><a href={error.firefoxLink} target="_blank">Click here to install the Ignore X-Frame Headers extension for Firefox.</a></p>
                    {/if}
                {/if}
            </div>
            <div class="flex flex-row shrink-0 grow-0 justify-end">
                <Button on_click={install} style="margin-right:10px;" title="Install >" disabled={webapp == null}></Button>
                <Button on_click={destroy} title="Cancel"></Button>
            </div>
        </div>
        {:else}
        <div class="absolute inset-0 flex flex-col p-2 text-[14px] text-slate-900 font-Trebuchet justify-between">
            <div class="grow flex flex-col items-center justify-center overflow-hidden">
                <svg class="w-16 h-16 fill-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
                <p class="text-xl font-bold mt-2">Installed Successfully</p>
            </div>
            <div class="flex flex-row shrink-0 grow-0 justify-end">
                <Button on_click={launch} style="margin-right:10px;" title="Launch >"></Button>
            </div>
        </div>
        {/if}
    </div>
</Window>

<svelte:options accessors={true}></svelte:options>
