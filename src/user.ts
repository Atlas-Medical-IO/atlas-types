export type PersonalData = {
    id: string,
    userId: string,
    name: string,
    phn: string,
    height: number,
    weight: number,
    medicalHistory: string | null,
    surgicalHistory: string | null,
    allergies: string | null,
    medications: string | null,
    userType: string,
    dateOfBirth: Date | null,
}

export interface GetPersonalDataOutput extends PersonalData {
  fetchedAt: string;
}

// id is server-generated: unknown on first create, known on subsequent updates
export interface updatePersonalDataInput extends Omit<PersonalData, "id"> {
  id?: string;
}
export interface updatePersonalDataOutput extends PersonalData {
  fetchedAt: string;
}
