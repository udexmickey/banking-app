import { ReactElement, ReactNode } from "react";

export type InputProps = {
    name?: string;
    type?: string;
    id?: string;
    role?: string;
    className?: string;
    placeholder?: string;
    ariaLabel?: string;
    ariaDescribedby?: string;
    iconPrefix?: string;
    iconsuffix?: string | ReactElement;
    value?: ReactNode
    required?: boolean;
    disabled?: boolean;
    maxLength?: number;
    height?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}