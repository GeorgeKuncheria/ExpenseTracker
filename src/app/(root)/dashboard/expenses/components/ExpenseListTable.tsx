import { Trash } from "lucide-react";
import React from "react";
import { ExpenseParams } from "../../../../../../types";
import { format } from 'date-fns';

interface ExpenseListTableProps {
    expensesList: ExpenseParams[];
}


function ExpenseListTable(props: ExpenseListTableProps) {
//   const deleteExpense = async (expense) => {
//     const result = await db
//       .delete(Expenses)
//       .where(eq(Expenses.id, expense.id))
//       .returning();

//     if (result) {
//       toast("Expense Deleted!");
//       refreshData();
//     }
//   };


  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg">Latest Expenses</h2>
      <div className="grid grid-cols-4 rounded-tl-xl rounded-tr-xl bg-slate-200 p-2 mt-3">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>
      {props.expensesList.map((expenses, index) => (
        <div className="grid grid-cols-4 bg-slate-50 rounded-bl-xl rounded-br-xl p-2">
          <h2>{expenses.name}</h2>
          <h2>{expenses.amount}</h2>
          <h2>{expenses.createdAt ? format(new Date(expenses.createdAt), 'MMM-dd-yy HH:mm:ss') : 'N/A'}</h2>
          <h2>
            <Trash
            
              className="text-red-500 cursor-pointer"/>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;