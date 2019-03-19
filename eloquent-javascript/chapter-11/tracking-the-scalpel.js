async function locateScalpel(nest) {
  let currentName = nest.name;

  while (true) {
    let nextName = await anyStorage(nest, currentName, "scalpel");

    if (nextName == currentName) {
      return currentName;
    }

    currentName = nextName;
  }
}
