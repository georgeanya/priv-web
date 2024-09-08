import React, { useState, useMemo, useEffect } from "react";
import image from "../public/assets/user.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from "next";

const SustainOutlineButton = styled(Button)({
  background: "white !important",
  fontFamily: "Circular Std",
  color: "#5355AC",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  border: "1px solid #5355AC",
  borderRadius: "32px",
  textTransform: "none",
  lineHeight: "20px",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const PrivButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 38px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 32px",
  },
});

// Interfaces
interface BlogAttributes {
  title: string;
  description: string;
  content: string;
  slug: string;
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
        team: string;
        name: string;
      };
    };
  };
  image: {
    data: {
      attributes: {
        url: string;
        name: string;
      };
    };
  };
}

interface Blog {
  id: number;
  attributes: BlogAttributes;
}

interface BlogResponse {
  data: Blog[];
}

type BlogCategory =
  | "All"
  | "Sexual health"
  | "Engineering"
  | "Company"
  | "General health"
  | "Hair";

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogResponse | null>(null);
  const [toggleState, setToggleState] = useState<BlogCategory>("All");
  const [page, setPage] = useState(1);
  const pageSize = 15;
  
  const loadMorePosts = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await axios.get<BlogResponse>(
          `https://priv-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc&_=${timestamp}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
        );
  
        setBlogs((prevBlogs) => {
          if (!prevBlogs) {
            // If there were no previous blogs, initialize the state with the response
            return response.data;
          } else {
            // Append new blogs to the existing state
            return {
              ...prevBlogs,
              data: [...prevBlogs.data, ...response.data.data],
            };
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [page]);


  const blogsToDisplay = useMemo(() => {
    if (!blogs || !blogs.data) return [];

    const filteredBlogs =
      toggleState === "All"
        ? blogs.data
        : blogs.data.filter(
            (blog) =>
              blog.attributes.category.data.attributes.name === toggleState
          );

    return filteredBlogs.slice(1, 7);
  }, [blogs, toggleState]);

  const blogsToDisplay2 = useMemo(() => {
    if (!blogs || !blogs.data) return [];

    const filteredBlogs =
      toggleState === "All"
        ? blogs.data
        : blogs.data.filter(
            (blog) =>
              blog.attributes.category.data.attributes.name === toggleState
          );

    return filteredBlogs.slice(7);
  }, [blogs, toggleState]);

  if (!blogs) {
    return (
      <div className="flex justify-center py-[180px] md:py-[220px]">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-16 h-16 mr-2 text-gray-200 animate-spin fill-[#5355AC]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="text-gray-200 sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const toggleTab = (index: BlogCategory) => {
    setToggleState(index);
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setToggleState(event.target.value as BlogCategory);
  };

  const blog = blogs.data[0] || ({} as Blog);

  const ImgUrl = blog.attributes?.image.data.attributes.url;

  return (
    <div>
      <div className="px-5 md:px-32 md:mb-20 mb-15">
        <p className=" text-sm md:text-[18px] leading-[24px] font-normal mt-[27px] md:mt-[50px] text-[#111111]">
          <span className=" font-bold">Blog</span> | The latest stories and
          updates from the team
        </p>
        <div className="md:flex justify-between mt-9 md:mt-10">
          <Link href={`/blog/${blog.attributes?.slug}`}>
            <img
              src={ImgUrl}
              alt=""
              className="cursor-pointer w-full md:w-[660px] md:h-[380px] rounded-[20px]"
            />
          </Link>
          <div className=" md:ml-17 mt-6 md:mt-0 self-center max-w-[460px]">
            <p className=" text-sm text-[#5355AC] leading-[17px]">
              {blog.attributes?.category.data.attributes.name}
            </p>
            <Link href={`/blog/${blog.attributes?.slug}`}>
              <p className="cursor-pointer text-[#111111] font-bold text-[22px] leading-[28px] md:text-[34px] md:leading-[43px] mt-3">
                {blog.attributes?.title}
              </p>
            </Link>
            <p className="text-[#61616B] mt-4 md:mt-5 text-base md:text-lg">
              {blog.attributes?.description}
            </p>
            <div className="flex mt-5 md:mt-6 mb-[60px] md:mb-0">
              <img src={image.src} alt="" className="w-12 rounded-[25px]" />
              <div className="ml-4 self-center">
                <p className="text-[#111111] text-sm md:text-base leading-[17px] font-medium">
                  {blog.attributes?.author.data.attributes.name}
                </p>
                <p className="text-[#61616B] text-xs">
                  {blog.attributes?.author.data.attributes.team}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="px-5 md:px-32 md:mb-[130px] mb-[90px]">
          <div className="overflow-x-auto hide-scrollbar">
            <ul className="flex flex-nowrap text-sm leading-[17px] font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="md:mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "All"
                      ? "inline-block px-5 py-[14px] text-white bg-[#5355AC] rounded-3xl active"
                      : "inline-block px-6 py-[14px] text-[#61616B]"
                  }
                  onClick={() => toggleTab("All")}
                >
                  All
                </p>
              </li>
              <Link href="/blog/category/sexual-health">
                <li className="md:mr-2 cursor-pointer">
                  <p className="block px-6 py-[14px] whitespace-nowrap text-[#61616B]">
                  Sexual health
                  </p>
                </li>
              </Link>
              <Link href="/blog/category/engineering">
                <li className="md:mr-2 cursor-pointer">
                  <p className="inline-block px-6 py-[14px] text-[#61616B]">
                  Engineering
                  </p>
                </li>
              </Link>
              <Link href="/blog/category/company">
                <li className="md:mr-2 cursor-pointer">
                  <p className="inline-block px-6 py-[14px] text-[#61616B]">
                    Company
                  </p>
                </li>
              </Link>
              <Link href="/blog/category/general-health">
                <li className="md:mr-2 cursor-pointer">
                  <p className="inline-block px-6 py-[14px] whitespace-nowrap text-[#61616B]">
                  General health
                  </p>
                </li>
              </Link>
              <Link href="/blog/category/hair">
                <li className="cursor-pointer">
                  <p className="inline-block px-6 py-[14px] text-[#61616B]">
                    Hair
                  </p>
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-10 grid md:grid-cols-3 md:grid-rows-1 gap-[60px] md:mb-20 mb-[60px]">
            {blogsToDisplay.map((blogpost: any) => {
              const blog = blogpost;
              const { id, attributes } = blog;

              return (
                <div
                  className="max-w-[357px] flex flex-col justify-between"
                  key={id}
                >
                  <div>
                    <Link href={`/blog/${attributes.slug}`}>
                      <img
                        src={attributes.image.data.attributes.url}
                        alt={attributes.image.data.attributes.name}
                        className="cursor-pointer w-full md:w-[357px] md:h-[205.55px] rounded-[20px]"
                      />
                    </Link>
                    <p className=" text-sm leading-[17px] text-[#5355AC] mt-[24px] mb-3">
                      {attributes.category.data.attributes.name}
                    </p>
                    <Link href={`/blog/${attributes.slug}`}>
                      <p className="text-[#111111] font-bold text-[22px] leading-[28px] md:leading-[29px]  cursor-pointer">
                        {attributes.title}
                      </p>
                    </Link>
                  </div>
                  <div className="flex mt-3 md:mt-4">
                    <img
                      src={image.src}
                      alt="Avatar"
                      className="w-12 rounded-[25px]"
                    />
                    <div className="ml-4 self-center">
                      <p className="text-[#111111] text-sm md:text-base leading-5 font-medium">
                        {attributes.author.data.attributes.name}
                      </p>
                      <p className="text-[#61616B] text-xs">
                        {attributes.author.data.attributes.team}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className=" md:py-[70px] px-5 md:px-20 py-10  bg-[#F8F5FF] rounded-[20px]"
            id="newsletter"
          >
            <p className="md:text-[38px] md:leading-[48px] text-[24px] leading-[30px] text-[#5355AC] font-bold max-w-[476px]">
              Stay updated by joining our newsletter
            </p>
            <p className=" text-base leading-[22px] md:text-xl text-[#333D47] max-w-[574px] mt-4 md:mt-[22px] mb-6 md:mb-8">
              Subscribe to recieve updates about our blog posts and
              announcements directly in your mailbox
            </p>
            <form action="" method="post" className="flex flex-wrap">
              <input
                type="text"
                placeholder="Enter your email"
                className="border mb-4 md:mb-0 h-12 md:h-[60px] md:max-w-[462px] border-gray-300 text-gray-900 text-sm rounded-2xl  block w-full p-2.5 md:mr-5"
              />
              <PrivButton className="md:text-base leading-5">
                Subscribe
              </PrivButton>
            </form>
          </div>
          <div className="mt-10 md:mt-20 grid md:grid-cols-3 md:grid-rows-1 gap-[60px] md:mb-20 mb-[60px]">
            {blogsToDisplay2?.map((blogpost: any) => {
              const blog = blogpost;
              const { id, attributes } = blog;
              console.log(attributes.category);

              return (
                <div
                  className="max-w-[357px] flex flex-col justify-between"
                  key={id}
                >
                  <div>
                    <Link href={`/blog/${attributes.slug}`}>
                      <img
                        src={attributes.image.data.attributes.url}
                        alt={attributes.image.data.attributes.name}
                        className="cursor-pointer w-full md:w-[357px] md:h-[205.55px] rounded-[20px]"
                      />
                    </Link>
                    <p className=" text-sm leading-[17px] text-[#5355AC] mt-[24px] mb-3">
                      {attributes.category.data.attributes.name}
                    </p>
                    <Link href={`/blog/${attributes.slug}`}>
                      <p className="text-[#111111] font-bold text-[22px] leading-[28px] md:leading-[29px]  cursor-pointer">
                        {attributes.title}
                      </p>
                    </Link>
                  </div>
                  <div className="flex mt-3 md:mt-4">
                    <img
                      src={image.src}
                      alt="Avatar"
                      className="w-12 rounded-[25px]"
                    />
                    <div className="ml-4 self-center">
                      <p className="text-[#111111] text-sm md:text-base leading-5 font-medium">
                        {attributes.author.data.attributes.name}
                      </p>
                      <p className="text-[#61616B] text-xs">
                        {attributes.author.data.attributes.team}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <SustainOutlineButton onClick={loadMorePosts}>
            Show more posts
          </SustainOutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Blog;
