import React, { useState, useEffect } from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { WithUps } from "../components/with-ups";

import Worker from "./wasm-worker.worker";

const myWorker = new Worker();

export const WasmWorkerUser = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    myWorker.onmessage = message => setValue(message.data);
  }, []);

  const increment = () => {
    myWorker.postMessage({ args: [value, 1] });
  };

  return (
    <Card>
      <h4>Wasm in Worker</h4>
      <div>count: {value}</div>
      <Button onClick={increment}>
        <WithUps>increment using wasm in worker</WithUps>
      </Button>
    </Card>
  );
};
