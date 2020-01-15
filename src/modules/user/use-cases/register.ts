import { User } from '../user'

interface MakeResigerInput {
    create(input: { userId: string; password: string }): Promise<User>
}

interface RegisterInput {
    userId: string
    password: string
}

export const makeRegister: (input: MakeResigerInput) => (registerInput: RegisterInput) => Promise<User> = input => {
    const { create } = input
    return async registerInput => {
        const { userId, password } = registerInput
        const user = await create({ userId, password })
        return user
    }
}
