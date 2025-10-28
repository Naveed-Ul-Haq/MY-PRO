
document.getElementById('year').textContent = new Date().getFullYear();

function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  // Opens user's email client
  window.location.href = `mailto:naveed@example.com?subject=${subject}&body=${body}`;
}
