const a = () => {
  console.log(a);
};
const b = () => {
  console.log(b);
};
const main = () => {
  setImmediate(b);
  process.nextTick(a);
};
main();
