
export interface AddButtonProps  {
    state: boolean;
    id: number;
    handler: (id: number) => void;
    className?: string;
}