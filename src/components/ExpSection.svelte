<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';

	onMount(() => {
		anime({
			targets: document.querySelector('svg .white1'),
			points: [
				{
					value:
						'475.500 28.000, 392.000 0.000, 202.500 40.001, 97.000 40.001, 0.000 30.500, 0.000 45.000, 97.000 60.500, 197.000 57.000, 374.000 51.000, 445.000 79.000, 1168.500 130.000, 1249.000 161.500, 1920.000 200.000, 1920.000 49.500, 1272.500 64.000, 1216.500 28.000, 475.500 28.000'
				},
				{
					value:
						'471.5,42.5 395.5,0.5 202.5,47.5006 97,47.5006 0.00000217551,43 0.0000026712100000000002,52.5002 97,64.5 197,64.5 376.5,47.5006 430,87.5008 1169,115.5 1232,153 1920,191.5 1920,22.0002 1283,47.5007 1232,13.312 471.5,42.5'
				}
			],
			loop: true,
			direction: 'alternate',
			easing: 'linear'
		});
		anime({
			targets: document.querySelector('svg .white2'),
			points: [
				{
					value:
						'460.000 297.500, 398.000 218.000, 182.500 102.500, 14.000 44.999, 0.000 44.999, 0.000 51.000, 175.000 128.000, 374.000 252.500, 431.500 332.000, 1031.500 642.000, 1079.000 713.500, 1920.500 1209.500, 1920.000 1039.000, 1157.500 653.500, 1099.500 572.500, 460.000 297.500'
				},
				{
					value:
						'463.5,299.5 403.5,209 190.5,110 14,52.4991 0,52.4991 0.00000472257,58.4999 175,135.5 382,248.5 430.5,328.5 1023,658 1079.79,730.23 1920.5,1223.5 1920.5,1005 1167.5,658 1106,568.5 463.5,299.5'
				}
			],
			loop: true,
			direction: 'alternate',
			easing: 'linear'
		});
	});
</script>

<section class="relative">
	<div class="content h-screen overflow-x-hidden z-10 relative text-white">
		<div class="work w-full text-right pt-[18vh] pr-20 font-bold space-y-4 lg:space-y-8">
			<!-- TODO: Stylize -->
			<h2 class="text-30 lg:text-42 xl:text-68 2xl:text-88">WORK EXPERIENCES</h2>

			<div class="job">
				<h3 class="lg:text-30 xl:text-48 2xl:text-64">GolekTruk dot com</h3>
				<p class="lg:text-16 xl:text-24 2xl:text-36 font-normal">
					Frontend Developer Nov 2021 - now
				</p>
			</div>
			<div class="job">
				<h3 class="lg:text-30 xl:text-48 2xl:text-64">PT Pupuk Kujang</h3>
				<p class="lg:text-16 xl:text-24 2xl:text-36 font-normal">Internship Jan 2020 - Mar 2020</p>
			</div>
		</div>
	</div>
	<svg
		width="100%"
		viewBox="0 0 1920 1224"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="hidden md:block absolute -top-[6vh]"
	>
		<polygon
			fill="#000"
			points=" 217.5,58 10,50.5 14.5,58 383,229.5 438,305 1920,1143.5 1920,130 561.5,86.5 392,35.5 217.5,58"
		></polygon>
		<polygon
			class="white1"
			fill="#fff"
			points=" 471.5,42.5 395.5,0.5 202.5,47.5006 97,47.5006 0.00000217551,43 0.0000026712100000000002,52.5002 97,64.5 197,64.5 376.5,47.5006 430,87.5008 1169,115.5 1232,153 1920,191.5 1920,22.0002 1283,47.5007 1232,13.312 471.5,42.5"
		></polygon>
		<polygon
			class="white2"
			fill="#fff"
			points=" 463.5,299.5 403.5,209 182.5,110 14,52.4991 0,52.4991 0.00000472257,58.4999 175,135.5 382,248.5 430.5,328.5 1023,658 1079.79,730.23 1920.5,1223.5 1920.5,1005 1167.5,658 1106,568.5 463.5,299.5"
		></polygon>
	</svg>

	<img
		src="/stars.svg"
		alt="stars background"
		class="hidden md:block absolute -top-[16vh] h-[180vh] left-0 -z-30 select-none"
	/>
</section>
