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

    placeholder: "Start writing here...",
  };
  const [content, setContent] = useState("");

  return (
    <div className=" my-10 flex flex-col gap-8 relative">
      <Card
        size="small"
        style={{ padding: 0 }}
        id="toolbar"
        className="sticky top-5 bg-white z-50"
      >
        <div className="flex justify-around w-full">
          <Button className="ql-bold " type="text"></Button>
          <Button className="ql-italic" type="text"></Button>
          <Button className="ql-underline " type="text"></Button>
          <Button className="ql-strike " type="text"></Button>
          <Button className="ql-link " type="text"></Button>
          <Button className="ql-blockquote" type="text"></Button>

          <Button className="ql-code-block " type="text"></Button>

          <Button className="ql-list " value="ordered" type="text"></Button>
          <Button className="ql-list " value="bullet" type="text"></Button>
          <Button className="ql-image " type="text"></Button>
          <Button className="ql-header " value="1" type="text"></Button>
          <Button className="ql-header " value="2" type="text"></Button>
        </div>
      </Card>
      <ReactQuill {...quill_options} value={content} onChange={setContent} />
    </div>
  );
};
