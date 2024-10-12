import { useEffect, useState } from "react";
import SparklesText from "./components/ui/sparkles-text";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { PiRankingFill } from "react-icons/pi";
import NumberTicker from "./components/ui/number-ticker";



export function CodingProfile() {

    const [name, setName] = useState('');
    // const [country, setCountry] = useState('');
    const [reputation, setReputation] = useState(0);
    const [ranking, setRanking] = useState(0)
    const [solved, setSolved] = useState(0);
    const [easy, setEasy] = useState(0);
    const [medium, setMedium] = useState(0);
    const [hard, setHard] = useState(0);
    // const [submission, setSubmission] = useState();
    // const [photo, setPhoto] = useState();
    const [bno, setBno] = useState(0);
    const [badges, setBadges] = useState([{
        id: "",
        icon: "",
        displayName: ""
    }]);
    useEffect(() => {
        const getuser = async () => {
            const res = await fetch('https://alfa-leetcode-api.onrender.com/Zeeshan_Hasan_Khan');
            const res1 = await fetch('https://alfa-leetcode-api.onrender.com/Zeeshan_Hasan_Khan/solved');
            const res2 = await fetch('https://alfa-leetcode-api.onrender.com/Zeeshan_Hasan_Khan/badges');
            const user = await res.json();
            const questions = await res1.json();
            const badge = await res2.json();
            console.log('Fetched');
            setBno(badge.badgesCount)
            setBadges(badge.badges)
            // console.log("Badges" + JSON.stringify(badge));
            console.log(JSON.stringify(badges) + 'testing')
            setName(user.name);
            // setCountry(user.country);
            setReputation(user.reputation)
            setRanking(user.ranking);
            // setPhoto(user.avatar)


            setSolved(questions.solvedProblem);
            setEasy(questions.easySolved);
            setMedium(questions.mediumSolved);
            setHard(questions.hardSolved);
            // setSubmission(questions.totalSubmissionNum[0].submissions)
        }


        getuser();

    }, []);

    return (<>

        <SparklesText className="flex justify-center text-4xl font-mono" text="Coding Profiles" />
        <div className="lg:flex lg:justify-center">
            <div className="  border rounded-sm shadow-xl m-2 p-2  lg:w-[50%]  " >
                {/* Navbar */}
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <TbBrandLeetcode className="" size={35} />
                        <span className=" ml-4 text-violet-500 text-xl hover:cursor-context-menu">{name}</span>

                    </div>
                    <div className="text-sm">

                        <span className="flex flex-row"> <PiRankingFill className="text-xl text-green-300" />
                            Ranking {ranking}</span>

                        <span className="flex flex-row"><FaStar className="text-xl text-yellow-300" />Reputation {reputation}</span>
                    </div>
                </div>
                {/* Information */}
                <div className="flex flex-row justify-between">

                    <div className="Stats">

                        <div className="text-2xl ">Solved    <NumberTicker className=" ml-10" value={solved} /> </div>
                        <div className="text-2xl text-green-400">Easy    <NumberTicker className=" text-green-600 ml-16" value={easy} /> </div>
                        <div className="text-2xl text-yellow-400">Medium <NumberTicker className=" text-yellow-600 ml-6" value={medium} /></div>
                        <div className="text-2xl text-rose-600">Hard     <NumberTicker className=" text-red-600 ml-16" value={hard} /></div>
                    </div>
                    <div className="flex flex-col Badges">
                        <span className="text-2xl ">Badges  <NumberTicker className="text-1xl" value={bno - 2} /></span>
                        <div className="flex flex-row">
                            {/* 2 badges isn't coming through API */}
                            {badges.slice(0, bno - 2).map((badge) => (
                                <div key={badge.id} className="size-10">
                                    <img src={badge.icon} className="mt-2" alt={badge.displayName} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>)
}


