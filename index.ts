import LinkedList from "./linkedList/linkedList";

const list = new LinkedList<string>();

list.append("from");
list.append("linked");
list.prepend("Hello");
list.append("!!!");
list.appendAfter("linked", "list");
console.log(list.toArray().join(" "));
