import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import ImageUpload from "./ImageUpload";

function UploadImg() {
  return (
    <div className=" flex items-center p-2">
      <div className="w-full">
        <div className="bg-white p-2 sm:p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form action="">
            <div className="h-72 sm:h-96 mb-5">
              <ImageUpload />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 font-bold text-gray-600"
              >
                Collection
              </label>
              <input
                type="text"
                className="border border-gray-300 shadow p-3 w-full rounded "
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 font-bold text-gray-600"
              >
                Image Name
              </label>
              <input
                type="text"
                className="border border-gray-300 shadow p-3 w-full rounded "
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 font-bold text-gray-600"
              >
                Description
              </label>
              <textarea
                cols="40"
                rows="5"
                className="border border-gray-300 shadow p-3 w-full rounded h-28"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadImg;
