import React from "react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick?: () => void;
    isLiked?: boolean;
}

const Like = ({ onClick, isLiked = false }: Props) => {
    const [liked, setLiked] = useState(isLiked);

    const handleClick = () => {
        setLiked(!liked);
        if (onClick) onClick();
    }

    if (liked)
        return <AiFillHeart color="red" size={40} onClick={handleClick} />;
        
    return <AiOutlineHeart color="white" size={40} onClick={handleClick} />;
}

export default Like;    