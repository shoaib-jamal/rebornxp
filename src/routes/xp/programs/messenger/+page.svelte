<script>
    

    import Window from '../../../../lib/components/xp/Window.svelte';
    import { runningPrograms, zIndex } from '../../../../lib/store';

    export let id;
    export let window;
    export let self;
    export let parentNode;

    let iframe;
    let iframe_loaded = false;

    export async function destroy() {
        runningPrograms.update(programs => programs.filter(p => p != self));
        self.$destroy();
    }

    export let options = {
        title: 'Internet Messenger',
        width: 500, // Adjust the width as needed
        height: 670, // Adjust the height as needed
        icon: '/images/xp/icons/MSNMessenger.png',
        id: id
    };

    async function setupMessenger() {
        iframe_loaded = true;
        // Additional setup code for the Messenger app can be added here
    }
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>
<div slot="content" class="absolute inset-0 flex flex-col" style="background-color: #E9F3F6;">
        <!-- Iframe for the Messenger app -->
        <iframe src="https://rxp-messenger.glitch.me/" bind:this={iframe}
                class="w-full h-full {window?.z_index == $zIndex ? 'pointer-events-auto' : 'pointer-events-none'}"
                frameborder="0" allowfullscreen>
        </iframe>
    </div>
</Window>

<svelte:options accessors={true} />
