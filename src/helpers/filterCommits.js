export default (items, text) => {
  return items.filter( item => item.commit.message.toLowerCase().search(text.toLowerCase()) !== -1);
};