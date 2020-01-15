export interface CreateUserInput {
    userId: string
    password: string
}

export interface User {
    userId: string
    password: string
}

export const buildMakeUser: () => (input: CreateUserInput) => User = () => {
    return (input: CreateUserInput) => {
        const { userId, password } = input
        return {
            userId,
            password,
        }
    }
}

export class UserImpl implements User {
    constructor(public userId: string, public password: string) {}
}
