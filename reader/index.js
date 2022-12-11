import { parse } from "https://deno.land/x/xml/mod.ts";

const text = await Deno.readTextFile("../XONE K2 - 4 decks (Live FX).xml");
const xml = parse(text);

console.log(JSON.stringify(xml, null, 2));
