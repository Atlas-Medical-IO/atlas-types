// Ownership must satisfy the server's CHECK constraint: exactly one of the two is set.
export type DocumentOwnership = {
    userId?: string
    patientId?: string
}

export type DocumentResponse = {
    id: string
    name: string
    azureUri: string
    eventType: string
    mimeType: string
    summary: string
}