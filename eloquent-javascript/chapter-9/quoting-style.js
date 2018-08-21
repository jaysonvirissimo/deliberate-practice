let text = "'I'm the cook,' he said, 'it's my job.'";
const QuotesWithoutWordCharacters = /(^|\W)'|'(\W|$)/g;
console.log(text.replace(QuotesWithoutWordCharacters, '$1"$2'));
