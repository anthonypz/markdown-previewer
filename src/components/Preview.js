import React from "react";
import ReactMarkdown from "react-markdown";

export default function Preview({ markdown }) {
  return (
    <div className="border-solid border-3 border-violet-200 rounded px-2 pb-2 h-full w-2/4 sm:w-[45%] ml-1 hover:border-violet-400 bg-slate-200/100">
      <h2 className="m-0 p-2 text-center text-xl text-slate-600 underline decoration-violet-300">
        Preview
      </h2>
      <div
        id="preview"
        className="overflow-auto h-[90%] px-1 border-solid border-1 rounded border-slate-400 bg-slate-50/100"
      >
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}
