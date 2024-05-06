import Link from "next/link";
import { useEffect, useState } from "react";

export default function AddSavings() {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [contrib, setContrib] = useState(0);


    return (
        // savings input
        <div className="m-2">
            <div className="max-w-md m-2">
                <label className="block py-2 text-gray-600">
                    Goal Name
                </label>
                <div className="relative mt-2 max-w-xs text-gray-500">
                    <input 
                        type="text"
                        placeholder="Emercency Fund"
                        className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
            </div>
            {/* total amount */}
            <div className="m-2">
                <label className="text-gray-600">
                    Amount
                </label>
                <div className="relative mt-2 max-w-xs text-gray-500">
                    <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                        &#x24;
                    </span>
                    <input
                        type="number"
                        placeholder="0.00"
                        className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <select className="text-sm bg-transparent outline-none px-1 rounded-lg h-full">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>MRO</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* saved so far */}
            <div className="m-2">
                <label className="text-gray-600">
                    Saved so Far
                </label>
                <div className="relative mt-2 max-w-xs text-gray-500">
                    <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                        &#x24;
                    </span>
                    <input
                        type="number"
                        placeholder="0.00"
                        className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <select className="text-sm bg-transparent outline-none px-1 rounded-lg h-full">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>MRO</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* submit button */}
            <button
                className="px-3 py-3 text-cyan-600 bg-cyan-50 rounded-lg duration-150 hover:bg-cyan-100 active:bg-cyan-200">
                <Link href={"/dashboard"}>Submit</Link>
            </button>
        </div>
    );
    
}