'use client'
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    return(
        <>
            <div className="w-100vh flex items-center justify-center h-[100px] bg-slate-300">
                <a onClick={() => {router.push('/')}} className="text-3xl">POKEMON</a>
            </div>
        </>
    );
}

export default Header