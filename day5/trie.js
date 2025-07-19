class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.endOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        return current.endOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        return true;
    }
}

// ✅ Test
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log("Search apple:", trie.search("apple"));
console.log("Search app:", trie.search("app")); 
console.log("StartsWith ap:", trie.startsWith("ap")); 
