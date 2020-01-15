export enum ErrorCode {
    UserNotFound = -1,
}

export class UserError extends Error {
    constructor(public code: ErrorCode, msg: string) {
        super(msg)
    }
}

export class UserNotFound extends UserError {
    constructor(msg: string) {
        super(ErrorCode.UserNotFound, msg)
    }
}

export class UserPasswordNotPatch extends UserError {
    constructor(msg: string) {
        super(ErrorCode.UserNotFound, msg)
    }
}
