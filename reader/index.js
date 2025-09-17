import { parse } from "jsr:@libs/xml";

/**
 * @param {Request} req
 * @return {Promise<Response>}
 */
export async function handler(req) {
  const text = await req.text();
  const xml = parse(text);
  return Response.json(xml);
}

Deno.serve(handler);
