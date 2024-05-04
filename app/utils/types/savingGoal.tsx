import { Payment } from "./payment";

export type SavingGoal = {
    goal_amount: number;
    total_amount_saved: number;
    payments: Payment[] 
}