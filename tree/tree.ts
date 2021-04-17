import { INode } from "./interfaces";

class TreeNode implements INode {
  key: string;
  children: Array<INode>;

  constructor(key: string) {
    this.key = key;
    this.children = [];
  }

  addChild(node: INode): void {
    this.children.push(node);
  }

  get(key: string): INode | undefined {
    return this.children.find((item) => item.key === key);
  }

  isEmpty(): boolean {
    return Boolean(this.children.length === 0);
  }
}

class VocabularyTree {
  private root: INode;

  constructor() {
    this.root = new TreeNode("");
  }

  addWord(word: string): void {
    word = word.toLowerCase();
    let currNode: INode = this.root;
    for (let i = 0; i < word.length; i++) {
      const currLetter = word[i];
      let node = currNode.get(currLetter);
      if (typeof node === "undefined") {
        node = new TreeNode(currLetter);
        currNode.addChild(node);
      }
      currNode = node;
    }
  }

  has(word: string): boolean {
    word = word.toLowerCase();
    let currNode: INode = this.root;
    for (let i = 0; i < word.length; i++) {
      const currLetter = word[i];
      let node = currNode.get(currLetter);
      if (typeof node === "undefined") {
        return false;
      }
      currNode = node;
    }
    return true;
  }
}

export default VocabularyTree;
