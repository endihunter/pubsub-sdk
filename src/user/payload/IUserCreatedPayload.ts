import { IUserProfilePayload } from './IUserProfilePayload';

export interface IUserCreatedPayload {
    userId: string;
    profile: IUserProfilePayload;
}
