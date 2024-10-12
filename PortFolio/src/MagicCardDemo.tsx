import { useTheme } from "./components/ui/theme-provider";

import { MagicCard } from "@/components/ui/magic-card";
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.jpg';
import c4 from './assets/c4.jpg';
import c5 from './assets/c5.jpg';
import c6 from './assets/c6.png';
export function MagicCardDemo() {
    const { theme } = useTheme();
    return (
        <div
            className=
            "flex flex-col gap-5 mx-9 my-9 lg:flex-row lg:grid lg:grid-cols-3"

        >
            <MagicCard
                className=" cursor-pointer "
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <img src={c1} className="" alt="Certificate" />
            </MagicCard>
            <MagicCard
                className="cursor-pointer "
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            > <img src={c2} className="" alt="Certificate" />
            </MagicCard>
            <MagicCard
                className="cursor-pointer"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            > <img src={c3} className="" alt="Certificate" />
            </MagicCard>
            <MagicCard
                className="cursor-pointer"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            > <img src={c4} className="" alt="Certificate" />
            </MagicCard>
            <MagicCard
                className="cursor-pointer"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            > <img src={c5} className="" alt="Certificate" />
            </MagicCard>
            <MagicCard
                className="cursor-pointer"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            > <img src={c6} className="h-full lg:h-full" alt="Certificate" />
            </MagicCard>
        </div>

    );
}
