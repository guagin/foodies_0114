import md5 from 'md5'

import { makeLogin } from '../use-cases/login'
import { ErrorCode } from '../error'

test('login', async () => {
    const login = makeLogin({
        get: async (userId: string) => {
            return {
                password: md5('123456'),
                userId,
            }
        },
    })

    const user = await login({ userId: '123456', password: '123456' })
    expect(user).not.toBe(undefined)
})

test('login with wrong password', async () => {
    const login = makeLogin({
        get: async (userId: string) => {
            return {
                password: md5('12345678'),
                userId,
            }
        },
    })
    try {
        const user = await login({ userId: '123456', password: '123456' })
        expect(user).not.toBe(undefined)
    } catch (e) {
        expect(e.errorCode).not.toBe(ErrorCode.UserNotFound)
    }
})
