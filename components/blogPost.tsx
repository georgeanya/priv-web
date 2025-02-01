import React, { useEffect, useState } from "react";
import image from "../public/assets/user.svg";
import facebook from "../public/assets/facebook.svg";
import twitter from "../public/assets/twitter.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Moment from "react-moment";
import style from "../src/pages/blog/markdown-styles.module.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Link from "next/link";
import CustomButton from "./mainButton";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Blog {
  id: number;
  attributes: {
    title: string;
    publishedAt: string;
    description: string;
    content: string;
    slug: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
          team: string;
        };
      };
    };
    seo: {
      metaTitle: string;
    };
  };
}

interface ArticlesResponse {
  data: Blog[];
}

const BlogPost = ({ blog }: { blog: Blog }) => {
  const [fetchedBlog, setFetchedBlog] = useState<Blog | null>(blog);
  const [loading, setLoading] = useState(false); // Set to false since we already have the blog data from getServerSideProps
  const ImgUrl = blog?.attributes?.image?.data?.attributes?.url;
  const url = `https://privhealth.co/blog/${blog?.attributes?.slug}`;

  // Debugging: Log the blog data
  useEffect(() => {
    console.log("Blog data from props:", blog);
  }, [blog]);

  if (!fetchedBlog) {
    return <div className="flex justify-center py-[180px] md:py-[220px]">Blog not found.</div>;
  }

  return (
    <div className="px-5 md:px-[245px]">
      <div className="md:pt-[50px] pt-[60px] container mx-auto md:mb-[130px] mb-[90px]">
        <div className="flex text-[#5355AC] md:text-[14px] md:leading-[19px] text-[14px] leading-[16.5px]">
          <p>{fetchedBlog?.attributes?.category?.data?.attributes?.name}</p>
          <p className="px-1">•</p>
          <p>
            <Moment
              format="MMM DD, YYYY"
              date={fetchedBlog?.attributes?.publishedAt}
            />
          </p>
        </div>
        <h1 className="mt-3 md:mt-4 md:text-[48px] md:leading-[61px] leading-[40px] text-[30px] text-[#111111] font-bold">
          {fetchedBlog?.attributes?.title}
        </h1>
        <div className="flex mt-6">
          <img src={image.src} alt="" className="w-12 rounded-[25px]" />
          <div className="ml-4 self-center">
            <p className="text-[#111111] text-sm md:text-base font-medium">
              {fetchedBlog?.attributes?.author?.data?.attributes?.name}
            </p>
            <p className="text-[#61616B] text-xs">
              {fetchedBlog?.attributes?.author?.data?.attributes?.team}
            </p>
          </div>
        </div>
        {/* {ImgUrl && (
          <img
            src={ImgUrl}
            alt=""
            className="cursor-pointer w-full rounded-[20px] md:mt-[50px] mt-[35px]"
          />
        )} */}
        <div className="md:mt-[40px] mt-[32px] md:flex flex-row justify-between">
          <div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className={style.reactMarkDown}
            >
              {fetchedBlog?.attributes?.content || ""}
            </ReactMarkdown>

            <div className="bg-[#EEEEF7] px-5 py-10 md:p-12 md:flex justify-between md:mt-14 mb-9 mt-9 rounded-[20px]">
              <div className="max-w-[385px]">
                <p className="text-[#111111] md:text-[28px] text-[22px] leading-[28px] md:leading-[35px] mb-4 font-bold">
                  Hey! we’ve made it easy to get stronger erection
                </p>
                <p className="text-[#5355AC] md:text-xl md:leading-[28px] mb-6 md:mb-0 md:text-[18px] leading-6">
                  Get personalized treatment for erectile dysfunction without
                  leaving home
                </p>
              </div>
              <div className="self-center">
                <CustomButton title="Get started now" href="/" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col md:ml-12 md:min-w-[40px]">
            <FacebookShareButton url={url}>
              <img src={facebook.src} alt="Share on Facebook" />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <img
                src={twitter.src}
                className="md:mt-5 ml-5 md:ml-0"
                alt="Share on Twitter"
              />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  { blog: Blog | null },
  Params
> = async ({ params }) => {
  try {
    const { slug } = params as Params;
    const { data } = await axios.get<ArticlesResponse>(
      `https://priv-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&populate[3]=seo.metaTwitterImage&populate[4]=seo.shareImage&slug=${slug}`
    );
    const blog = data.data.find((blog) => blog.attributes?.slug === slug);

    if (!blog) {
      console.error("Blog not found for slug:", slug);
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      notFound: true,
    };
  }
};

export default BlogPost;