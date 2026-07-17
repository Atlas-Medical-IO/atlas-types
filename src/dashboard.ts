import { PatientPayload } from "./patient"


export type ProviderHomePageResponse = {
    id: string
    name: string
    email: string
    emailVerified: number
    image: string | null
    createdAt: Date
    updatedAt: Date
    patients: PatientPayload[]
    clinicMemberships: {
        clinicId: string
        userId: string
        role: string
        clinic: { id: string; name: string }
    }[]
}