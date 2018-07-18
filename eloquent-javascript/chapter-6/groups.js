class Group {
  constructor() {
    this.elements = [];
  }

  add(element) {
    if (!this.has(element)) { this.elements.push(element) }
    return this;
  }

  delete(element) {
    if (this.has(element)) {
      this.elements.splice(this.elements.indexOf(element), 1);
    }
    return this;
  }

  has(element) {
    return this.elements.includes(element);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position == this.group.elements.length) { return { done: true }; }
    let value = this.group.elements[this.position];
    this.position++;
    return { value: value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}
