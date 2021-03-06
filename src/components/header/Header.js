import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userInfo = useSelector((state) => state.userSignin.userInfo);
  return (
    <header className="h-16 border-b-2 border-gray-200">
      <div className="container h-full mx-auto flex justify-between items-center ">
        <div className="w-2/6 h-full">
          <button className="px-4 h-full">
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.533325H32M0 15.4667H32M0 7.99999H32"
                stroke="black"
              />
            </svg>
          </button>
        </div>
        <Link
          className="flex justify-center items-center px-4 h-full w-2/6 xl:text-2xl"
          to="/"
        >
          E-Shop
        </Link>
        <div className="flex justify-end w-2/6 h-full">
          {!userInfo ? (
            <Link
              to="/signin"
              className="hidden lg:flex items-center px-4 h-full xl:text-xl"
            >
              Sign In
            </Link>
          ) : (
            <Link
              to="/cart"
              className="hidden lg:flex items-center px-4 h-full xl:text-xl"
            >
              {userInfo.name}
            </Link>
          )}
          <button className="px-4 h-full">
            <svg
              className="w-5 h-5 xl:w-8 xl:h-8"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15.2L8.64644 15.5536C8.74021 15.6473 8.86739 15.7 9 15.7C9.13261 15.7 9.25978 15.6473 9.35355 15.5536L9 15.2ZM1.84264 8.04266L1.48908 8.39621H1.48908L1.84264 8.04266ZM7.84264 2.04266L7.48908 2.39621L7.84264 2.04266ZM9 3.20002L8.64644 3.55357C8.84171 3.74883 9.15829 3.74883 9.35355 3.55357L9 3.20002ZM10.1574 2.04266L9.8038 1.6891V1.6891L10.1574 2.04266ZM9.35355 14.8465L2.19619 7.6891L1.48908 8.39621L8.64644 15.5536L9.35355 14.8465ZM15.8038 7.68911L8.64644 14.8465L9.35355 15.5536L16.5109 8.39621L15.8038 7.68911ZM7.48908 2.39621L8.64644 3.55357L9.35355 2.84646L8.19619 1.68911L7.48908 2.39621ZM9.35355 3.55357L10.5109 2.39621L9.8038 1.6891L8.64644 2.84646L9.35355 3.55357ZM13.1574 0.300018C11.8995 0.300018 10.6932 0.799687 9.8038 1.6891L10.5109 2.39621C11.2128 1.69433 12.1647 1.30002 13.1574 1.30002V0.300018ZM16.9 5.04266C16.9 6.03527 16.5057 6.98722 15.8038 7.68911L16.5109 8.39621C17.4003 7.50679 17.9 6.30049 17.9 5.04266H16.9ZM17.9 5.04266C17.9 2.42337 15.7766 0.300018 13.1574 0.300018V1.30002C15.2244 1.30002 16.9 2.97566 16.9 5.04266H17.9ZM4.84264 1.30002C5.83525 1.30002 6.7872 1.69433 7.48908 2.39621L8.19619 1.68911C7.30677 0.799688 6.10046 0.300018 4.84264 0.300018V1.30002ZM1.1 5.04266C1.1 2.97566 2.77564 1.30002 4.84264 1.30002V0.300018C2.22335 0.300018 0.0999985 2.42337 0.0999985 5.04266H1.1ZM2.19619 7.6891C1.49431 6.98722 1.1 6.03527 1.1 5.04266H0.0999985C0.0999985 6.30049 0.599666 7.50679 1.48908 8.39621L2.19619 7.6891Z"
                fill="black"
              />
            </svg>
          </button>
          <Link to="/cart" className="flex items-center px-4 h-full">
            <svg
              className="w-5 h-5 xl:w-8 xl:h-8"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.93878 17.2775L3.38599 17.0539L3.38599 17.0539L2.93878 17.2775ZM15.0612 17.2775L15.5084 17.5012L15.5084 17.5012L15.0612 17.2775ZM0.843841 7.10001H17.1562V6.10001H0.843841V7.10001ZM16.9 6.84384V7.37036H17.9V6.84384H16.9ZM14.8631 16.9H3.13692V17.9H14.8631V16.9ZM1.10001 7.37036V6.84384H0.100006V7.37036H1.10001ZM3.38599 17.0539C1.88266 14.0473 1.10001 10.7319 1.10001 7.37036H0.100006C0.100006 10.8871 0.918806 14.3556 2.49156 17.5012L3.38599 17.0539ZM3.13692 16.9C3.2424 16.9 3.33882 16.9596 3.38599 17.0539L2.49156 17.5012C2.61378 17.7456 2.86362 17.9 3.13692 17.9V16.9ZM14.614 17.0539C14.6612 16.9596 14.7576 16.9 14.8631 16.9V17.9C15.1364 17.9 15.3862 17.7456 15.5084 17.5012L14.614 17.0539ZM16.9 7.37036C16.9 10.7319 16.1173 14.0473 14.614 17.0539L15.5084 17.5012C17.0812 14.3556 17.9 10.8871 17.9 7.37036H16.9ZM17.1562 7.10001C17.0147 7.10001 16.9 6.98532 16.9 6.84384H17.9C17.9 6.43303 17.567 6.10001 17.1562 6.10001V7.10001ZM0.843841 6.10001C0.433032 6.10001 0.100006 6.43303 0.100006 6.84384H1.10001C1.10001 6.98532 0.985318 7.10001 0.843841 7.10001V6.10001ZM4.62875 6.85725L8.22875 0.857254L7.37126 0.342758L3.77126 6.34276L4.62875 6.85725ZM9.77126 0.857254L13.3713 6.85725L14.2288 6.34276L10.6288 0.342758L9.77126 0.857254Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
