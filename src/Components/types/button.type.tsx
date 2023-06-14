import { ElementType } from "react";
import { SizeEnum } from "../Enum/size.enum";

export type ButtonProps = {
    name: string;
    type: string;
    id?: string;
    role?: string;
    className?: string;
    ariaLabel?: string;
    ariaDescribedby?: string;
    as?: ElementType;
    size?: SizeEnum;
    onClick?: React.MouseEventHandler
    defaultValue?: string;
    disabled?: string;
}