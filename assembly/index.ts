memory.grow(1);

export function getData(): Int32Array {
  let arr = new Int32Array(4);
  arr[0] = 10;
  arr[1] = 20;
  return arr;
}

export function add(a: i32, b: i32): i32 {
  return a + b;
}
