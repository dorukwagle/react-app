import { useState } from "react";
import ButtonPrimary from "./Buttons";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ maxChars=50, children }: Props) => {
    const [isShowMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => setShowMore(true);
    const handleShowLessClick = () => setShowMore(false);

    
    if (children.length <= maxChars)
    return <p>{children}</p>
    
    const text = isShowMore? children : children.substring(0, maxChars + 1);

    return (
        <>
            <p>{text}{!isShowMore && "..."}</p>
            <ButtonPrimary color="purple" onClick={isShowMore? handleShowLessClick : handleShowMoreClick}>
                {isShowMore? "Less" : "More"}
            </ButtonPrimary>
        </>
    );
}

export default ExpandableText;