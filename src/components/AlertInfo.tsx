import { ReactNode } from "react";
import { Alert } from "flowbite-react";
import { BsFillInfoCircleFill } from "react-icons/bs"

interface Props {
    children: ReactNode;
    onHide?: () => void;
}

function AlertInfo({ children, onHide }: Props) {

    return (
        <Alert
            color="success"
            onDismiss={onHide}
            icon={BsFillInfoCircleFill}
        >
            <span>
                <span className="font-extrabold text-gray-600">Info Alert! </span> 
                {children}
            </span>
        </Alert>
    );
}

export default AlertInfo;
