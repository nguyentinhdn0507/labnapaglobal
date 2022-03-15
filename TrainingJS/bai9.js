const promise1 = function getPromise() {
  return new Promise((resolve, reject) => {
    resolve("Done");
  });
};
const promise2 = function getPromise() {
  return new Promise((resolve, reject) => {
    reject("Faillllll");
  });
};
let money = 4000;
const promise3 = (cakeType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 1000) {
        resolve(cakeType);
        console.log("Đủ tiền Mua Bánh", cakeType);
      } else {
        reject("Không Đủ Tiền Mua Bánh");
      }
    }, 1000);
  });
};

Promise.all([
  promise1().catch((err) => {
    return err;
  }),
  promise2().catch((err) => {
    return err;
  }),
  promise3("Bánh Kem").catch((err) => {
    return err;
  }),
]).then((values) => {
  console.log(values);
});
