import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  NextMiddleware,
} from "next/server";

export const middleware: NextMiddleware = (request, event) => {
  // can make authentication to the route using token (from localstorage)
  // if valid can redirect with next or for login screen
  const response = NextResponse.next(); // can also use redirect method
  response.cookie("course", "mca"); // can set a cookies
  return response;
};
