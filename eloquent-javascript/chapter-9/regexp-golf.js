verify(/car|cats/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(e|y|a)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/delicious|spacious/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\./,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/hottent/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/red|nest/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}
