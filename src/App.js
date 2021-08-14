import "./App.scss";
import React, { useState, useEffect } from "react";

import Preview from "./components/preview/preview";
import Editor from "./components/textEditor/editor";
import { defaultText } from "./service/default_text.js";

function App() {
  const [HTMLtext, setHTMLtext] = useState("loading.. ..");
  const [maximaized, setMaximaized] = useState(false);

  useEffect(() => {
    setHTMLtext(defaultText);
  }, []);

  return (
    <div className="App">
      <Editor
        get={HTMLtext}
        set={(content) => {
          setHTMLtext(content);
        }}
        max={maximaized}
        setMax={(e) => {
          setMaximaized(e);
        }}
      />
      <Preview text={HTMLtext} max={maximaized} />
    </div>
  );
}

export default App;
