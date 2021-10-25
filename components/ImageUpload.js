import ImageUploading from "react-images-uploading";
import { useState } from "react";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const [imagesFolder, setImagesFolder] = useState([]);
  const maxNumberMainPic = 1;
  const maxNumberFolderPic = 10;

  const onChangeMainImg = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onChangeFolderImg = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImagesFolder(imageList);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center align-center pt-2 pb-16 sm:pb-4 space-x-2 ">
      {/* Main Image */}
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onChangeMainImg}
        maxNumber={maxNumberMainPic}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="flex justify-center align-center w-72 h-72 sm:w-96 sm:h-96 border border-gray-400 mb-20 sm:mb-0 rounded-md">
            {imageList.length < 1 ? (
              <button
                className="text-lg font-bold"
                style={isDragging ? { color: "blue"} : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
            ) : (
              <div />
            )}

            {imageList.map((image, index) => (
              <div key={index} className=" mt-2  items-center">
                <img src={image["data_url"]} alt="" className="h-80 w-80" />
                <div className="flex space-x-6 justify-center mt-2">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      {/* Folder Images */}
      <ImageUploading
        multiple={true}
        value={imagesFolder}
        onChange={onChangeFolderImg}
        maxNumber={maxNumberFolderPic}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          onImageRemoveAll,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="">
            <div className="flex justify-center align-center w-72 h-16 sm:w-96 sm:h-20 border border-gray-400 space-x-4 rounded-md">
              <button
                className="text-lg font-bold"
                style={isDragging ? { color: "blue" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>

              {imageList.length > 0 ? (
                <button
                  className="text-md font-bold "
                  onClick={onImageRemoveAll}
                >
                  Remove all images
                </button>
              ) : (
                <div />
              )}
            </div>
            <div className="grid grid-cols-3 mt-4 border border-gray-400 h-72 w-72 sm:w-96 overflow-auto rounded-md">
              {imageList.map((image, index) => (
                <div key={index} className="flex flex-col m-2  items-center">
                  <img src={image["data_url"]} alt="" className="h-16 w-16" />
                  <div className="flex space-x-2 justify-center mt-2">
                    <button
                      className="text-xs "
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </button>
                    <button
                      className="text-xs "
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;
