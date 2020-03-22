import React from "react";
import "./App.css";

import { WasmUser } from "./wasm/wasm-user";
import { WasmWorkerUser } from "./wasm/wasm-user-worker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trying Web Workers and Web Assembly</h1>
        <div style={{ display: "flex" }}>
          <WasmUser />
          <WasmWorkerUser />
        </div>
      </header>
    </div>
  );
}

export default App;
