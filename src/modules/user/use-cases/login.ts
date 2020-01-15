import md5 from 'md5'

import { User } from '../user'
import { UserPasswordNotPatch } from '../error'

interface MakeLoginInput {
    get(userId: string): Promise<User>
}

interface LoginInput {
    userId: string
    password: string
}

export const makeLogin: (input: MakeLoginInput) => (loginInput: LoginInput) => Promise<User> = input => {
    const { get } = input
    return async loginInput => {
        const { userId, password } = loginInput
        // get user
        const user = await get(userId)
        // hash input password
        const { password: userPassword } = user
        // compare password with user.
        if (md5(password) !== userPassword) {
            throw new UserPasswordNotPatch(`${userId}, ${password}`)
        }

        return user
    }
}
