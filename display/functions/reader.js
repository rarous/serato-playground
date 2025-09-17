/**
 * @param {EventContext} context
 * @returns {Promise<Response>}
 */
export async function onRequestPost({ request }) {
  const { searchParams } = new URL(request.url);
  const resp = await fetch("https://serato-mapping-browser.deno.dev/", request);
  if (searchParams.has("download") && request.headers.get("Accept") === "text/xml" && resp.ok) {
    const headers = new Headers(resp.headers);
    headers.set("Content-Disposition", `attachment; filename="My Mapping.xml"`);
    return new Response(resp.body, { status: resp.status, headers, statusText: resp.statusText })
  }
  return resp;
}

