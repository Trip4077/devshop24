export const filterByTitle = (arr, term) => {
  return [ ...arr ].filter(item => item.title.includes(term));
}

export const filterBySearch = (arr, search) => {
  return [ ...arr ].filter(item => item.last_name.toLowerCase().includes(search.toLowerCase()));
}

export const filterByAvailable = arr => {
  return [ ...arr ].filter(item => item.available);
}