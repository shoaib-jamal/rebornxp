import loadjs from 'loadjs';

<script>
    import { onMount } from 'svelte';
 
    let page;
 
    onMount(async () => {
       await load_page('/boot_manager');
       adjust_zoom();
    });
 
    async function load_page(url) {
       if (url == '/boot_manager') {
          page = (await import('./boot_manager/+page.svelte')).default;
       } 
       else if (url == '/installation/95/installing') {
          page = (await import('./installation/95/installing/+page.svelte')).default;
       } 
       else if (url == '/installation/95/product_key_windows') {
          page = (await import('./installation/95/product_key_windows/+page.svelte')).default;
       } 
       else if (url == '/installation/dos/copying') {
          page = (await import('./installation/dos/copying/+page.svelte')).default;
       } 
       else if (url == '/installation/dos/eula') {
          page = (await import('./installation/dos/eula/+page.svelte')).default;
       } 
       else if (url == '/installation/dos/format') {
          page = (await import('./installation/dos/format/+page.svelte')).default;
       } 
       else if (url == '/installation/dos/partition') {
          page = (await import('./installation/dos/partition/+page.svelte')).default;
       } 
       else if (url == '/installation/dos/restart') {
          page = (await import('./installation/dos/restart/+page.svelte')).default;
       } 
       else if (url == '/installation/dos/starting') {
          page = (await import('./installation/dos/starting/+page.svelte')).default;
       } 
       else if (url == '/installation/dos/welcome') {
          page = (await import('./installation/dos/welcome/+page.svelte')).default;
       } 
       else if (url == '/xp/desktop') {
          page = (await import('./xp/desktop/+page.svelte')).default;
       } 
       else if (url == '/xp/program_tray') {
          page = (await import('./xp/program_tray/+page.svelte')).default;
       } 
       else if (url == '/xp/programs/display_properties') {
          page = (await import('./xp/programs/display_properties/+page.svelte')).default;
       } 
       else if (url == '/xp/programs/internet_explorer') {
          page = (await import('./xp/programs/internet_explorer/+page.svelte')).default;
       } 
       else if (url == '/xp/programs/my_computer') {
          page = (await import('./xp/programs/my_computer/+page.svelte')).default;
       } 
       else if (url == '/xp/starting') {
          page = (await import('./xp/starting/+page.svelte')).default;
       } 
       else if (url == '/xp/system_tray') {
          page = (await import('./xp/system_tray/+page.svelte')).default;
       } 
       else if (url == '/xp/task_bar') {
          page = (await import('./xp/task_bar/+page.svelte')).default;
       } 
       else if (url == '/xp/wallpaper') {
          page = (await import('./xp/wallpaper/+page.svelte')).default;
       } 
       else if (url == '/xp/shutdown') {
          page = (await import('./xp/shutdown/+page.svelte')).default;
       } 
       else if (url == '/xp/blackout') {
          page = (await import('./xp/blackout/+page.svelte')).default;
       }
       else {
        console.warn("Unknown page:", url);
       }
    }
 
    function adjust_zoom() {
       let width = window.innerWidth;
       let height = window.innerHeight;
       let zoom = 1;
       if (width <= 800 || height <= 500) {
          zoom = 0.8;
       } else if (width <= 900 || height <= 600) {
          zoom = 0.9;
       }
       document.body.style.zoom = zoom;
       for (let iframe of document.querySelectorAll('iframe')) {
          try {
             iframe.contentDocument.body.style.zoom = zoom;
          } catch (error) {}
       }
    }
 </script>
 
 <svelte:head>
     <title>RebornXP</title>
 </svelte:head>
 
 <svelte:component 
 this={page}  
 on:load_page={(e) => { 
     console.log("Received load_page event:", e.detail.url);
     load_page(e.detail.url);
 }}
></svelte:component>
<svelte:window on:resize={adjust_zoom} />
 