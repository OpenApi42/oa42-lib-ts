import { ErrorBase } from "./base.js";

/**
 * base class for all server errors so we can easily check where the error came
 * from
 */
export abstract class ServerError extends ErrorBase {
  //
}

export class AuthenticationFailed extends ServerError {
  public readonly name = "AuthenticationFailed";

  constructor() {
    super(`Authentication failed`);
  }
}

export class MethodNotSupported extends ServerError {
  public readonly name = "MethodNotSupportedError";

  constructor() {
    super(`Method not supported`);
  }
}

export class NoRouteFound extends ServerError {
  public readonly name = "NoRouteFound";

  constructor() {
    super(`No route found`);
  }
}

export class OperationNotImplemented extends ServerError {
  public readonly name = "OperationNotImplemented";

  constructor() {
    super(`Operation not implemented`);
  }
}

export class MissingRequestContentType extends ServerError {
  public readonly name = "MissingRequestContentType";

  constructor() {
    super(`Missing content-type in request`);
  }
}

export class UnexpectedResponseStatusCode extends ServerError {
  public readonly name = "UnexpectedStatusCode";

  constructor() {
    super(`Unexpected status code for response`);
  }
}

export class UnexpectedRequestContentType extends ServerError {
  public readonly name = "UnexpectedRequestContentType";

  constructor() {
    super(`Unexpected content-type in request`);
  }
}

export class RequestParameterValidationFailed extends ServerError {
  public readonly name = "Request parameter validation failed";

  constructor() {
    super(`Request parameter validation failed`);
  }
}

export class ResponseParameterValidationFailed extends ServerError {
  public readonly name = "Response parameter validation failed";

  constructor() {
    super(`Response parameter validation failed`);
  }
}

export class RequestEntityValidationFailed extends ServerError {
  public readonly name = "Request parameter validation failed";

  constructor() {
    super(`Request entity validation failed`);
  }
}

export class ResponseEntityValidationFailed extends ServerError {
  public readonly name = "Response entity validation failed";

  constructor() {
    super(`Response entity validation failed`);
  }
}
