// export default (obj, path, defaultValue = null) =>
// String.prototype.split.call(path, /[,[\].]+?/)
//   .filter(Boolean)
//   .reduce((a, c) => (Object.hasOwnProperty.call(a,c) ? a[c] : defaultValue), obj);
export default (obj, _path) => {
  var path = _path.split('.');
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
};