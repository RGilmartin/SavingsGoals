import Link from "next/link";
import AddSavings from "../utils/components/addsavings";
import { SavingGoal } from "../utils/types/savingGoal";
import firebaseApp from '../../Firebase/clientApp';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore } from "firebase/firestore";

export default function Dashboard() {

    const [goals, goalsLoading, goalsError] = useCollection(
        getFirestore(firebaseApp), {}
    );


    const tableItems:SavingGoal[] = [
        {
            name: "Car Down Payment",
            goal_amount: 15000,
            total_amount_saved: 1000,
            payments: []
        },
        {
            name: "Tires",
            goal_amount: 600,
            total_amount_saved: 50,
            payments: []
        }
    ]

    return (
        <div>
            <h1 className="text-3xl m-3 mb-20">Money Dashboard</h1>
            {/* savings goals */}
            <div>
                <div>
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="items-start justify-between md:flex">
                            <div className="max-w-lg">
                                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                                    Savings
                                </h3>
                            </div>
                            <div className="mt-3 md:mt-0">
                                <Link
                                    href="/add"
                                    className="inline-block px-4 py-2 text-white duration-150 font-medium bg-cyan-600 rounded-lg hover:bg-cyan-500 active:bg-cyan-700 md:text-sm"
                                >
                                    Add Goal
                                </Link>
                            </div>
                        </div>
                        <div className="mt-12 relative h-max overflow-auto shadow-sm border rounded-lg p-2">
                            <table className="w-full table-auto text-sm text-left">
                                <thead className="text-gray-600 font-medium border-b">
                                    <tr>
                                        <th className="py-3 pr-6">name</th>
                                        <th className="py-3 pr-6">Goal</th>
                                        <th className="py-3 pr-6">amount</th>
                                        <th className="py-3 pr-6">% saved</th>
                                        <th className="py-3 pr-6"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 divide-y">
                                    {
                                        tableItems.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                                                <td className="pr-6 py-4 whitespace-nowrap">${item.goal_amount}</td>
                                                <td className="pr-6 py-4 whitespace-nowrap">${item.total_amount_saved}</td>
                                                <td className="pr-6 py-4 whitespace-nowrap">{((item.total_amount_saved / item.goal_amount) * 10).toFixed(2)}%</td>
                                                <td className="text-right whitespace-nowrap">
                                                    <Link href="javascript:void()" className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                                        Manage
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}