export default function sumFromList(list) {
  // console.log(list.children);
  let count = 0;
  for (let i = 0; i < list.children.length; i++) {
    count = count + parseInt(list.children[i].innerText);
  }
  return count;
}
