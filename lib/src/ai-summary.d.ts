export interface AISummaryContent {
    medical_history?: string;
    surgical_history?: string;
    allergies?: string;
    medications?: string;
    family_history?: string;
    social_history?: string;
    general_summary?: string;
    [key: string]: string | undefined;
}
export type AIGeneralSummaryPayload = {
    id: string;
    userId: string;
    clinicId: string | null;
    summary: AISummaryContent;
};
export interface GetAiGeneralSummaryOutput extends AIGeneralSummaryPayload {
}
//# sourceMappingURL=ai-summary.d.ts.map