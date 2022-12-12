import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { parse } from "https://deno.land/x/xml/mod.ts";

/**
 * @param {Request} req
 * @return {Promise<Response>}
 */
export async function handler(req) {
  const text = await req.text();
  const xml = parse(text);
  return Response.json(xml);
}

serve(handler);
