import React from "react";

export default function Editor({ markdown, handleChange }) {
  return (
    <div className="border-solid border-3 border-violet-200 rounded h-full w-2/4 sm:w-[45%] mr-1 hover:border-violet-400 bg-slate-200">
      <h2 className="m-0 p-2 text-center text-xl text-slate-600 underline decoration-violet-300">
        Editor
      </h2>
      <div className="h-[89%] w-full px-2">
        <textarea
          id="editor"
          className="border-slate-400 bg-slate-50/100 rounded text-slate-900 border-[1.5px] overflow-auto h-full w-full max-h-full max-w-full"
          value={markdown}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}
