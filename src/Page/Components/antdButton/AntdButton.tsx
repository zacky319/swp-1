
import { Button, ButtonProps } from "antd";
import React from "react";

interface AntdButtonProps extends ButtonProps {
    endIcon?: React.ReactNode
}
export const AntdButton = React.forwardRef
    <HTMLAnchorElement, AntdButtonProps
    >(({ endIcon, className = "", onClick, children, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                type="default"
                size="large"
                shape="round"
                // className={`${className}`}
                className={`flex w-44 mg mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                {...props}
                onClick={endIcon ? undefined : onClick}
            >
                {children}
            </Button>
        )
    })