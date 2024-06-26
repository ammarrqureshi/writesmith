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
          {formats.map((format) => (
            <Button
              className={`ql-${format.format}`}
              value={`${format.value}`}
              type="text"
            ></Button>
          ))}
        </div>
      </Card>
      <ReactQuill {...quill_options} value={content} onChange={setContent} />
    </div>
  );
};

//all Toolbar tools

const formats = [
  {
    format: "bold",
    value: "bold",
  },
  {
    format: "italic",
    value: "italic",
  },
  {
    format: "underline",
    value: "underline",
  },
  {
    format: "strike",
    value: "strike",
  },
  {
    format: "link",
    value: "link",
  },
  {
    format: "blockquote",
    value: "blockquote",
  },
  {
    format: "code-block",
    value: "code-block",
  },
  {
    format: "image",
    value: "image",
  },

  {
    format: "list",
    value: "ordered",
  },
  {
    format: "list",
    value: "bullet",
  },
  {
    format: "header",
    value: "1",
  },
  {
    format: "header",
    value: "2",
  },
];
