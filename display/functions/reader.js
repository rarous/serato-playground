/**
 * @param {EventContext} context
 * @returns {Promise<Response>}
 */
export async function onRequestPost({ request }) {
  const {searchParams} = new URL(request.url);
  const text = await request.text();
  const resp = await fetch("https://serato-mapping-browser.deno.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "text/xml",
      Accept: "application/json",
    },
    body: text,
  });
  if (searchParams.has("download")) {
    const headers = new Headers(resp.headers);
    headers.set("Content-Disposition", `attachment; filename="My Mapping.xml"`);
    return new Response(resp.body, { status: resp.status, headers, statusText: resp.statusText })
  }
  return resp;
}

