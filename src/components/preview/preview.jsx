import React from "react";
import marked from "marked";

function Preview(props) {
  const { text } = props;

  marked.setOptions({
    // highlight: function (code, lang, callback) {
    //   require("pygmentize-bundled")(
    //     { lang: lang, format: "html" },
    //     code,
    //     function (err, result) {
    //       callback(err, result.toString());
    //     }
    //   );
    // },
    breaks: true,
    // headerIds: true,
    // gfm: true,
    // headerPrefix: true,
    // smartLists: true,
  });

  console.log(text);
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
  );
}

export default Preview;
