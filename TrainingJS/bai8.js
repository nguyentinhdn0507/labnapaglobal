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
//setImmediate được loại bỏ khỏi vòng lặp sự kiện, một lần mỗi lần lặp theo thứ tự được xếp hàng.
// process.nextTick(a) có độ ưu tiên cao nhất và luôn được kích hoạt ngay sau khi mã hiện tại được thực thi và trước khi quay lại eventloop.
