'use client'
import { useRouter } from "next/navigation";

const Hero = ({name, img, id, types } : any) => {

    const router = useRouter();
    const pindahHalaman = () => {
        router.push(`/Detail/${name}`)
    }
    return(
        <>
            <div onClick={pindahHalaman} className="flex justify-between items-center h-[80px] px-5 hover:bg-slate-100 ">
                <div className="flex items-center">
                    <div className="rounded-full h-15 w-15">
                        <img src={img} alt={name}/>
                    </div>
                    <div className="flex flex-col ml-5">
                        <h3>{name}</h3>
                        <p>#{id}</p>
                    </div>
                </div>
                <div className="flex">
                    {types.map((type: any, index: number) => (
                        <p className="mx-3" key={index}>{type.type.name}</p>
                    ))}
                </div>
            </div>
            <div className="border my-2 mx-5"></div>
            
        </>
    );
}

export default Hero