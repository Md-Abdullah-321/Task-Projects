"use client";

import React, { useEffect, useState } from "react";
import NewsShowCase from "../components/newsShowcase";
import SidebarNewsShowCase from "../components/sidebarnewsShowcase";

export interface Meta {
  found: number;
  limit: number;
  page: number;
  returned: number;
}

export interface NewsItem {
  uuid: string;
  url: string;
  title: string;
  source: string;
  snippet: string;
  relevance_score: string;
  published_at: string;
  locale: string;
  language: string;
  keywords: string;
  image_url: string;
  description: string;
  categories: string[];
}

export interface DataResponse<Meta, NewsItem> {
  meta: Meta;
  data: NewsItem[];
}

const Home: React.FC = () => {
  const [topNews, setTopNews] = useState<DataResponse<Meta, NewsItem>>();
  const [allNews, setAllNews] = useState<DataResponse<Meta, NewsItem>>();

  const fetchTopNews = async (URL: string) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      const { meta, data } = responseData;

      if (!Array.isArray(data)) {
        throw new Error(
          "Unexpected API response format: 'data' is not an array"
        );
      }

      setTopNews({ meta, data });
    } catch (error) {
      console.error("Fetch top news error:", error);
    }
  };

  const fetchAllNews = async (URL: string) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      const { meta, data } = responseData;

      if (!Array.isArray(data)) {
        throw new Error(
          "Unexpected API response format: 'data' is not an array"
        );
      }

      setAllNews({ meta, data });
    } catch (error) {
      console.error("Fetch top news error:", error);
    }
  };

  useEffect(() => {
    fetchTopNews(
      "https://api.thenewsapi.com/v1/news/top?api_token=WwFLn930tcBHRw9WVYpoQu63DBYWSJgdFyZpjf9f&locale=us&limit=3"
    );
    fetchAllNews(
      "https://api.thenewsapi.com/v1/news/all?api_token=WwFLn930tcBHRw9WVYpoQu63DBYWSJgdFyZpjf9f&language=en&limit=3"
    );
  }, []);

  console.log(allNews);

  return (
    <div className="flex justify-between mt-10 w-[1440px] mx-auto">
      <div className="w-9/12 ml-4">
        <h3 className=" border border-t-2 p-4 rounded-sm text-3xl uppercase font-semibold text-red-600">
          Breaking News
        </h3>
        <NewsShowCase news={topNews} />
        <h3 className=" mt-10 border border-t-2 p-4 rounded-sm text-3xl uppercase font-semibold text-red-600">
          All News
        </h3>
        <NewsShowCase news={allNews} />
      </div>
      <div className="w-3/12">
        <SidebarNewsShowCase />
      </div>
    </div>
  );
};

export default Home;
