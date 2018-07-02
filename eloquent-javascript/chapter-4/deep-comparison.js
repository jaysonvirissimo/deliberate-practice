function isNull(value) {
  value === null
}

function deepEqual(one, two) {
  if (isNull(one) && isNull(two)) {
    return true;
  } else if (typeof one === 'object' && typeof two === 'object') {
    let keys = Object.keys(one);

    for (let i = 0; i < keys.length; i++) {
      if (!deepEqual(one[keys[i]], two[keys[i]])) {
        return false;
      }
    }
    
    return true;
  } else {
    return one === two;
  }
}
