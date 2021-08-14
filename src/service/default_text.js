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
# Welcome to shaysel's React Markdown Previewer!
## Shaysel's Editor



${"```"}
// this is multi-line code:
Heres some code, '<div></div>', between 2 backticks.

<code>function anotherExample(firstLine, lastLine) {}}</code>
${"```"}


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

Here's a link to [my github for more projects](https://github.com/shaytamir).


And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.



- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.
I think you should use an \`<addr>\` element here instead.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

Oh and not forgeting quotes:
> Dorothy followed her through many of the beautiful rooms in her castle.

![Markdown Logo](/images/earth.png)
`;
