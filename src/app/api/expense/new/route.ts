import {createExpense} from '../../../../../lib/actions/expense.actions';

export const POST = async (req: Request) => {
    try {
        const { name, amount, budgetId,createdBy } = await req.json();

        const expense = {
            name,
            amount,
            budgetId,
            createdBy
        };  
        const createExpenseResponse = await createExpense(expense);
        return new Response(JSON.stringify(createExpenseResponse), { status: 200 });
    
    }
    catch (err) {
        return new Response(JSON.stringify("Failed to create Expense"), { status: 500 });
    }

}