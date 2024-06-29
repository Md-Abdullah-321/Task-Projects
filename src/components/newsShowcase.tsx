/* eslint-disable @next/next/no-img-element */
import { DataResponse, Meta, NewsItem } from "@/app/page";
import Link from "next/link";
import React from "react";

interface Props {
  news?: DataResponse<Meta, NewsItem>;
}

const NewsShowCase: React.FC<Props> = ({ news }) => {
  const meta = news?.meta;
  const imageUrls: string[] = [];
  news?.data.map((item) => imageUrls.push(item.image_url));
  return (
    <div className="w-full flex justify-between items-center mt-4 gap-x-4">
      <div className="w-4/6">
        <Link
          className="text-3xl font-extrabold"
          href={news?.data[0].url || ""}
        >
          {news?.data[0].title}
        </Link>
        <img
          className="w-full h-80 mt-4"
          src={imageUrls[0]}
          alt="ContentCanvas"
        />
        <p>{news?.data[0].snippet}</p>
      </div>
      <div className="w-2/6 flex flex-col gap-y-4 shadow-md p-2">
        <div className="border boder-2 p-2 shadow-sm">
          <Link className="text-xl font-bold" href={news?.data[1].url || ""}>
            {news?.data[1].title}
          </Link>
          <img
            className="w-full h-44 mt-2"
            src={imageUrls[1]}
            alt="ContentCanvas"
          />
        </div>
        <div className="border boder-2 p-2 shadow-sm">
          <Link className="font-bold" href={news?.data[2].url || ""}>
            {news?.data[2].title}
          </Link>
          <img
            className="w-full h-44 mt-2"
            src={imageUrls[2]}
            alt="ContentCanvas"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsShowCase;
