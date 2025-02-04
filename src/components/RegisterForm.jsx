import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <>
            <div className="w-full">
                <form className="w-full">
                    <div className="w-full flex items-center justify-between gap-4">
                        <div className="w-full">
                            <label className="poppins text-base font-medium dark:text-white">Name</label>
                            <div className="w-full mt-2">
                                <input type="text" placeholder="Name" name="name" autoComplete="off" className="w-full h-12 px-4 bg-white border border-gray-600/20 outline-none transition-ease-linear poppins text-base font-light text-black focus:border-orange-400 dark:bg-transparent dark:placeholder:text-gray-500 dark:text-white dark:border-gray-600" />
                                <div className="w-full min-h-4 mt-1.5 flex items-center justify-end">
                                    {/* <p className="poppins text-xs font-light text-red-500">hello</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="poppins text-base font-medium dark:text-white">Photo Url</label>
                            <div className="w-full mt-2">
                                <input type="text" placeholder="Photo Url" name="photo" autoComplete="off" className="w-full h-12 px-4 bg-white border border-gray-600/20 outline-none transition-ease-linear poppins text-base font-light text-black focus:border-orange-400 dark:bg-transparent dark:placeholder:text-gray-500 dark:text-white dark:border-gray-600" />
                                <div className="w-full min-h-4 mt-1.5 flex items-center justify-end">
                                    {/* <p className="poppins text-xs font-light text-red-500">hello</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="poppins text-base font-medium dark:text-white">Email</label>
                        <div className="w-full mt-2">
                            <input type="text" placeholder="Email Address" name="email" autoComplete="off" className="w-full h-12 px-4 bg-white border border-gray-600/20 outline-none transition-ease-linear poppins text-base font-light text-black focus:border-orange-400 dark:bg-transparent dark:placeholder:text-gray-500 dark:text-white dark:border-gray-600" />
                            <div className="w-full min-h-4 mt-1.5 flex items-center justify-end">
                                {/* <p className="poppins text-xs font-light text-red-500">hello</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="poppins text-base font-medium dark:text-white">Password</label>
                        <div className="w-full mt-2">
                            <input type="text" placeholder="Password" name="email" autoComplete="off" className="w-full h-12 px-4 bg-white border border-gray-600/20 outline-none transition-ease-linear poppins text-base font-light text-black focus:border-orange-400 dark:bg-transparent dark:placeholder:text-gray-500 dark:text-white dark:border-gray-600" />
                            <div className="w-full min-h-4 mt-1.5 flex items-center justify-end">
                                {/* <p className="poppins text-xs font-light text-red-500">hello</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <input type="checkbox"/>
                        <p className="poppins text-sm font-normal text-black dark:text-white">Accept Term & Condition</p>
                    </div>
                    <div className="w-full mt-5">
                        <button className="popping text-base font-medium uppercase tracking-wider text-white cursor-pointer bg-gradient-to-r from-orange-400 to-orange-500 w-full px-5 py-3 transition-ease-linear hover:from-orange-500 hover:to-orange-400">Register</button>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4 mt-5">
                        <div className="w-full min-h-[0.2px] bg-gray-600/20"></div>
                        <span className="poppins text-sm text-gray-500 font-medium">Or</span>
                        <div className="w-full min-h-[0.2px] bg-gray-600/20"></div>
                    </div>
                </form>
                <div className="w-full mt-5">
                    <div className="w-full">
                        <button className="popping text-base font-medium text-gray-500 cursor-pointer w-full px-5 py-3 border border-gray-600/20 transition-ease-linear hover:text-gray-950 dark:hover:text-white dark:border-gray-600">Continue With Google</button>
                    </div>
                    <div className="w-full mt-4 text-center">
                        <p className="poppins text-sm font-medium capitalize text-black dark:text-white">don&apos;t have an account? <Link to='/auth/login' className="transition-ease-linear hover:underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;