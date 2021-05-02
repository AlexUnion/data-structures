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

  getAll(): Array<INode> {
    return this.children;
  }

  isEmpty(): boolean {
    return Boolean(this.children.length === 0);
  }
}

class VocabularyTree {
  private root: INode;
  private isChanged: boolean;
  private maxDepth: number;

  constructor() {
    this.root = new TreeNode("");
    this.isChanged = false;
    this.maxDepth = 0;
  }

  addWord(word: string): void {
    this.isChanged = true;
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
      const node = currNode.get(currLetter);
      if (typeof node === "undefined") {
        return false;
      }
      currNode = node;
    }
    return true;
  }

  getDepth(): number {
    if (this.isChanged) {
      this.isChanged = false;
      this.maxDepth = VocabularyTree.step(this.root, 0);
    }
    return this.maxDepth;
  }

  private static step(node: INode, n: number): number {
    if (node.isEmpty()) {
      return n;
    }
    return Math.max(
      ...node.getAll().map((item) => VocabularyTree.step(item, n + 1))
    );
  }
}

export default VocabularyTree;
