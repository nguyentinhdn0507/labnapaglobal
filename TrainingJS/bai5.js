// Khác nhau giữa for và forEach

// for thì hoạt động tốt với Async/Await
async function asyncFn() {
  const arr = ["a", "b", "c"];
  for (let i = 0; i < arr.length; ++i) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(arr[i]);
  }
}
asyncFn();

// forEach thì không hoạt động với Async/Await
async function run() {
  const arr = ["a", "b", "c"];
  arr.forEach((item) => {
    // SyntaxError
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(item);
  });
}
