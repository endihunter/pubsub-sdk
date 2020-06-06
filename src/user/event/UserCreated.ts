import { PubsubEvent } from '@goparrot/pubsub-event-bus';
import { IUserCreatedPayload } from '../payload';
import { exchangeName } from '../../common';

export class UserCreated extends PubsubEvent<IUserCreatedPayload> {
    exchange = (): string => exchangeName('users');
}
