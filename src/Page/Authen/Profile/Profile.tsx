import { useContext } from "react";
import { IhcLink } from "../../Components/Link/IhcLink";
import { LanguageContext } from "../../../contexts/LanguageContext";
import ProfileDetail from "./ProfileDetail";

export default function Profile() {

    const {
        text: {
            pages404,
            common: { button }
        },
        routs
    } = useContext(LanguageContext)!;
    return (

        <>
            <div className="flex gap-5 p-1 m-1 flex-wrap justify-center">
                <div className="w-72 flex flex-col gap-5 p-1 m-1">
                    <div className="bg-slate-300  rounded-lg">
                        <div className="flex items-center justify-center pt-10 flex-col">
                            <img src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg" className="rounded-full w-36" />
                            <h1 className="text-gray-800 font-semibold text-xl mt-5">Bae Suzy</h1>
                            <h1 className="text-gray-500 text-sm">Seoul, South Korea</h1>
                            <h1 className="text-gray-500 text-sm p-4 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h1>
                        </div>
                        <div className="flex justify-between p-4">
                            <div>
                                <h1 className="text-xs uppercase text-gray-500">Membership</h1>
                                <h1 className="text-xs text-yellow-500">Gold Member</h1>
                            </div>
                            <div>
                                <button className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">Renew</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-300  rounded-lg">
                        <div className="flex items-center justify-center pt-10 flex-col">
                            <img src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg" className="rounded-full w-36" />
                            <h1 className="text-gray-800 font-semibold text-xl mt-5">Bae Suzy</h1>
                            <h1 className="text-gray-500 text-sm">Seoul, South Korea</h1>
                            <h1 className="text-gray-500 text-sm p-4 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h1>
                        </div>
                        <div className="flex justify-between p-4">
                            <div>
                                <h1 className="text-xs uppercase text-gray-500">Membership</h1>
                                <h1 className="text-xs text-yellow-500">Gold Member</h1>
                            </div>
                            <div>
                                <button className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">Renew</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grow flex justify-center">

                    <ProfileDetail />

                </div>
            </div>
        </>
    )
}
