function Header() {
    return (
        <header className="sticky top-0 z-50 grid bg-gray-700 shadow-md p-5 md:px-10">
            <div className="flex space-x-10 justify-center ">
                <p className="text-xs sm:text-lg font-bold text-white cursor-pointer">User Info</p>
                <p className="text-xs sm:text-lg font-bold text-white cursor-pointer">Upload Image</p>
                <p className="text-xs sm:text-lg font-bold text-white cursor-pointer">My Collection Page</p>
            </div>
        </header>
    )
}

export default Header
