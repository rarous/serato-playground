import { parse, stringify } from "jsr:@libs/xml";
import { fromJS, isKeyed } from "npm:immutable";

function dedupe(xs) {
  return fromJS(xs, (k,v,p) => isKeyed(v) ? v : v.toSet()).toJS()
}

async function readPayload(req) {
  if (req.headers.get("Content-Type") === "application/json") {
    return req.json();
  }
  const text = await req.text();
  return dedupe(parse(text));
}

/**
 * @param {Request} req
 * @return {Promise<Response>}
 */
export async function handler(req) {
  const xml = await readPayload(req);
  if (req.headers.get("Accept") === "application/json") {
    return Response.json(xml);
  }
  if (req.headers.get("Accept") === "text/xml") {
    return new Response(stringify(xml), {
      status: 200,
      headers: { "Content-Type": "text/xml" },
    });
  }
  return Response.error();
}

Deno.serve(handler);
