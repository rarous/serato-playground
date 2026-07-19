import {parse, stringify} from "jsr:@libs/xml";
import {fromJS, isKeyed} from "npm:immutable";

function dedupe(xs) {
  return fromJS(xs, (k, v, p) => isKeyed(v) ? v.toOrderedMap() : v.toOrderedSet()).toJS();
}

/**
 *
 * @param {Request} req
 * @returns {Promise<*>}
 */
async function readPayload(req) {
  if (req.headers.get("Content-Type") === "application/json") {
    return req.json();
  }
  const text = await req.text();
  return dedupe(parse(text));
}

/**
 * @param {EventContext} context
 * @returns {Promise<Response>}
 */
export async function onRequestPost({request}) {
  const {searchParams} = new URL(request.url);
  const accept = request.headers.get("Accept");
  const xml = await readPayload(request);
  if (accept === "application/json") {
    return Response.json(xml);
  }
  if (accept === "text/xml") {
    let response = new Response(stringify(xml), {
      status: 200,
      headers: {"Content-Type": "text/xml"},
    });
    if (!searchParams.has("download")) {
      return response;
    }
    const headers = new Headers(response.headers);
    headers.set("Content-Disposition", `attachment; filename="My Mapping.xml"`);
    return new Response(response.body, {status: response.status, headers, statusText: response.statusText});
  }
  return Response.error();
}

