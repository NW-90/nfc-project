import Image from "next/image";

function UserInfo() {
  return (
    <div className=" flex items-center p-2">
      <div className="w-full">
        <div className="bg-white p-2 sm:p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form action="">
            <div className="h-40 relative mb-2">
              <Image
                src="/user.png"
                layout="fill"
                objectFit="contain"
                className="h-50"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              ></input>
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                Description
              </label>
              <input
                type="text"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              ></input>
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                Phone
              </label>
              <input
                type="text"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              ></input>
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                Line
              </label>
              <input
                type="text"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              ></input>
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                Facebook
              </label>
              <input
                type="text"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
