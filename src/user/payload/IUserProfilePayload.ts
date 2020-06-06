import { UserSourceType } from '../interface';

export interface IUserProfilePayload {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    source?: UserSourceType;
}
