import WarningPage from "@/components/warning-page";
import { AlertTriangle } from "lucide-react";

export default function Page() {
    return(
        <div>
            <div className="w-full space-y-12 min-h-screen bg-white md:bg-white lg:bg-background-leao xl:bg-background-leao">
                <WarningPage />
            </div>
        </div>
    )
}