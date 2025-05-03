import React from "react";

export interface ButtonProps {
    children?: React.ReactElement | string;
    title?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
