import { find } from 'lodash'
import { UserNotFound } from '../../error'
import { UserDTO } from '../interface/user-repository'

export class UserRepositoryLocalImpl {
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
}
