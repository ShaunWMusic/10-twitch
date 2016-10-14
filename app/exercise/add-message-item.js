export default function List(ul, save) {
  this.items = [];
  this.ul = ul;
  this.save = save;
}
           // add item to list
List.prototype.add = function (item) {
  this.items.push(item);
  this.rebuildDom();
};
