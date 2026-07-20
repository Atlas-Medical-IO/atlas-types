// Staging file for types destined for @Atlas-Medical-IO/atlas-types.
// Mirrors that package's per-domain file convention (see user.ts/documents.ts
// there) so this can be dropped in with minimal changes once promoted.

export type AIGeneralSummaryPayload = {
    id: string;
    userId: string;
    summary: string;
};

export interface GetAiGeneralSummaryOutput extends AIGeneralSummaryPayload {
}
