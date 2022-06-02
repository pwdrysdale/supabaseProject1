export type Todo = {
    id: number;
    title: string;
    description?: string;
    completed_at: Date | null;
    createdAt: Date;
}