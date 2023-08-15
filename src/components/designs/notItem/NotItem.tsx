
const NotItem = () => {
    return (
        <div className=" w-full h-[90dvh] flex justify-start items-center
        bg-[url(/images/hero-bg.jpg)] bg-cover bg-no-repeat bg-center">
            <div className="text-xl sm:text-4xl pl-8 text-slate-100">
                <h3 className="my-4">
                    Soory!!
                </h3>
                <p className="my-1">
                    We have server side request limits.
                </p>
                <p className="my-1">
                    Please come back in a few moments.
                </p>
            </div>
        </div>
    )
}

export default NotItem