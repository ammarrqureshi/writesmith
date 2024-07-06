import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      {value}
      Hello world
      <p>eeljf</p>
    </div>
  );
};
