import server from "../dist/server/server.js";

export default async (req: Request) => {
  const url = new URL(req.url, `https://${req.headers.get("host")}`);
  return server.fetch(new Request(url, req));
};
