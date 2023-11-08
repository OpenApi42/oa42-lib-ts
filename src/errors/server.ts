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

export class UnexpectedResponseStatusCode extends ServerError {
  public readonly name = "UnexpectedStatusCode";

  constructor() {
    super(`Unexpected status code for response`);
  }
}

export class MissingRequestContentType extends ServerError {
  public readonly name = "MissingRequestContentType";

  constructor() {
    super(`Missing content-type in request`);
  }
}

export class UnexpectedRequestContentType extends ServerError {
  public readonly name = "UnexpectedRequestContentType";

  constructor() {
    super(`Unexpected content-type in request`);
  }
}

export class ServerRequestParameterValidationFailed extends ServerError {
  public readonly name = "ServerRequestParameterValidationFailed";

  constructor() {
    super(`Server request parameter validation failed`);
  }
}

export class ServerResponseParameterValidationFailed extends ServerError {
  public readonly name = "ServerResponseParameterValidationFailed";

  constructor() {
    super(`Server response parameter validation failed`);
  }
}

export class ServerRequestEntityValidationFailed extends ServerError {
  public readonly name = "ServerRequestEntityValidationFailed";

  constructor() {
    super(`Server request entity validation failed`);
  }
}

export class ServerResponseEntityValidationFailed extends ServerError {
  public readonly name = "ServerResponseEntityValidationFailed";

  constructor() {
    super(`Server response entity validation failed`);
  }
}
