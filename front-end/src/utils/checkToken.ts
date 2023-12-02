export function checkToken() {
  const token = localStorage.getItem('access_token');

  if (!token) {
    alert('O usuário precisa estar logado para acessar...');
    window.location.href = '/login';
  }
}
