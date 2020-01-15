export interface UserDTO {
    userId: string
    password: string
}

export interface UserRepository {
    get(userId: string): Promise<UserDTO>
}
