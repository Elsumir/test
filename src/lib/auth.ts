export async function fetchInitialUsers() {
  const res = await fetch('/users.json');
  if (!res.ok) {
    throw new Error('Ошибка загрузки пользователей');
  }
  return await res.json();
}

export function getLocalUsers() {
  const stored = localStorage.getItem('localUsers');
  return stored ? JSON.parse(stored) : [];
}

export function saveLocalUser(user: { username: string; phone: string; password: string }) {
  const users = getLocalUsers();
  users.push(user);
  localStorage.setItem('localUsers', JSON.stringify(users));
}

export async function getAllUsers() {
  const initialUsers = await fetchInitialUsers();
  const localUsers = getLocalUsers();
  return [...initialUsers, ...localUsers];
}

export async function register(username: string, phone: string, password: string) {
  const users = await getAllUsers();
  if (users.find(u => u.username === username)) {
    throw 'Пользователь с таким именем уже существует.';
  }
  const newUser = { username, phone, password };
  saveLocalUser(newUser);
  return newUser;
}

export async function login(username: string, password: string) {
  const users = await getAllUsers();
  const user = users.find(u => u.username === username);
  if (!user) {
    throw 'Пользователь не найден.';
  }
  if (user.password !== password) {
    throw 'Неверный пароль.';
  }
  localStorage.setItem('currentUser', username);
  return user;
}

export function logout() {
  localStorage.removeItem('currentUser');
} 