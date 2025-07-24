import { type Handle, type HandleServerError } from "@sveltejs/kit";

export const handleError: HandleServerError = ({ error }) => {
  console.error("Error", error);
  return {
    message: "Došlo k neočekávané chybě",
  };
};

const handleAuth: Handle = async ({ event, resolve }) => {
  event.cookies.set("session", "token", {
    expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    path: "/",
  });

  return resolve(event);
};

export const handle: Handle = handleAuth;
