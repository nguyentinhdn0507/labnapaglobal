async function waiAndMaybeReject() {
  await new Promise((r) => setTimeout(r, 1000));
  throw Error("this is error !");
}
async function test1() {
  try {
    return await waiAndMaybeReject();
  } catch (e) {
    return "oh No !" + e.message;
  }
}
async function test2() {
  try {
    return await waiAndMaybeReject(); // dư await
  } catch (e) {
    throw error;
  }
  // thiếu try/catch để bắt lỗi cho hàm main
}
async function test3() {
  return await waiAndMaybeReject();
  // dư await
  // thiếu try/catch để bắt lỗi cho hàm main
}

async function test4() {
  return waiAndMaybeReject();
  // thiếu try/catch để bắt lỗi cho hàm main
}

const main = async () => {
  const value = await test2();
  console.log("value", value);
};
main();
