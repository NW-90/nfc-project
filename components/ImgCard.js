import Image from "next/image";

function ImgCard({url}) {
    return (
        <div className="flex items-center m-2">
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
                <Image src={url} layout="fill" className="rounded-md"/>
            </div>
        </div>
    )
}

export default ImgCard
