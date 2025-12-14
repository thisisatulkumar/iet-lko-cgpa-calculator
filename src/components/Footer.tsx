import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-16 w-full border-t">
            <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground space-y-2">
                <p>
                    Made out of boredom by{" "}
                    <Link
                        href="https://github.com/thisisatulkumar"
                        target="_blank"
                        className="font-medium underline underline-offset-4 hover:text-foreground transition"
                    >
                        Atul Kumar
                    </Link>
                </p>

                <p>
                    <Link
                        href="https://github.com/thisisatulkumar/iet-lko-cgpa-calculator"
                        target="_blank"
                        className="underline underline-offset-4 hover:text-foreground transition"
                    >
                        Source Code
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
