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
        title: 'Oracle VM VirtualBox',
        width: 800,
        height: 600,
        icon: '/images/xp/icons/Collab.png',
        id: id
    };

    async function setupCollab() {
        iframe_loaded = true;
    }
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>
    <div slot="content" class="absolute inset-0 flex flex-col">
        <!-- Iframe for the Collab app -->
        <iframe src="https://computernewb.com/collab-vm/" bind:this={iframe}
                class="w-full h-full {window?.z_index == $zIndex ? 'pointer-events-auto' : 'pointer-events-none'}"
                frameborder="0" allowfullscreen>
        </iframe>
    </div>
</Window>

<svelte:options accessors={true} />
