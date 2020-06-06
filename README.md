# Cross Platform Events & Data Models

Contains a prepared set of events & data models in order to be used in conjunction with
`@goparrot/pubsub-event-bus` library.

## Install

```shell script
npm i --save @goparrot/pubsub-sdk
```

## Usage in Producer

```ts
import { EventBus } from '@goparrot/pubsub-event-bus';
import { StoreCreated, IStoreCreatedPayload } from '@goparrot/store-v2-pubsub';

export class SomeService {
    constructor(private readonly eventBus: EventBus) {}

    onSomethingHappened() {
        this.eventBus.publish(new StoreCreated({ storeId: '000112340-252636-1-54653452' }));
    }
}
```

## Usage in Consumer

```ts
import { PubsubEventHandler, PubsubHandler } from '@goparrot/pubsub-event-bus';
import { StoreCreated, IStoreCreatedPayload } from '@goparrot/store-v2-pubsub';

@PubsubEventHandler(StoreCreated)
export class SomeEventConsumerHandler extends PubsubHandler implements IEventsHandler<IStoreCreatedPayload> {
    handle(payload: IStoreCreatedPayload): any {
        // do something very cool.
    }
}
```
