export interface User {
    email: string;
    password: string;
    roles: number[];
    accessToken?: string;
}
