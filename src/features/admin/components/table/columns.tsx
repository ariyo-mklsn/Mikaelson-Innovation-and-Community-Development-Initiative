"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

// Define the shape of a user
export type User = {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  interest: string;
};

// Columns definition
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "joinedDate",
    header: "Joined Date",
    cell: ({ row }) => {
      const v = row.getValue("joinedDate") as string;
      const d = new Date(v);
      return isNaN(d.getTime()) ? v : format(d, "MMM dd, yyyy");
    },
  },
  {
    accessorKey: "interest",
    header: "Interest",
  },
];
