const controller = async (req, res) => {
  const arr = Array.from(Array(1000000).keys());
  for await (const el of arr) {
    console.log(el);
  }
};
controller();
controller();
controller();
