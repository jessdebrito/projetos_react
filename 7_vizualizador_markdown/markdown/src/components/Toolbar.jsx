import React from "react";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText("# ", "")}>h1</button>
      <button onClick={() => insertText("## ", "")}>h2</button>
      <button onClick={() => insertText("### ", "")}>h3</button>
      <button onClick={() => insertText("#### ", "")}>h4</button>
      <button onClick={() => insertText("##### ", "")}>h5</button>
      <button onClick={() => insertText("###### ", "")}>h6</button>
      <button onClick={() => insertText("**", "**")}>Bold</button>
      <button onClick={() => insertText("*", "*")}>Italic</button>
      <button onClick={() => insertText("[", "](http://)")}>Link</button>
      <button onClick={() => insertText("```", "```")}>Code Block</button>
      <button onClick={() => insertText("- ", "")}>List Item</button>
      <button onClick={() => insertText("\n---\n", "")}>Horizontal Line</button>
    </div>
  );
};

export default Toolbar;
