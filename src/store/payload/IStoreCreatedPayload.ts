import { StoreType } from '../interface';

export interface IStoreCreatedPayload {
    storeId: string;
    merchantId: string;
    type: StoreType;
    title: string;
}
