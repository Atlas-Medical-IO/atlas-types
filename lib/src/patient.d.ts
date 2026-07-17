export type PatientPayload = {
    id: string;
    name: string;
    phone: string | null;
    height: number | null;
    weight: number | null;
    sex: string | null;
    personalHealthNumber: string | null;
    dateOfBirth: Date | null;
};
export interface CreatePatientInput extends PatientPayload {
}
export interface CreatePatientOutput extends PatientPayload {
}
export interface GetProviderPatientsOutput extends Array<PatientPayload> {
}
//# sourceMappingURL=patient.d.ts.map