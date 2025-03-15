<script>
    

    import Window from '../../../../lib/components/xp/Window.svelte';
    import { runningPrograms, zIndex, queueProgram } from '../../../../lib/store';
    import short from 'short-uuid';

    export let id;
    export let window;
    export let self;
    export let parentNode;

    let iframe;
    let iframe_loaded = false;
    let showSplash = true;

    export async function destroy() {
        runningPrograms.update(programs => programs.filter(p => p != self));
        self.$destroy();
    }

    export let options = {
        title: 'Pinball',
        width: 640, // Width of the original Pinball window
        height: 480, // Height of the original Pinball window
        icon: '/images/xp/icons/Pinball.png',
        id: id
    };

    async function setupPinball() {
        iframe_loaded = true;
        // Additional setup code for the Pinball game can be added here
    }

    function focusIframe() {
        iframe.focus();
    }

    // Hide splash after 3 seconds and focus the iframe
    setTimeout(() => {
        showSplash = false;
        focusIframe();
    }, 3000);
</script>

<div class="{showSplash ? 'splash-overlay' : 'hidden'}">
    <img src="/images/pinball-splash.png" alt="Pinball Splash" class="splash-image">
</div>

<Window options={options} bind:this={window} on_click_close={destroy}>
    <div slot="content" class="absolute inset-0 flex flex-col">
        <!-- Iframe for the Pinball game -->
        <iframe src="https://98.js.org/programs/pinball/space-cadet.html" bind:this={iframe}
            class="w-full h-full {window?.z_index == $zIndex ? 'pointer-events-auto' : 'pointer-events-none'}"
            frameborder="0" allowfullscreen on:click={focusIframe}>
        </iframe>
    </div>
</Window>

<svelte:options accessors={true} />

<style>
    .splash-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .hidden {
        display: none;
    }

    .splash-image {
        max-width: 100%;
        max-height: 100%;
    }
</style>
