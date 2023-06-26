import { Button } from "antd";
import { FC } from "react";
import { Link, LinkProps, useNavigate } from "react-router-dom";
interface IhcLinkProps extends LinkProps {
    disabled?: boolean

}
export const IhcLink: FC<IhcLinkProps> = ({
    className,
    disabled = false,
    children,
    ...props
}) => {
    const navigate = useNavigate();
    return (
        <Button
            type="link"
            size="large"
            shape="round"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
            onClick={() => { navigate(props.to, { replace: true }); }}
        >
            <Link {...props}
                style={{ textDecorationSkipInk: "none", textUnderlineOffset: "4px" }}>
                {children}
            </Link>
        </Button>
    )
}