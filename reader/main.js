import { parseArgs } from "jsr:@std/cli/parse-args";

async function main({ file }) {
  const text = await Deno.readTextFile(file);
  const resp = await fetch("https://serato.rarousmusic.com/xml-to-json", {
    method: "POST",
    headers: {
      "Content-Type": "text/xml",
      Accept: "application/json",
    },
    body: text,
  });
  const json = await resp.json();

  console.log(JSON.stringify(json, null, 2));
}

await main(parseArgs(Deno.args))

// deno --allow-read --allow-import --allow-net=serato.rarousmusic.com main.js --file=../XONEK2\ -\ 4\ decks\ -\ v4.0.xml | pbcopy