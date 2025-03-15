<script>
    import loadjs from 'loadjs';
    import { onMount, createEventDispatcher } from 'svelte';
    import * as utils from '../../lib/utils';
    let dispatcher = createEventDispatcher();

    let is_chromium = true;
    onMount(() => {
        loadjs([
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js',
            'https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css'
        ], { async: false });

        utils.set_theme('none');
        is_chromium = window.chrome != null;
    });

    let current_option = 0;
    let boot_options = [
        'Start Windows Normally',
        'Install Windows',
    ];

    let timer = null;
    let timerSeconds = 10;
    let selected = false;

    function startTimer() {
        timer = setInterval(() => {
            if (timerSeconds === 0) {
                clearInterval(timer);
                boot();
            } else {
                timerSeconds--;
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timerSeconds = 10;
    }

    function on_key_pressed(e) {
        resetTimer();
        switch (e.keyCode) {
            case 38: // Arrow Up
                current_option = (current_option === 0) ? boot_options.length - 1 : current_option - 1;
                break;
            case 40: // Arrow Down
                current_option = (current_option === boot_options.length - 1) ? 0 : current_option + 1;
                break;
            case 13: // Enter
                boot();
                break;
            default:
                beep();
                break;
        }
        startTimer();
    }

    function boot() {
        if (selected) return;
        selected = true;
        clearInterval(timer); // Stop timer to prevent multiple dispatches

        console.log("Boot option selected:", current_option);

        if (current_option === 0) {
            utils.set_installing_windows(false);
            console.log("Dispatching load_page: /xp/starting");
            dispatcher("load_page", { url: "/xp/starting" });
        } else if (current_option === 1) {
            utils.set_installing_windows(true);
            console.log("Dispatching load_page: /installation/dos/starting");
            dispatcher("load_page", { url: "/installation/dos/starting" });
        }
    }

    function beep() {
        const beepSound = new Audio('/audio/biosBeep.mp3');
        beepSound.play();
    }

    startTimer();

    function removeTimer() {
        clearInterval(timer);
        timerSeconds = 0;
    }
</script>

<div class="w-screen h-screen bg-black overflow-hidden font-MSSS flex flex-col">
    <div class="mt-12 ml-8 text-lg flex-grow">
        <p class="text-slate-100">Use the ↑(Up) and ↓(Down) key to move the pointer to the desired boot device.</p>
        <p class="text-slate-100">Press (Enter) to attempt to boot or ESC to cancel.</p>
        {#if !is_chromium}
            <p class="text-slate-100 mt-2 max-w-[500px]">
                RebornXP might have unexpected behaviors on browsers that are NOT Chromium-based.
            </p>
        {/if}

        <p class="text-slate-100 uppercase mt-4 mb-2">Boot options:</p>
        {#each boot_options as option, index}
            <div>
                <div class="ml-8 p-2 inline-block {index === current_option ? 'text-slate-900 bg-slate-200 cursor-pointer' : 'text-slate-300 cursor-pointer'}"
                    on:click={() => {
                        current_option = index;
                        boot();
                    }}>
                    {option}
                </div>
            </div>
        {/each}

        <p class="text-slate-100 uppercase mt-4 mb-2" style="display: {timerSeconds === 0 ? 'none' : 'block'}">
            The default entry will boot in {timerSeconds} seconds...
        </p>
    </div>
</div>

<svelte:window on:keydown={on_key_pressed} on:keydown|preventDefault={removeTimer} on:keypress={beep} on:click={beep} />
