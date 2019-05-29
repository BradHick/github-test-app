export default (items, field, order) => {
  let arr = [...items];
  if (order === 'desc'){
    return arr.sort((a,b) => (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0));
  }
  return arr.sort((a,b) => (a[[field]] > b[[field]]) ? 1 : ((b[[field]] > a[[field]]) ? -1 : 0));
};