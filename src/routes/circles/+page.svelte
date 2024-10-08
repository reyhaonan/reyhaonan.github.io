<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';

	onMount(() => {
		anime({
			targets: document.querySelectorAll('.circle'),
			width: (e: HTMLElement, i: number) => `${i * 40 + 80}px`,
			loop: true,
			easing: 'linear',
			duration: (_, i) => 400
		});
	});
</script>

{#each Array(40).fill(true) as key, i}
	<div
		class={`absolute-center circle origin-bottomright aspect-square rounded-full ${i % 2 == 0 ? 'bg-white' : 'bg-red'}`}
		style={`width: ${i * 40}px;z-index: ${40 - i}`}
	></div>
{/each}
