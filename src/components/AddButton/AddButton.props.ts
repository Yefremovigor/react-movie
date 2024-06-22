export interface AddButtonProps {
    isAdded: boolean;
    id: string;
    handler: (id: string) => void;
    className?: string;
}