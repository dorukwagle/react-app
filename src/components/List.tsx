import { ListGroup } from "flowbite-react";
import { useState } from "react";


interface Props {
    heading: string;
    items: string[];
    onSelect: (item: string) => void;
}

function List({ items, heading, onSelect }: Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1 className="dark:text-white " >{heading}</h1>
            <div className="w-48">
                {items.length === 0 && <p>No items found</p>}
                <ListGroup>
                    {
                        items.map((item, ind) => (
                            <ListGroup.Item className="font-extrabold" key={ind + item}
                            onClick={() => {
                                    setSelectedIndex(ind);
                                    onSelect(item);
                                }
                            }
                            active={ind === selectedIndex}
                            >{item}</ListGroup.Item>
                        ))  
                    }
                </ListGroup>
            </div>
        </>
    );
}

export default List;
