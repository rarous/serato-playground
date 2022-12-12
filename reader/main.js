const text = await Deno.readTextFile("../XONE K2 - 4 decks (Live FX).xml");
const resp = await fetch("https://serato-mapping-browser.deno.dev/", {
  method: "POST",
  headers: {
    "Content-Type": "text/xml",
    Accept: "application/json",
  },
  body: text,
});
const json = await resp.json();

console.log(JSON.stringify(json, null, 2));
