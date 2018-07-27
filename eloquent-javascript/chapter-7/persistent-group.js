
class PGroup {
  constructor(elements) {
    this.elements = elements || [];
  }

  add(element) {
    let collection = [element];
    for (let item of this.elements) {
      if (!collection.indexOf(item)) { collection.push(item) }
    }
    return new PGroup(collection);
  }

  delete(element) {
    let collection = [];
    for (let item of this.elements) {
      if (element != item) collection.push(item);
    }
    return new PGroup(collection);
  }

  has(element) {
    return this.elements.includes(element);
  }

  static from(collection) {
    let group = new PGroup();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

PGroup.empty = new PGroup();

class PGroupIterator {
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

PGroup.prototype[Symbol.iterator] = function() {
  return new PGroupIterator(this);
}
