export type PubsubPlatform =
    | 'users'
    | 'users-v2'
    | 'order'
    | 'store'
    | 'vendor'
    | 'storeitems'
    | 'loyalty'
    | 'promotions'
    | 'notifier'
    | 'payment'
    | 'webstore'
    | 'websocket'
    | 'dashboard'
    | 'delivery'
    | 'campaign';

export const exchangeName: (service: PubsubPlatform) => string = (service: PubsubPlatform): string => 'platform.' + service.toLowerCase();
