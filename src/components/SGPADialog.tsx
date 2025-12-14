import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface SGPADialogProps {
    sgpa: number;
    open: boolean;
    onOpenChange: () => void;
}

const SGPADialog = ({ sgpa, open, onOpenChange }: SGPADialogProps) => {
    return (
        <Dialog 
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Your SGPA</DialogTitle>
                    <DialogDescription>
                        Calculations follow AKTU's grading scheme; results may vary.
                    </DialogDescription>
                </DialogHeader>

                <div className="rounded-lg border bg-muted px-6 py-4 text-center">
                    <h1 className="text-5xl font-bold">{sgpa}</h1>
                </div>

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Done
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SGPADialog
