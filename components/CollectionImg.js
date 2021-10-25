import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLine,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { dummyImg } from "./DummyImg";
import ImgCard from "./ImgCard";
import { useState, useEffect } from "react";

function CollectionImg() {
  const [testImg, setTestImg] = useState([]);

  useEffect(() => {
    setTestImg(dummyImg);
  }, []);

  return (
    <div className=" flex items-center p-2">
      <div className="w-full">
        <div className="bg-white p-2 sm:p-10 rounded-lg shadow  mx-auto sm:w-3/4">
          <div className="flex flex-col sm:flex-row space-x-10 justify-center items-center">
            <div className="h-32 sm:h-4. w-32 sm:w-40 relative mb-2">
              <Image src="/user.png" layout="fill" objectFit="contain" />
            </div>
            <div className="sm:w-full">
              <div className="flex items-center space-x-2">
                <p className="text-xs sm:text-lg font-bold">User Name :</p>
                <p className="text-xs sm:text-lg">This is uer name</p>
              </div>
              <div className="flex overflow-auto space-x-2">
                <p className="text-xs sm:text-lg font-bold">Description:</p>
                <p className="text-xs sm:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore atque iusto a exercitationem harum culpa molestias
                  nisi explicabo quibusdam, repudiandae consequatur nemo facere
                  veritatis ipsam qui saepe. Quibusdam, suscipit eaque?
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <a href="https://www.facebook.com" style={{ color: "#4968ad" }}>
                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                </a>
                <a href="tel: 0123456789" style={{ color: "#4FCE5D" }}>
                  <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
                </a>
                <a href="https://www.line.com" style={{ color: "#00B900" }}>
                  <FontAwesomeIcon icon={faLine} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:w-3/4 mx-auto">
          {testImg.map(({ download_url }) => (
            <ImgCard url={download_url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionImg;
