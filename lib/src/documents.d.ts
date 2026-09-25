export type DocumentOwnership = {
    userId?: string;
    clinicId?: string | null;
};
export type DocumentResponse = {
    id: string;
    name: string;
    azureUri: string;
    eventType: string;
    mimeType: string;
    summary: string;
    clinicId: string | null;
};
export interface UploadDocumentOutput extends DocumentResponse {
}
export interface UploadDocumentInput extends DocumentOwnership {
    uploadedBy: string;
}
export interface UpdateDocumentOutput extends DocumentResponse {
}
export interface UpdateDocumentInput extends DocumentOwnership {
    documentId: string;
    uploadedBy: string;
}
export interface DeleteDocumentInput extends DocumentOwnership {
    documentId: string;
}
export interface DeleteDocumentOutput extends DocumentOwnership {
    id: string;
}
export interface fetchAllUserDocumentsOutput extends Array<DocumentResponse> {
}
//# sourceMappingURL=documents.d.ts.map