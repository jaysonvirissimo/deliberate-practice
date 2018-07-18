function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) { body(i); }
}
