<script lang="ts">
	import '../app.css';
	import InstallButton from '../components/InstallButton.svelte';
	let { children } = $props();
</script>

{@render children()}

<InstallButton />