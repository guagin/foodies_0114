import { find } from 'lodash'
import { UserNotFound } from '../../error'
import { UserDTO, UserRepository } from '../interface/user-repository'
import { CreateUserInput } from '../../user'
import md5 = require('md5')

export class UserRepositoryLocalImpl implements UserRepository {
    private datas: UserDTO[]
    constructor() {
        this.datas = []
    }

    async get(userId: string): Promise<UserDTO> {
        const result: UserDTO = find(this.datas, data => {
            return data.userId === userId
        })
        if (!result) {
            throw new UserNotFound(`${userId}`)
        }
        return result
    }

    async create(input: CreateUserInput): Promise<UserDTO> {
        const user = {
            userId: input.userId,
            password: md5(input.password),
        }
        this.datas.push(user)
        return user
    }
}
