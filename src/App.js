import "./App.scss";
import React, { useState, useEffect } from "react";

import Preview from "./components/preview/preview";
import Editor from "./components/textEditor/editor";
// import "./previewer.css";
// import marked from "marked";
import Text from "./service/default_text.txt";
import { defaultText } from "./service/default_text.js";

function App() {
  // const [defaultText, setDefaultText] = useState("Loading...");
  const [HTMLtext, setHTMLtext] = useState("loading.. ..");
  useEffect(() => {
    setHTMLtext(defaultText);
    // fetch(Text)
    //   .then((response) => response.text())
    //   .then((textContent) => {
    //   });
    // return () => {
    // }
  }, []);

  return (
    <div className="App">
      <Editor
        get={HTMLtext}
        set={(content) => {
          setHTMLtext(content);
        }}
      />
      <Preview text={HTMLtext} />
      {/*  */}
      {/*  */}
    </div>
  );
}

export default App;
