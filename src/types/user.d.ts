import { EUserType } from '~/lib/enums/EUserType'

export type User = {
    firstName: string,
    lastName: string,
    role: EUserType,
    email: string
}
