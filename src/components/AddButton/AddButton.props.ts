
export interface AddButtonProps  {
    isAdded: boolean;
    id: number;
    handler: (id: number) => void;
    className?: string;
}