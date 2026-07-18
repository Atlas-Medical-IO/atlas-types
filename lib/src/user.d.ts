export type PersonalData = {
    id: string;
    userId: string;
    name: string;
    phone: string;
    height: number;
    weight: number;
    medicalHistory: string | null;
    surgicalHistory: string | null;
    allergies: string | null;
    medications: string | null;
    userType: string;
    dateOfBirth: Date | null;
};
export interface GetPersonalDataOutput extends PersonalData {
    fetchedAt: string;
}
export interface updatePersonalDataInput extends Omit<PersonalData, "id"> {
    id?: string;
}
export interface updatePersonalDataOutput extends PersonalData {
    fetchedAt: string;
}
//# sourceMappingURL=user.d.ts.map