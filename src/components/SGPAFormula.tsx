import Image from "next/image"

const SGPAFormula = () => {
    return (
        <div className="text-center mt-8 p-4 border rounded-md w-[90vw] md:w-auto">
            <div className="flex justify-center">
                <Image
                    src="/sgpa-formula.png"
                    alt="Σ (Credits x Grade Point) / Total Credits"
                    width={400}
                    height={150}
                    unoptimized={true}
                />
            </div>
        </div>
    )
}

export default SGPAFormula
