export interface RefreshTokenInput {
    readonly username: string;
    readonly refreshToken: string;
}

export interface RefreshTokenOutput {
    readonly idToken: string;
    readonly refreshToken: string;
    readonly accessToken: string;
}