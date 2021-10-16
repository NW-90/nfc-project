import ImageUploading from "react-images-uploading";
import { useState } from "react";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const maxNumber = 2;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
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
          <div className="flex justify-center align-center w-72 h-72 sm:w-96 sm:h-96 border border-gray-400">
            {imageList.length <1 ? (
              <button
                className="text-lg font-bold"
                style={isDragging ? { color: "red" } : undefined}
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
    </div>
  );
}

export default ImageUpload;
