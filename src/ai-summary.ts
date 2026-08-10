// Staging file for types destined for @Atlas-Medical-IO/atlas-types.
// Mirrors that package's per-domain file convention (see user.ts/documents.ts
// there) so this can be dropped in with minimal changes once promoted.
export interface AISummaryContent {
    medical_history?: string;
    surgical_history?: string;
    allergies?: string;
    medications?: string;
    family_history?: string;
    social_history?: string;
    // Freeform narrative from generateAiGeneralSummary — the non-interactive
    // counterpart to Python's "General AI Query" panel.
    general_summary?: string;
    [key: string]: string | undefined; // allow additional fields beyond the known set
}


export type AIGeneralSummaryPayload = {
    id: string;
    userId: string;
    summary: AISummaryContent;
};

export interface GetAiGeneralSummaryOutput extends AIGeneralSummaryPayload {
}
