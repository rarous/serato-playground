import {parse, stringify} from "@libs/xml";
import {fromJS, isKeyed} from "immutable";

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
    return new Response(stringify(xml), {
      status: 200,
      headers: {
        "Content-Type": "text/xml",
        "Content-Disposition": searchParams.has("download") ? `attachment; filename="My Mapping.xml"` : undefined,
      },
    });
  }
  return Response.error();
}

