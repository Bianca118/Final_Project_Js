import React from "react";
import { Link } from 'react-router-dom'
import { UilCornerDownRightAlt } from '@iconscout/react-unicons'

function Landing() {
    return (
        <div className="content">

            <div className="flex flex-col text-white">
                <main className="container mx-auto px-6 pt-16 flex-1 text-center">

                    <h2 className="text-2xl md:text-4xl lg:text-4xl uppercase">Welcome to</h2>
                    <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-black mb-8">Your friendly weather app</h1>

                    <form
                        action=""
                        method="post"
                        id="revue-form"
                        name="form"
                        target="_blank">

                        <div className="flex flex-col md:flex-row justify-center mb-4">
                            <input
                                placeholder="Your email address..."
                                type="email"
                                name="member[email]"
                                id="member_email"
                                className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
                            />
                            <input
                                type="submit"
                                value="Join Today"
                                name="member[subscribe]"
                                id="member_submit"
                                className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
                            />
                        </div>

                        <div className="opacity-75 italic">
                            By subscribing, you agree with Privacy Policy
                        </div>

                    </form>
                </main>
                <footer className="container mx-auto p-6">
                    <div className="flex justify-end ">

                        <Link to="/" className="mx-3 hover:opacity-80 duration-150">
                            < UilCornerDownRightAlt size={30} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                        </Link>

                    </div>
                </footer>
            </div>

        </div >
    )
}

export default Landing