const importObj = {
  module: {},
  env: {
    memory: new WebAssembly.Memory({ initial: 256 }),
    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" }),
  },
};

// const { Module, instantiate, Memory, Table } = WebAssembly;
export const loadWasm = async (wasm) => {
  const result = (
    await WebAssembly.instantiateStreaming(fetch(wasm), importObj)
  ).instance.exports;
  return result;
};
