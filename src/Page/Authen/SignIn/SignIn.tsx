import React, { useContext, useEffect, useState } from "react";
import { IhcLink } from "../../Components/Link/IhcLink";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginRequestDefault } from "../../../services/types/authen";
import { AntdInput } from "../../Components/antdInput/AntdInput2";
import { AntdButton } from "../../Components/antdButton/AntdButton";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../../../hooks/useLocalStorage";
import { UserLocal } from "../../../contexts/UserContext";
export const SignIn: React.FC = () => {

    const navigate = useNavigate()
    const {
        text: {
            Login,
            common: { button }
        },
        routs
    } = useContext(LanguageContext)!;


    type Inputs = {
        username: string
        password: string
    }
    const loginMessenger = yup.object({
        username: yup.string().required(Login.placeholder.username),
        password: yup.string().required(Login.placeholder.password),

    })
    const methods = useForm<Inputs>({
        resolver: yupResolver(loginMessenger),
        defaultValues: {
            username: "",
            password: "",
        },
        values: LoginRequestDefault
    })
    const userLocalDefault: UserLocal = {
        profileToken: '',
        username: '',
    };
    const [user, setUser] = useStorage<UserLocal>("USER", userLocalDefault)

    const { handleSubmit, register } = methods

    const [isUserSet, setIsUserSet] = useState(false);
    useEffect(() => {
        if (isUserSet) {
            navigate('/dashboard')
        }
    }, [isUserSet]);
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URLS}Login`, data);
            setUser({
                profileToken: `${response?.data?.token}`,
                username: `${data?.username}`,
            });
            setIsUserSet(true);
        } catch (error) {
            console.error(error);
        }
    };

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
                                    type="text"
                                    // search
                                    {...register("username")}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mt-2">
                                    <AntdInput
                                        placeholder={Login.label.password}
                                        label={Login.label.password}
                                        type="password"
                                        {...register("password")}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">

                                </label>
                                <div className="text-sm">
                                    <IhcLink to={routs["/reissue"].link} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </IhcLink>
                                </div>
                            </div>
                            <div>
                                <AntdButton
                                    htmlType="submit"
                                    type="primary"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {button.login}
                                </AntdButton>
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