import React from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default function App() {
  const [markdown, setMarkdown] = React.useState(starterText);

  function handleChange(event) {
    const target = event.target;
    setMarkdown(target.value);
  }
  return (
    <div className="h-full w-full bg-gradient-to-t from-zinc-700 to-zinc-800">
      <div className="flex justify-center items-center p-3 underline decoration-violet-400 ">
        <h1 className="m-0 text-zinc-200 text-2xl">Markdown Previewer</h1>
      </div>
      <div className="flex justify-center align-middle md:justify-around h-[90%]">
        <Editor markdown={markdown} handleChange={handleChange} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

const starterText = `# Heading 1

## Heading 2

**bold** text

*italic* text

Place a [Link](http://commonmark.org/help/)

\`Inline code\` with backticks

\`\`\`
# This is a code block
print '3 backticks'
\`\`\`

> This is a blockquote

This is an unordered list:
- apples
- oranges
- bananas

This is an ordered list:
1. One
2. Two
3. Three  

![Image](https://commonmark.org/help/images/favicon.png)

`;
