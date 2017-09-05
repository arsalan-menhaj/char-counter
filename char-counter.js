function countLetters(string) {
  letterTable = {};
  string = string.replace(/ /g, '');
  string = string.toLowerCase();
  for ( i = 0 ; i < string.length ; i++ ) {
    if (!letterTable[string.substring(i,i+1)]) {
      letterTable[string.substring(i,i+1)] = 1;
    } else {
      letterTable[string.substring(i,i+1)] += 1;
    }
  }

  for (var key in letterTable) {
    console.log(key + ': ' + letterTable[key]);
  }
}

countLetters("Lighthouse in the house");
