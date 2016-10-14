export default function (message) {
  const el = document.createElement('li');
  el.innerHTML = `
  <span class="message-item__username">${message.username}</span>
  ${message.message} `;

  return el;
}
