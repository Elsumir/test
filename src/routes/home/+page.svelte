<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { logout } from '$lib/auth';

  let currentUser = '';

  onMount(() => {
    currentUser = localStorage.getItem('currentUser') || '';
    if (!currentUser) {
      goto('/login');
    }
  });

  function handleLogout() {
    logout();
    goto('/login');
  }
</script>

<div class="max-w-md mx-auto mt-10 p-4 border rounded text-center">
  <h2 class="text-2xl font-bold mb-4">Добро пожаловать, {currentUser}!</h2>
  <button on:click={handleLogout} class="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-700">
    Выйти
  </button>
</div> 