import Review, { ReviewInterface } from "@/components/Review";
import { martel700, openSans400 } from "@/styles/fonts";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/reviews");
        if (response.ok) {
          const data = await response.json();
          const transformedData = data.map(({ __v, _id, ...rest }) => ({
            id: _id,
            ...rest,
          }));
          setReviewsData(transformedData);
        } else {
          console.error("Error fetching reviews data");
        }
      } catch (error) {
        console.error("Error fetching reviews data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-12 py-20 bg-[#f6f6f6]">
      <div className="text-center px-12 lg:px-0 lg:flex lg:flex-col lg:items-center">
        <p className={`text-4xl text-[#252B42] ${martel700.className}`}>
          What Clients Say
        </p>
        <p
          className={`text-sm text-[#737373] lg:w-[430px] ${openSans400.className}`}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="mx-8 flex flex-col justify-center items-center">
        <div className="lg:hidden">
          {reviewsData.length < 4 && (
            <ul>
              {reviewsData.map((review) => (
                <li
                  className="py-7 px-9 border border-1 border-solid border-[#DEDEDE] my-8 w-[327px] flex-shrink-0 bg-white"
                  key={review.id}
                >
                  <Review {...review} />
                </li>
              ))}
            </ul>
          )}
          {reviewsData.length > 3 && (
            <div className="w-full carousel rounded-box pt-8">
              {reviewsData.map((review, i) => (
                <div key={i} className="carousel-item w-full border flex py-6">
                  <Review {...review} carouselItem={true} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="grid grid-cols-3 gap-8 my-8">
            {reviewsData.map((review) => (
              <li
                className="py-7 px-9 border border-1 border-solid border-[#DEDEDE] w-[327px] flex-shrink-0 bg-white"
                key={review.id}
              >
                <Review {...review} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
