"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { columns, User } from "./columns";

interface DataTableProps {
  data: User[];
}

export function AdminDataTable({ data }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border max-w-6xl mx-auto p-5 bg-white text-gray-800 dark:bg-black/60 dark:text-white">
      <div className="mb-5">
        <h1 className="font-bold text-lg md:text-xl">
          Recent Waitlist Signups ({data.length})
        </h1>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="dark:bg-black/70">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-teal-200/40">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-5">
                    {cell.column.columnDef.cell
                      ? flexRender(cell.column.columnDef.cell, cell.getContext())
                      : String(cell.getValue() ?? "")}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
