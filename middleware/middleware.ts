import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const requestWrapper = (handler: Function) => {
  return async (request: NextApiRequest, response: NextResponse) => {
    return handler(request, response);
  };
};
