import { Table, Button } from "flowbite-react";

interface RowProps {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    headings: string[];
    rows: RowProps[];
    onDelete: (item: number) => void;
}

const Expenses = ({ headings, rows, onDelete }: Props) => {
    if (!rows.length) return null;

    const getHeadings = () =>
        headings.map((heading, index) => (
            <Table.HeadCell key={index}>{heading}</Table.HeadCell>
        ));

    const getRow = (row: RowProps) => (
        <Table.Row
            key={row.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
            <Table.Cell>
                <span className="font-extrabold">{row.description}</span>
            </Table.Cell>
            <Table.Cell>
                <span className="font-extrabold">${row.amount}</span>
            </Table.Cell>
            <Table.Cell>
                <span className="font-extrabold">{row.category}</span>
            </Table.Cell>
            <Table.Cell>
                <Button
                    gradientDuoTone="pinkToOrange"
                    onClick={() => onDelete(row.id)}
                    pill={true}
                    outline={true}
                    size="sm"
                >
                    Delete
                </Button>
            </Table.Cell>
        </Table.Row>
    );

    const getTotalAmount = () => rows.reduce((accum, row) => accum + row.amount, 0);

    return (
        <Table>
            <Table.Head>
                {getHeadings()}
                <Table.HeadCell>
                    <span></span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {rows.map((row) => getRow(row))}
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                        <span className="font-extrabold">Total</span>
                    </Table.Cell>
                    <Table.Cell>
                        <span className="font-extrabold">
                            ${getTotalAmount()}
                        </span>
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default Expenses;
