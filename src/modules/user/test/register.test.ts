import md5 = require('md5')

import { makeRegister } from '../use-cases/register'

test('register', async () => {
    const register = makeRegister({
        create: async (input: { userId: string; password: string }) => {
            return { userId: input.userId, password: md5(input.password) }
        },
    })

    const user = await register({ userId: '123456', password: '123456' })
    expect(user.userId).toBe('123456')
    expect(user.password).not.toBe('123456')
})
