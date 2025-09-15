/**
 * @param {EventContext} context
 * @returns {Promise<Response>}
 */
export async function onRequestPost({ request }) {
  const text = await request.text();
  const resp = await fetch("https://serato-mapping-browser.deno.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "text/xml",
      Accept: "application/json",
    },
    body: text,
  });
  return resp;
}

