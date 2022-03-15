async function waiAndMaybeReject() {
  await new Promise((r) => setTimeout(r, 1000));
  throw Error("this is error !");
}
async function test1() {
  try {
    return await waiAndMaybeReject(); //
  } catch (e) {
    return "oh No !";
  }
}
async function test2() {
  try {
    return await waiAndMaybeReject();
  } catch (e) {
    throw e;
  }
}
async function test3() {
  return await waiAndMaybeReject();
}
async function test4() {
  return waiAndMaybeReject();
}

const main = async () => {
  const value = await test1();
  console.log("value", value);
};
main();
