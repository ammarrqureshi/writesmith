import { Button, Card } from "antd";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = () => {
  const quill_options = {
    modules: {
      toolbar: "#toolbar",
    },
    theme: "snow",

    placeholder: "Compose an epic...",
  };
  const [content, setContent] = useState("");
  console.log(content);

  return (
    <div>
      <Card size="small" padding={0}id="toolbar" className="">
        <Button style={{ color: "red" }} className="ql-bold " type="text" />
      </Card>
      <ReactQuill {...quill_options} value={content} onChange={setContent} />
    </div>
  );
};
