import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone?: string;
}
export type Time = bigint;
export interface backendInterface {
    getInquiries(): Promise<Array<ContactInquiry>>;
    submitInquiry(name: string, email: string, message: string, phone: string | null): Promise<void>;
}
