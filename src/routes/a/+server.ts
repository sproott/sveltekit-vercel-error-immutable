import type { Config } from "@sveltejs/adapter-vercel";
import type { RequestHandler } from "./$types";
import { text } from "@sveltejs/kit";

export const config: Config = {
  maxDuration: 60,
};

export const GET: RequestHandler = async ({ fetch }) => {
  const response = await fetch(`/b`);
  if (!response.ok) {
    throw new Error("Failed to fetch greeting from route B", {
      cause: await response.text(),
    });
  }

  const json = await response.json();

  return text(JSON.stringify(json));
};
