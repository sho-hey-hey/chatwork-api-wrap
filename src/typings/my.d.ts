import { TaskStatus } from "./constants";
interface MyTaskGetOptions {
    assigned_by_account_id?: number;
    status?: TaskStatus;
}
export declare const status: {
    get: (apiToken: string) => Promise<{} | null>;
};
export declare const tasks: {
    get: (apiToken: string, options?: MyTaskGetOptions) => Promise<{} | null>;
};
export {};
