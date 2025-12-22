import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { MARKS_TO_GRADE } from "@/core/constants/grading"

const GradingTable = () => {
    return (
        <Table className="space-y-4 w-[90vw] md:w-[50vw]">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">Min</TableHead>
                    <TableHead className="text-center">Max</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                    <TableHead className="text-center">Point</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {MARKS_TO_GRADE.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell className="text-center">{row.min}</TableCell>
                        <TableCell className="text-center">{row.max}</TableCell>
                        <TableCell className="text-center">{row.grade}</TableCell>
                        <TableCell className="text-center">{row.point}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default GradingTable
