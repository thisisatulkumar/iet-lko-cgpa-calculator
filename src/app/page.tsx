import SGPAForm from "@/components/SGPAForm";
import GradingTable from "@/components/GradingTable";
import SGPAFormula from "@/components/SGPAFormula";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            <SGPAForm />

            <div className="border rounded-md">
                <GradingTable />
            </div>

            <div>
                <SGPAFormula />
            </div>
        </div>
    );
}
