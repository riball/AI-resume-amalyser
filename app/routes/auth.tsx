import {usePuterStore} from "~/lib/puter";


export const meta = () =>([
    {title:'Resumind | Auth'},
    {name:'description' , content:'log into your account '},
])

import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router";

const Auth = () => {
    const { isLoading, auth }  = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
    useEffect (() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated,next])


    return (
        <main className="bg-[url('/assets/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center" >
            <div className='gradient-border shadow-lg'>
                <section className='flex flex-col gap-8 bg-white p-10 rounded-2xl'>
                    <div className='flex flex-col gap-2 items-center text-center'>
                    <h1>Welcome</h1>
                    <h2>log in to continue your job journey</h2>
                    </div>
                    <div>
                        {isLoading?(
                            <button className='auth-button animate-pulse'>
                            Signing you in...
                            </button>
                        ):(
                            <>
                                {auth.isAuthenticated ? (
                                    <button className='auth-button' onClick={auth.signOut}>
                                        <p>Log out</p>
                                    </button>
                                ):(
                                    <button className='auth-button' onClick={auth.signIn}>
                                        <p>Log in</p>
                                    </button>
                                )}

                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Auth