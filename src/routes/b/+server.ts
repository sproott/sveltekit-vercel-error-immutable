import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  return json({ text: "Hello from route B" });
};
