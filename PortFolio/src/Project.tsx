import Safari from "./components/ui/safari";
import p2 from "./assets/p2.png";
import SparklesText from "./components/ui/sparkles-text";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";

import { IoIosLink } from "react-icons/io";


export function Project() {
    return (
        <>
            <SparklesText className="flex justify-center text-5xl font-mono  selection:text-blue-400 cursor-context-menu" text="Projects" />

            <div className="grid grid-cols-1 m-10   lg:grid lg:grid-cols-2">

                <div className="grid grid-cols-1  border  shadow-xl rounded-sm p-2">
                    <h3 className=" flex flex-row  justify-between  text-2xl  font-serif cursor-context-menu selection:text-blue-400">Corona Virus Statistic Dashboard <a target="_blank" href="https://covid-19-tracker-zeeshan.netlify.app/"><IoIosLink className="cursor-pointer hover:text-violet-600" size="40" /></a></h3>
                    <div className="mt-3  mb-1 flex flex-row justify-end gap-3">
                        <FaReact className="cursor-pointer hover:text-blue-600" size="40" />
                        <FaHtml5 className="cursor-pointer hover:text-orange-600" size="40" />
                        <IoLogoCss3 className="cursor-pointer hover:text-blue-600" size="40" />
                        <RiTailwindCssFill className="cursor-pointer  hover:text-violet-600" size="40" />

                    </div>
                    <Safari
                        url="https://covid-19-tracker-zeeshan.netlify.app/"

                        className="size-[100%] lg:size-[100%]"
                        src={p2}
                    />
                    <ul className=" mt-2 italic p-1 text-pretty selection:text-blue-400  cursor-context-menu">
                        <li>•Developed the front-end of the application using React,HTML, CSS, and JavaScript.
                        </li>
                        <li>
                            •Integrated the application with an API to fetch the latest data on Corona Virus statistics.

                        </li>
                        <li>
                            •Implemented map and chart visualizations using a JavaScript library.
                        </li>
                        <li>
                            •Worked collaboratively with a team of developers to deploy the application to a cloud
                            hosting platform.
                        </li>
                    </ul>


                </div>
                {/* Second Project */}

            </div>
        </>
    );
}