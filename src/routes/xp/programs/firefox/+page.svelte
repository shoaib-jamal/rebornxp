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
        title: 'Firefox',
        width: 900, // Adjust the width as needed
        height: 600, // Adjust the height as needed
        icon: '/images/xp/icons/Firefox.png',
        id: id
    };

    async function setupFirefox() {
        iframe_loaded = true;
        // Additional setup code for the Firefox app can be added here
    }
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>
    <div slot="content" class="absolute inset-0 flex flex-col">
        <!-- Iframe for the Firefox app -->
        <iframe src="https://browser.rammerhead.org/" bind:this={iframe}
                class="w-full h-full {window?.z_index == $zIndex ? 'pointer-events-auto' : 'pointer-events-none'}"
                frameborder="0" allowfullscreen>
        </iframe>
    </div>
</Window>

<svelte:options accessors={true} />
