import { parse } from "@libs/xml";

/**
 * @param {EventContext} context
 * @returns {Promise<Response>}
 */
export async function onRequestPost({ request }) {
  const text = await request.text();
  const xml = parse(text);
  return Response.json(xml);
}

