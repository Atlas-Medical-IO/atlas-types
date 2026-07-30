export type NotePayload = {
    id: string;
    note: string;
    isVisible: boolean;
    userId: string;
};
export interface CreateNoteInput extends NotePayload {
}
export interface CreateNoteOutput extends NotePayload {
}
export interface getNotesByPatientIdOutput extends Array<NotePayload> {
}
export interface UpdateNoteInput extends Omit<NotePayload, "id"> {
    id?: string;
}
export interface UpdateNoteOutput extends NotePayload {
}
export interface DeleteNoteInput extends Omit<NotePayload, "id"> {
    id?: string;
}
export interface DeleteNoteOutput extends Omit<NotePayload, "id"> {
    id: string;
}
//# sourceMappingURL=notes.d.ts.map