export const sortAlphabet = arr => {

  return [ ...arr ].sort((a, b) => a.last_name.localeCompare(b.last_name));

}

export const sortAlphabetReverse = arr => {

  return [ ...arr ].sort((a, b) => a.last_name.localeCompare(b.last_name))
                   .reverse();

}

export const sortRateLow = arr => {
 
  return [...arr].sort((a, b) => {

    if(a.rate > b.rate) { return 1 }
    if(a.rate < b.rate) { return -1 }
    return 0

  });

}

export const sortRateHigh = arr => {
 
  return [...arr].sort((a, b) => {

    if(a.rate > b.rate) { return -1 }
    if(a.rate < b.rate) { return 1 }
    return 0

  });

}