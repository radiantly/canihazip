addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest({ headers }) {
  const clientIP = headers.get("CF-Connecting-IP");
  return headers.get("Accept") === "application/json"
    ? new Response(`{ "ip": "${clientIP}"}`, {
        headers: { "content-type": "application/json" },
      })
    : new Response(clientIP, {
        headers: { "content-type": "text/plain" },
      });
}
