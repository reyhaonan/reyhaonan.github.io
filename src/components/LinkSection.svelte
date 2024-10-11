<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	import { fade, fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let element: HTMLElement;

	let intersect = false;
</script>

<section class="h-[200vh] relative overflow-visible">
	<div class="sticky top-0 w-full -z-10">
		<IntersectionObserver
			{element}
			once
			on:intersect={() => {
				console.log('INTERSECT');
				intersect = true;
			}}
			threshold={0.8}
		>
			<img
				fetchpriority="high"
				class="w-full select-none"
				src="/jft.png"
				height="1080"
				width="1920"
				alt="girl with umbrella"
				bind:this={element}
			/>
		</IntersectionObserver>
		{#if intersect}
			<div
				class="absolute bottom-1/6 left-0 w-1/2 ml-40 box"
				transition:fly={{
					delay: 250,
					duration: 300,
					x: 300,
					y: -100,
					opacity: 0,
					easing: quintOut
				}}
			>
				<svg
					width="100%"
					viewBox="0 0 1029 344"
					class="animate-[smootherJelly_10s_linear_infinite_alternate-reverse]"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M924.825 297.375L1028.5 151L938.5 224.5L879.21 166.224L804.674 232.998L747.37 76.4331L0.402023 0.598145L66.2215 329.734L740.984 316.1L816.187 343.623L876.344 257.849L924.825 297.375Z"
						fill="white"
					/>
					<path
						d="M924.661 285.833L1015.5 165L937 233L879.981 176.307L798.383 250.588L743.799 84.1947L19.2261 17.5071L72.287 322.154L742.679 299.68L810.32 334.675L878.956 241.798L924.661 285.833Z"
						fill="#010101"
					/>
				</svg>

				<div
					class="absolute top-1/2 -translate-y-1/2 w-2/3 pl-12 font-semibold text-white text-12 lg:text-16 xl:text-18 2xl:text-24 text-center"
				>
					{#each "Born on April 2, 2003, he discovered his passion for programming in high school. Now studying Information System at the Open University, he's excited to shape the future of technology." as char, i}
						<span in:slide|global={{ delay: 200 + i * 10 }}>{char}</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
