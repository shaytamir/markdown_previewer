import React, { useState, useEffect } from "react";
import Text from "../../service/default_text.txt";

function Editor(props) {
  //   const [HTMLtext, setHTMLtext] = useState("loading .. ..");
  const { get, set } = props;
  console.log(get);

  return (
    <div id="editor_div">
      <h3>hallo</h3>
      <textarea
        name="editor"
        id="editor"
        className="editor"
        defaultValue={get}
        value={get}
        onChange={(e) => {
          //   console.log(e.target.value);
          set(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default Editor;
