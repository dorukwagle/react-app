import { Table, Select, Label, Button } from "flowbite-react";
import { ChangeEvent } from "react";

interface RowProps {
    id: number;
    data: { desc: string; price: number; category: string };
}

interface Props {
    headings: string[];
    rows: RowProps[];
    onSelect?: (category: string) => void;
    onDelete?: (item: number) => void;
}

const Expenses = ({ headings, rows, onSelect, onDelete }: Props) => {
    const getHeadings = () =>
        headings.map((heading, index) => (
            <Table.HeadCell key={index}>{heading}</Table.HeadCell>
        ));

    const getRow = (id: number, row: RowProps["data"]) => (
        <Table.Row
            key={id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
            <Table.Cell>
                <span className="font-extrabold">{row.desc}</span>
            </Table.Cell>
            <Table.Cell>
                <span className="font-extrabold">${row.price}</span>
            </Table.Cell>
            <Table.Cell>
                <span className="font-extrabold">{row.category}</span>
            </Table.Cell>
            <Table.Cell>
                <Button
                    color="red"
                    onClick={() => onDelete && onDelete(id)}
                    pill={true}
                    outline={true}
                    size="sm"
                >
                    Delete
                </Button>
            </Table.Cell>
        </Table.Row>
    );

    const getTotalPrice = () => {
        const prices = rows.map((row) => row.data.price);
        return prices.reduce((accum, price) => accum + price);
    };

    const handleCategorySelection = (e: ChangeEvent<HTMLSelectElement>) =>
        onSelect && onSelect(e.target.value);

    return (
        <>
            <div className="mb-5">
                <div className="mb-2 block">
                    <Label htmlFor="category" value="Category" />
                </div>
                <Select id="category" onChange={handleCategorySelection}>
                    <option value="allcategories">All Categories</option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </Select>
            </div>

            <Table>
                <Table.Head>
                    {getHeadings()}
                    <Table.HeadCell>
                        <span></span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {rows.map((row) => getRow(row.id, row.data))}
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <span className="font-extrabold">Total</span>
                        </Table.Cell>
                        <Table.Cell>
                            <span className="font-extrabold">
                                ${getTotalPrice()}
                            </span>
                        </Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
};

export default Expenses;
