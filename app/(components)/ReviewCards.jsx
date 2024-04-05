import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { styles } from "../constants";

export default function ReviewCards({ review }) {
  const { rating, username, description } = review;

  function getRandomDate() {
    const year = Math.floor(Math.random() * (2023 - 2020 + 1)) + 2020;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 31) + 1;
    const randomDate = new Date(year, month, day);
    return randomDate.toDateString();
  }

  const randomDate = getRandomDate();

  return (
    <div>
      <div className="card w-full lg:w-[410px]  bg-gray-50 border-[1px] border-gray-200 text-primary-content">
        <div className="card-body">
          <div className={`${styles.flexStart} gap-2 pt-1`}>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly={true} />{" "}
            <small className="pt-[2px]">{rating}/5</small>
          </div>
          <h2 className="card-title">{username}</h2>
          <p>{`"${description}"`}</p>
          <div className="card-actions justify-start">
            <small>{randomDate}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
