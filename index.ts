import LinkedList from "./linkedList/linkedList";
import Stack from "./stack/stack";

const list = new LinkedList<string>();

list.append("from");
list.append("linked");
list.prepend("Hello");
list.append("!!!");
list.appendAfter("linked", "list");
console.log(list.toArray().join(" "));

const stack = new Stack<string>("hello", "world");

console.log(
  'Stack: initial state: "hello", "world" \nlength: ' + stack.getLength()
);
console.log("Stack: peek - " + stack.peek() + "\nlength: " + stack.getLength());
stack.push("me");
console.log('Stack: push - "me"\nlength: ' + stack.getLength());
console.log("Stack: peek - " + stack.peek() + "\nlength: " + stack.getLength());
console.log("Stack: pop - " + stack.pop() + "\nlength: " + stack.getLength());
console.log("Stack: peek - " + stack.peek() + "\nlength: " + stack.getLength());
console.log("Stack: peek - " + stack.peek() + "\nlength: " + stack.getLength());
