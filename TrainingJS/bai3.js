function doA(milSeconds) {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milSeconds);
  console.log("Done Task A");
}
// doA(10000);
function doB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve");
      console.log("Done task B")
    }, 1000);
  });
}
// doB();
const controller = async (req, res) => {
  const time = new Date().getTime();
  doA(10000);
  await doB();
  const after = new Date().getTime();
  console.log(after - time);
  //   res.end(200).end;
};
async function delayJob() {
  await controller();
  await controller();
  await controller();
}
delayJob();
