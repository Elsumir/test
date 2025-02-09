<script>
  import { login } from '$lib/auth';
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let message = '';

  async function handleLogin(event) {
    event.preventDefault();
    try {
      await login(username, password);
      goto('/home');
    } catch (error) {
      message = error;
    }
  }
</script>

<div class="max-w-md mx-auto mt-10 p-4 border rounded">
  <h2 class="text-2xl font-bold text-center mb-4">Авторизация</h2>
  <form on:submit={handleLogin}>
    <div class="mb-4">
      <label class="block text-gray-700 mb-1" for="username">Имя пользователя</label>
      <input
        id="username"
        type="text"
        bind:value={username}
        class="w-full border rounded p-2"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 mb-1" for="password">Пароль</label>
      <input
        id="password"
        type="password"
        bind:value={password}
        class="w-full border rounded p-2"
        required
      />
    </div>
    <button type="submit" class="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-700">
      Войти
    </button>
  </form>
  {#if message}
    <p class="text-center mt-2 text-red-500">{message}</p>
  {/if}
  <p class="text-center mt-4">
    Нет аккаунта? <a class="text-blue-500 hover:underline" href="/register">Зарегистрироваться</a>
  </p>
</div> 