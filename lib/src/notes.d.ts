export type NotePayload = {
    id: string;
    note: string;
    isVisible: boolean;
};
export interface CreateNoteInput extends NotePayload {
}
export interface CreateNoteOutput extends NotePayload {
}
export interface getNotesByPatientIdOutput extends Array<NotePayload> {
}
//# sourceMappingURL=notes.d.ts.map