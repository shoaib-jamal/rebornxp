<script>
     import { onMount, onDestroy } from "svelte";
    import Wallpaper from "../wallpaper/+page.svelte";
    import { queueProgram, runningPrograms, selectingItems } from "../../../lib/store";
    import _ from "lodash";
    import short from "short-uuid";
    import DesktopFolder from "../desktop_folder/+page.svelte";
    import * as finder from "../../../lib/finder";
    

    let node_ref;
    let workSpaceHeight;

    let unsubscribers = [
        queueProgram.subscribe(program => {
            if(program == null){
                return;
            }
            launch(program);
        })
    ]

    

    onMount(() => {
        
    })

    onDestroy(() => {

    })

    async function launch(program){
        let {fs_item, webapp, copying_obj, target_folder_id, path} = program;

        if(path == './programs/my_computer/+page.svelte'){
            const Program = (await import("../programs/my_computer/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), fs_item, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })

        } else if(path == './programs/display_properties/+page.svelte'){
            const Program = (await import("../programs/display_properties/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), exec_path: path}
            });
            program.self = program;
            //add to program tray
            // runningPrograms.update(values => {
            //     return [...values, program];
            // })
        } else if(path == './programs/internet_explorer/+page.svelte'){
            let url = await get_url(fs_item);
            const Program = (await import("../programs/internet_explorer/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), url, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/xp_tour/+page.svelte'){
            const Program = (await import("../programs/xp_tour/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/paint/+page.svelte'){
            const Program = (await import("../programs/paint/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/photon/+page.svelte'){
            const Program = (await import("../programs/photon/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/media_player_classic/+page.svelte'){

            const Program = (await import("../programs/media_player_classic/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            if(fs_item) program.options = {...program.options, title: fs_item.name}

            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/minesweeper/+page.svelte'){
            const Program = (await import("../programs/minesweeper/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
            
        } else if(path == './programs/pinball/+page.svelte'){
            const Program = (await import("../programs/pinball/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        
        } else if(path == './programs/firefox/+page.svelte'){
            const Program = (await import("../programs/firefox/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        
         } else if(path == './programs/collab/+page.svelte'){
            const Program = (await import("../programs/collab/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        
        } else if(path == './programs/messenger/+page.svelte'){
            const Program = (await import("../programs/messenger/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        
        
        }  else if(path == './programs/properties/+page.svelte'){
            const Program = (await import("../programs/properties/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            if(fs_item) program.options = {...program.options, title: fs_item.name + ' Properties'}
            
        }  else if(path == './programs/disk_properties/+page.svelte'){
            const Program = (await import("../programs/disk_properties/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            if(fs_item) program.options = {...program.options, title: fs_item.display_name + ' Properties'}
            
        }  else if(path == './programs/notepad/+page.svelte'){
            const Program = (await import("../programs/notepad/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
            
        } else if(path == './programs/java/+page.svelte'){
            const Program = (await import("../programs/java/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            if(fs_item) program.options = {...program.options, title: fs_item.display_name};
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/foxit_reader/+page.svelte'){
            const Program = (await import("../programs/foxit_reader/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/microsoft_word/+page.svelte'){
            const Program = (await import("../programs/microsoft_word/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/koodo/+page.svelte'){
            const Program = (await import("../programs/koodo/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/winrar/+page.svelte'){
            const Program = (await import("../programs/winrar/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/zip/+page.svelte'){
            const Program = (await import("../programs/zip/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/webapp/+page.svelte'){
            const Program = (await import("../programs/webapp/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, webapp, exec_path: path + '::' + webapp.url}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/image_viewer/+page.svelte'){
            const Program = (await import("../programs/image_viewer/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/copier/+page.svelte'){

            const Program = (await import("../programs/copier/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, copying_obj, target_folder_id, exec_path: path}
            });
            program.self = program;
        } else if(path == './programs/app_installer/+page.svelte'){

            const Program = (await import("../programs/app_installer/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, copying_obj, target_folder_id, exec_path: path}
            });
            program.self = program;
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } else if(path == './programs/flash_player/+page.svelte'){
            const Program = (await import("../programs/flash_player/+page.svelte")).default;
            let program = new Program({
                target: node_ref,
                props: {id: short.generate(), parentNode: node_ref, fs_item, exec_path: path}
            });
            program.self = program;
            
            //add to program tray
            runningPrograms.update(values => {
                return [...values, program];
            })
        } 

        queueProgram.set(null);
    }

    async function get_url(item){
        if(item == null) return 'https://www.google.com/';

        if(item.storage_type == 'local'){
            return finder.to_url(item.id);
        } else {
            return item.url;
        }
    }



</script>

<div id="work-space" bind:this={node_ref} bind:clientHeight={workSpaceHeight} class="absolute inset-0 {$queueProgram != null ? 'waiting': ''}">
    <Wallpaper></Wallpaper>
    <DesktopFolder></DesktopFolder>

    
</div>
