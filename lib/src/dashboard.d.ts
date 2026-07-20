export type ProviderHomePageResponse = {
    id: string;
    name: string;
    email: string;
    emailVerified: number;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    clinicMemberships: {
        clinicId: string;
        userId: string;
        role: string;
        clinic: {
            id: string;
            name: string;
        };
    }[];
};
export interface getProviderHomePageOutput extends ProviderHomePageResponse {
}
//# sourceMappingURL=dashboard.d.ts.map