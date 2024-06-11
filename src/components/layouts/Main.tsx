export const Main = () => {
    return (
        <div className="container mx-auto px-4 py-4 flex-1 flex justify-center items-center">
            <form className="w-full max-w-xl mx-auto">
                <input 
                    type="text" 
                    placeholder="Ingrese su ubicación" 
                    className="rounded-lg p-5 outline-none border-0 bg-[#1E1E29] text-[#7F7F98] w-full max-w-xl mx-auto"
                />
            </form>
        </div>
    )
}