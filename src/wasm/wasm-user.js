import React, { useState, useEffect, useCallback } from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { WithUps } from "../components/with-ups";

import { loadWasm } from "./wasm-loader";
import wasm from "./add.wasm";

const loadAdd = async (callback) => {
  callback(await loadWasm(wasm));
};

export const WasmUser = () => {
  const [functions, setFunctions] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    loadAdd(setFunctions);
  }, []);

  const increment = useCallback(() => {
    setCount((value) => functions.add(value, 1));
  }, [functions]);

  return (
    <Card>
      <h4>Wasm</h4>
      <div>count: {count}</div>
      <Button onClick={increment}>
        <WithUps>increment using wasm</WithUps>
      </Button>
    </Card>
  );
};
