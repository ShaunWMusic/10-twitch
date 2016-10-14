import createMessage from './create-message-item';

export default function addMessageItem(list, message) {
  const li = createMessage(message);
  list.appendChild(li);
}
