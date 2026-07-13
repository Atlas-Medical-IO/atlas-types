export type PersonalData = {
    id: string;
    name: string;
    phone: string;
    height: number;
    weight: number;
    medicalHistory: string | null;
    surgicalHistory: string | null;
    allergies: string | null;
    medications: string | null;
    dateOfBirth: Date;
};
export interface GetPersonalDataOutput extends PersonalData {
    fetchedAt: string;
}
export interface updatePersonalDataInput extends PersonalData {
}
export interface updatePersonalDataOutput extends PersonalData {
    fetchedAt: string;
}
//# sourceMappingURL=user.d.ts.map