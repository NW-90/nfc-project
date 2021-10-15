import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import Image from "next/image";

function UploadImg() {
  const [imgURL, setImgURL] = useState();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImgURL(imageUrl);
      });
    }
  };
  return (
    <div className=" flex items-center p-2">
      <div className="w-full">
        <div className="bg-white p-2 sm:p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form action="">
            <div className="h-100">
              <Upload
                className='avatar'
                listType="picture-card"
                showUploadList={false}
                onChange={handleChange}
              >
                {imgURL ? (
                  <img src={imgURL}  />
                ) : (
                  <p>+ Upload image</p>
                )}
              </Upload>
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
