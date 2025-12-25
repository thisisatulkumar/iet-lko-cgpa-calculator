import SGPAForm from "@/components/SGPAForm";
import GradingTable from "@/components/GradingTable";
import SGPAFormula from "@/components/SGPAFormula";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Tabs 
                defaultValue="1st-year" 
                className="w-screen md:w-[50vw] flex flex-col items-center pt-4"
            >
                <TabsList>
                    <TabsTrigger value="1st-year">1st Year</TabsTrigger>
                    <TabsTrigger value="2nd-year">2nd Year</TabsTrigger>
                    <TabsTrigger value="3rd-year">3rd Year</TabsTrigger>
                    <TabsTrigger value="4th-year">4th Year</TabsTrigger>
                </TabsList>

                <TabsContent value="1st-year">
                    <SGPAForm />
                </TabsContent>

                <TabsContent value="2nd-year">
                    <p className="mb-2">
                        Coming soon...
                    </p>
                </TabsContent>

                <TabsContent value="3rd-year">
                    <p className="mb-2">
                        Coming soon...
                    </p>
                </TabsContent>

                <TabsContent value="4th-year">
                    <p className="mb-2">
                        Coming soon...
                    </p>
                </TabsContent>
            </Tabs>

            <div className="border rounded-md">
                <GradingTable />
            </div>

            <div>
                <SGPAFormula />
            </div>
        </div>
    );
}

export default Home;
