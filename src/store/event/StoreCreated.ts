import { PubsubEvent } from '@goparrot/pubsub-event-bus';
import { IStoreCreatedPayload } from '../payload';
import { exchangeName } from '../../common';

export class StoreCreated extends PubsubEvent<IStoreCreatedPayload> {
    exchange = (): string => exchangeName('store');
}
