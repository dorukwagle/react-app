import { Select } from "flowbite-react";
import categories from "../categories";

interface Props {
    onSelect: (category: string) => void;
}

const Filter = ({ onSelect }: Props) => {
    return (
        <Select id="category" onChange={(e) => onSelect(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </Select>
    );
};

export default Filter;
