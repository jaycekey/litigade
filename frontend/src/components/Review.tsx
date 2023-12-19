import Image from "next/image";
import { openSans600, openSans700 } from "@/styles/fonts";
import filledStarIcon from "@/assets/icons/icn bxs-star.svg";
import emptyStarIcon from "@/assets/icons/icn bx-star.svg";
import samplePhoto from "@/assets/icons/Ellipse.svg";

export interface ReviewInterface {
  id: string | number;
  author: string;
  authorPhotoUrl: string;
  role: string;
  reviewText: string;
  rating: number;
}

export default function Review({
  id,
  author,
  authorPhotoUrl,
  role,
  reviewText,
  rating,
}: ReviewInterface) {
  const starArray = Array(5).fill(null);

  return (
    <span className="">
      <ul>
        {starArray.map((_, index) => (
          <span key={index} className="inline-block w-6 h-6 fill-current">
            {index < rating ? (
              // Render filled star
              <Image
                src={filledStarIcon}
                alt=""
                className="hover:cursor-pointer"
                width={22}
              />
            ) : (
              // Render empty star
              <Image
                src={emptyStarIcon}
                alt=""
                className="hover:cursor-pointer"
                width={22}
              />
            )}
          </span>
        ))}
      </ul>
      <div className="text-sm text-[#737373] mt-3">
        <p className={`${openSans700.className}`}>{reviewText}</p>
        <div className="mt-6 flex justify items-center gap-4">
          {!authorPhotoUrl && <Image src={samplePhoto} alt={"authorPhoto"} />}
          {authorPhotoUrl && (
            <img
              className="rounded-full w-12 h-12 object-cover"
              src={authorPhotoUrl}
              alt={"authorPhoto"}
            />
          )}
          <div className="flex flex-col">
            <p className={`${openSans600.className} text-[#D0A144]`}>
              {author}
            </p>
            <p className={`${openSans700.className} text-[#252B42]`}>{role}</p>
          </div>
        </div>
      </div>
    </span>
  );
}
