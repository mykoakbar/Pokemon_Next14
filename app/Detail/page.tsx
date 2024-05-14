'use client'

import Header from '@/app/components/Header';
import DetailHero from '@/app/components/DetailHero'

const Detail = () => {
    return(
        <>
            <Header />
            <div className="bg-sky-300 flex justify-center items-end w-full h-[200px]">
                <img src="#" alt="image pokemon" className="bg-red-500 w-[150px] h-[150px] rounded-full pt-5"/>
            </div>
            <DetailHero />
        </>
    );
}

export default Detail