import { KBarAnimator, KBarPortal, KBarPositioner, KBarResults, KBarSearch, useMatches } from "kbar";
import React from "react";

export const KBar = () => {
    //hooks
    const { results } = useMatches();

    return <KBarPortal >

        <KBarPositioner className="bg-black/50 blackdrop-blur-sm opacity-100">
            <KBarAnimator className="bg-white rounded-xl shadow-xl flex flex-col space-x-4 w-[35rem] overflow-hidden">
                {/* Search Container */}
                <div className="flex px-2 test-xl font-medium text-slate-500">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 aspect-square ml-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <KBarSearch className="w-full outline-none pl-4 pr-6 py-4 selection:bg-sky-100 selection:text-black" />
                </div>
                <div className="flex flex-col ">
                    {/* search results */}
                    {results && results.length != 0 && <div className="border-t-2 border-slate-100 pb-3 pt-2">
                        <KBarResults items={results}
                            onRender={({ active, item }) =>
                                typeof item == 'string' ?
                                    <div className="text-sm uppercase px-8 pt-3 pb-1 text-slate-500 font-black tracking-widest">
                                        {item}
                                    </div>
                                    :
                                    <div className={`flex flex-col px-4 ${active && 'cursor-pointer'}`}>
                                        <div className={`flex pl-4 py-3 pb-3 rounded-xl text-slate-500 transition-colors ${active ? 'bg-slate-100 text-slate-700' : 'text-slate-500'}`}>
                                            {/* icon */}
                                            {item.icon && <div className="flex items-center ml-0 mr-3">
                                                {item.icon}
                                            </div>}
                                            {/* Name */}
                                            <div className="flex flex-col font-semibold">
                                                <span>{item.name}</span>
                                            </div>
                                        </div>

                                    </div>

                            }></KBarResults>

                    </div>}

                </div>
            </KBarAnimator>
        </KBarPositioner>
    </KBarPortal>
}