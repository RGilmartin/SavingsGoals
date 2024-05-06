import { Payment } from "./payment";

export type SavingGoal = {
    name: string;
    goal_amount: number;
    total_amount_saved: number;
    payments: Payment[] 
}