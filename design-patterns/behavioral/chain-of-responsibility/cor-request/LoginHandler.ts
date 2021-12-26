import Handler from "./Handler";
import Request from "./Request";
import Response from "./Response";

export default class LoginHandler extends Handler {
  handle(request: Request, response: Response): void {
    if (
      request.body.username === "username" &&
      request.body.password === "password"
    ) {
      response.body = {
        ok: true,
        token: "123456",
      };
    } else {
      response.body = {
        ok: false
      }
    }
  }
}
