<script>
	import { onMount } from 'svelte';
	let deferredPrompt = true;
	let showButton = false; //false

	onMount(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			deferredPrompt = e;
			showButton = true;
		});
	});

	async function handleInstall() {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			console.log(`Пользователь ответил: ${outcome}`);
			deferredPrompt = null;
			showButton = false;
		}
	}
</script>

{#if showButton}
	<div class="w-full flex justify-center">
		<button 
			on:click={handleInstall} 
			class="mx-auto my-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
		>
			Скачать приложение
		</button>
	</div>

{/if}