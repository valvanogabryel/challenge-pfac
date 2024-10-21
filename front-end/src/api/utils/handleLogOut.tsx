export default function handleLogOut() {
  localStorage.removeItem('access_token');
  window.location.href = '/login';
}
