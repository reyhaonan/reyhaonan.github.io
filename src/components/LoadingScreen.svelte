<script	lang="ts">
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let flyDown = spring(0)
	let flyRight = spring(0)

	let fade = spring(1)

	let show = $state(true);

	onMount(() => {
		setTimeout(() => {
			fade.set(0).then(() => {
				flyDown.set(window.innerHeight)
				flyRight.set(window.innerWidth).then(() => {
					show = false;
				})
			})
		}, 1000)
	})

</script>
{#if show}
	<div class="bg-black fixed top-0 left-0 w-screen h-screen z-[100] overflow-clip" style={`top: ${$flyDown}px`}>
	</div>
	<div class="bg-black fixed top-0 left-0 w-screen h-screen z-[99]" style={`left: ${$flyRight}px`}>
	</div>
	<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-20 z-[101]" style={`opacity: ${$fade}`}>
		<div class="animate-pulse">loading...</div>
	</div>
{/if}