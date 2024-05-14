'use client'
import { useState } from "react";

const detailHero = () => {
    const [stats, evo] = useState(true);
    const toggleButton = () => {
        evo(!stats);
    }
    return(
        <div className="px-10">
        {stats ? (
            <div className="adasda">
                <div className="flex justify-around">
                    <button className={stats ? "w-[150px] h-[50px] bg-sky-500 text-white rounded-[50px]" : ""}>Stats</button>
                    <button className="w-[150px] h-[50px] bg-white text-sky-500 rounded-[50px]" onClick={toggleButton} >Evolution</button>
                </div>
                <div className="flex">
                    <ul>
                        <li>HP</li>
                        <li>Attack</li>
                        <li>Defence</li>
                        <li>S Attack</li>
                        <li>S Defence</li>
                        <li>S PD</li>
                    </ul>
                </div>
            </div>
        ) : (
            <div className="adasda">
                <div className="flex justify-around">
                    <button className="w-[150px] h-[50px] bg-white text-sky-500 rounded-[50px]" onClick={toggleButton}>Stats</button>
                    <button className={stats ? "" : "w-[150px] h-[50px] bg-sky-500 text-white rounded-[50px]"}>Evolution</button>
                </div>
                <div className="flex">
                    <p>ini adalah menu evolution</p>    
                </div>
            </div>
        ) 
        }
        </div>
    );
}

export default detailHero