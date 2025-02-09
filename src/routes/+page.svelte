<script>
  import { onMount } from 'svelte';
  let currentUser = null;

  onMount(() => {
    currentUser = localStorage.getItem('currentUser');
  });
</script>

<div class="max-w-md mx-auto mt-10 p-4 border rounded text-center">
  {#if currentUser}
    <h2 class="text-2xl font-bold mb-4">Добро пожаловать, {currentUser}!</h2>
    <a href="/home" class="block text-blue-500 hover:underline">Перейти в Личный кабинет</a>
  {:else}
    <h2 class="text-2xl font-bold mb-4">Добро пожаловать!</h2>
    <div class="flex justify-around">
      <a href="/login" class="text-blue-500 hover:underline">Войти</a>
      <a href="/register" class="text-blue-500 hover:underline">Регистрация</a>
    </div>
  {/if}
</div>
