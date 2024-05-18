import {
    Table,
    TableHeader,
    TableBody,
    TableCell,
    TableColumn,
    TableRow,
    getKeyValue
} from '@nextui-org/table'
import { columns, rows } from '@/constants/technology'

const TechTable = () => {
    return (
        <>
            <Table aria-label='Example'>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

export default TechTable