import { loadWasm } from "./wasm-loader";
import wasm from "./add.wasm";

const loadAdd = async () => {
  self.functions = await loadWasm(wasm);
};

loadAdd();

self.onmessage = function (message) {
  const { data } = message;
  const result = functions.add(...data.args);
  self.postMessage(result);
};
