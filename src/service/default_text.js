import marked from "marked";

// const renderer = {
//   heading(text, level) {
//     const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

//     return `
//             <h${level}>
//               <a name="${escapedText}" class="anchor" href="#${escapedText}">
//                 <span class="header-link"></span>
//               </a>
//               ${text}
//             </h${level}>`;
//   },
// };

// marked.use({ renderer });
const blockHtml = marked("**strong** _em_");
const inlineHtml = marked.parseInline("**strong** _em_");

export const defaultText = `
# Shaysel's Editor
## Shaysel's Editor

Heres some code, '<div></div>', between 2 backticks.


${"```"}
// this is multi-line code:

<code>function anotherExample(firstLine, lastLine) {}}</code>
${"```"}


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
Or... wait for it... ${blockHtml}
Or... wait for it... ${inlineHtml}
And feel free to go crazy ~~crossing stuff out~~.

There's also <a href="https://github.com/shaytamir">my github for more projects</a>
Here's a link to [Codepen](https://codepen.io).


And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

<img src="https://skimulator.co.il/wp-content/uploads/2019/05/Helly-Hansen-logo-300x207.png">


![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")


- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.
I think you should use an \`<addr>\` element here instead.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:




<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>

> Dorothy followed her through many of the beautiful rooms in her castle.

`;
