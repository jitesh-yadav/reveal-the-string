import ReactDom from "react-dom/client";
import RevealTheString from "./components/RevealTheString";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RevealTheString />);

/*

Script to get url from DOM nodes
-----------------------------------------------------

const charElements = document.querySelectorAll(
  'code[data-class^="23"] > div[data-tag$="93"] > span[data-id*="21"] > i.char'
);

let url = "";
for (let i = 0; i < charElements.length; i++) {
  url += charElements[i].getAttribute("value");
}
console.log(url);

*/
