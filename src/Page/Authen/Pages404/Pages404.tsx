import { useContext } from "react";
import { IhcLink } from "../../Components/Link/IhcLink";
import { LanguageContext } from "../../../contexts/LanguageContext";

export default function Pages404() {

    const {
        text: {
            pages404,
            common: { button }
        },
        routs
    } = useContext(LanguageContext)!;
    return (


        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{pages404.text.pages}</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">{pages404.text.Message}</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <IhcLink
                        to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {pages404.link.home}
                    </IhcLink>
                    <IhcLink to="/" className="text-sm font-semibold text-gray-900">
                    {pages404.link.support} <span aria-hidden="true">&rarr;</span>
                    </IhcLink>
                </div>
            </div>
        </main>

    )
}
