import React, { useContext, useEffect, useState } from "react";
import { IhcLink } from "../../Components/Link/IhcLink";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginRequest, LoginRequestDefault } from "../../../services/types/authen";
import { AntdInput } from "../../Components/antdInput/AntdInput2";
import { AntdButton } from "../../Components/antdButton/AntdButton";
import HeadersApp from "../../Components/Headers/HeadersApp";
import HeadersAntd from "../../Components/Headers/HeadersAntd";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
export const SignIn: React.FC = () => {
    const {
        text: {
            Login,
            common: { button }
        },
        routs
    } = useContext(LanguageContext)!;
    useEffect(() => {

    }, [])
    type Inputs = {
        code: string
        username: string
        password: string
    }
    const loginMessenger = yup.object({
        code: yup.string().required(Login.placeholder.username),
        username: yup.string().required(Login.placeholder.username),
        password: yup.string().required(Login.placeholder.password),

    })
    const methods = useForm<Inputs>({
        resolver: yupResolver(loginMessenger),
        defaultValues: {
            // code: "",
            username: "",
            password: "",
        },
        values: LoginRequestDefault
    })

    const { handleSubmit, register, setFocus, watch, setValue } = methods

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <FormProvider {...methods}>
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

                            <div className="mt-2">
                                <AntdInput
                                    placeholder={Login.label.username}
                                    label={Login.label.username}
                                    type="code"
                                    // search
                                    maxLength={5}
                                    {...register("code")}
                                    required
                                />
                            </div>

                            
                            <div>

                                <div className="mt-2">
                                    <AntdInput
                                        placeholder={Login.label.password}
                                        label={Login.label.password}
                                        type="password"
                                        maxLength={16}
                                        {...register("password")}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">

                                </label>
                                <div className="text-sm">
                                    <IhcLink to={routs["/reissue"].link}  className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </IhcLink>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {button.login}
                                </button>
                            </div>
                        </form>
                    </FormProvider>
                    {/* <p className="mt-10 text-center text-sm text-gray-500">
                        <IhcLink to={routs["/reissue"].link} >
                            <>{button.reissue}</>
                        </IhcLink>
                    </p> */}
                </div>
            </div>
        </>
    )
}