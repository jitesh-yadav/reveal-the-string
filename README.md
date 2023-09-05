# Reveal The String!!

Capture the flag and emulate a typewrite effect for the captured string.

## Get Started

This React application is built using Parcel. To run the application, use below command:

```
npm start
```

## Fetch URL script

Below is the script used to fetch the url from DOM nodes:

```
const charElements = document.querySelectorAll(
  'code[data-class^="23"] > div[data-tag$="93"] > span[data-id*="21"] > i.char'
);

let url = "";
for (let i = 0; i < charElements.length; i++) {
  url += charElements[i].getAttribute("value");
}
console.log(url);
```
