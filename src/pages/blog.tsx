import React, { useState, useMemo } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import image from "../../public/assets/user.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";

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

interface Blog {
  id: number;
  attributes: {
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
          name: string;
        };
      };
    };
  };
}

type BlogCategory =
  | "All"
  | "Sexual health"
  | "Engineering"
  | "Company"
  | "General health"
  | "Hair";

const BlogHome = ({ blogs }: any) => {
  console.log(blogs);
  const [toggleState, setToggleState] = useState<BlogCategory>("All");

  const toggleTab = (index: BlogCategory) => {
    setToggleState(index);
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setToggleState(event.target.value as BlogCategory);
  };

  const blog = blogs.data?.slice(0, 1)[0] || [];

  const blogsToDisplay = useMemo(() => {
    console.log(blogs.data);

    if (toggleState === "All") {
      return blogs.data.slice(1);
    }
    return blogs.data?.slice(1).filter((blog: any) => {
      return blog.attributes.category.data.attributes.name === toggleState;
    });
  }, [blogs, toggleState]);

  const ImgUrl = blog.attributes.image.data.attributes.url;

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Priv Health Blog</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs, blog, priv health blog"
        />
        <meta
          name="description"
          content="Find insightful tips and discover effective solutions for common men's health concerns"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.co/blog" property="og:url" />
        <meta content="Priv Health Blog" property="og:title" />
        <meta
          content="Find insightful tips and discover effective solutions for common men's health concerns"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv Health logo"
          property="og:image:alt"
        />
        <meta
          content="https://instagram.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://facebook.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/tryprivhealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tryprivhealth" />
        <meta name="twitter:creator" content="@tryprivhealth" />
        <meta name="twitter:title" content="Priv Health Blog" />
        <meta
          name="twitter:description"
          content="Find insightful tips and discover effective solutions for common men's health concerns"
        />
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/priv-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="738" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv Health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/" rel="canonical" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
      </Head>
      <Navbar />
      <div className="px-5 md:px-32 md:mb-24 mb-15">
        <p className=" text-sm md:text-[18px] leading-[24px] font-normal mt-[60px] md:mt-[70px] text-[#111111]">
          <span className=" font-bold">Blog</span> | The latest stories and
          updates from the team
        </p>
        <div className="md:flex justify-between mt-9 md:mt-10">
          <Link href={`/blog/${blog.attributes.slug}`}>
            <img
              src={ImgUrl}
              alt=""
              className="cursor-pointer w-full md:w-[660px] md:h-[380px] rounded-[20px]"
            />
          </Link>
          <div className=" md:ml-17 mt-7 md:mt-0 self-center max-w-[470px]">
            <p className=" text-sm text-[#5355AC] leading-[17px]">
              {blog.attributes.category.data.attributes.name}
            </p>
            <Link href={`/blog/${blog.attributes.slug}`}>
              <p className="cursor-pointer text-[#111111] font-bold text-[26px] leading-[32px] md:text-[38px] md:leading-[43px] mt-2.5 md:mt-3">
                {blog.attributes.title}
              </p>
            </Link>
            <p className="text-[#61616B] mt-4 md:mt-5 text-base md:text-lg">
              {blog.attributes.description}
            </p>
            <div className="flex mt-7 md:mt-10">
              <img src={image.src} alt="" className="w-12 rounded-[25px]" />
              <div className="ml-4 self-center">
                <p className="text-[#111111] text-sm md:text-base leading-5 font-medium">
                  {blog.attributes.author.data.attributes.name}
                </p>
                <p className="text-[#61616B] text-xs">
                  {blog.attributes.author.data.attributes.team}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 md:px-32 mb-24">
          <div className="hidden md:block">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "All"
                      ? "inline-block px-5 py-3 text-white bg-[#5355AC] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#61616B]"
                  }
                  onClick={() => toggleTab("All")}
                >
                  All
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Sexual health"
                      ? "inline-block px-5 py-3 text-white bg-[#5355AC] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#61616B]"
                  }
                  onClick={() => toggleTab("Sexual health")}
                >
                  Sexual health
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Hair"
                      ? "inline-block px-5 py-3 text-white bg-[#5355AC] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#61616B]"
                  }
                  onClick={() => toggleTab("Hair")}
                >
                  Hair
                </p>
              </li>
              <li className="cursor-pointer">
                <p
                  className={
                    toggleState === "General health"
                      ? "inline-block px-5 py-3 text-white bg-[#5355AC] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#61616B]"
                  }
                  onClick={() => toggleTab("General health")}
                >
                  General health
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Engineering"
                      ? "inline-block px-5 py-3 text-white bg-[#5355AC] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#61616B]"
                  }
                  onClick={() => toggleTab("Engineering")}
                >
                  Engineering
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Company"
                      ? "inline-block px-5 py-3 text-white bg-[#5355AC] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#61616B]"
                  }
                  onClick={() => toggleTab("Company")}
                >
                  Company
                </p>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <select
              name="category"
              onChange={handleSelect}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-white h-11 md:h-12"
            >
              <option hidden defaultValue={"Browse by category"}>
                Browse by category
              </option>
              <option value="All">All</option>
              <option value="Sexual health">Sexual health</option>
              <option value="General health">General health</option>
              <option value="Hair">Hair</option>
              <option value="Engineering">Engineering</option>
              <option value="Company">Company</option>
            </select>
          </div>
          <div className="mt-10 grid md:grid-cols-3 md:grid-rows-1 md:gap-y-26 gap-15 md:mb-18 mb-15">
            {blogsToDisplay.map((blogpost: any) => {
              const blog = blogpost;
              const { id, attributes } = blog;
              console.log(attributes.category);

              return (
                <Link href={`/blog/${attributes.slug}`} key={id}>
                  <div className="max-w-[357px] md:h-[540px] flex flex-col justify-between">
                    <div>
                      <img
                        src={attributes.image.data.attributes.url}
                        alt=""
                        className="cursor-pointer w-full md:w-[357px] md:h-[205.55px] rounded-[20px]"
                      />

                      <p className=" text-sm text-[#5355AC] mt-7">
                        {attributes.category.data.attributes.name}
                      </p>
                      <p className="text-[#111111] font-bold text-[26px] leading-[32px] md:text-1xl md:leading-8 mt-2.5 md:mt-3 cursor-pointer">
                        {attributes.title}
                      </p>
                      <p className="text-[#61616B] mt-4 md:mt-5 text-base leading-6 md:leading-7 md:text-lg">
                        {attributes.description}
                      </p>
                    </div>
                    <div className="flex mt-7 md:mt-10">
                      <img
                        src={image.src}
                        alt=""
                        className="w-12 rounded-[25px]"
                      />
                      <div className="ml-4 self-center">
                        <p className="text-[#111111] text-sm md:text-base leading-5 font-medium">
                          {blog.attributes.author.data.attributes.name}
                        </p>
                        <p className="text-[#61616B] text-xs">
                          {blog.attributes.author.data.attributes.team}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <SustainOutlineButton>Show more posts</SustainOutlineButton>
        </div>
      </div>
      {/* <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-28 pb-20 bg-[#EFF2FA]">
        <p className="md:text-4xl text-2xl text-[#111111] font-bold max-w-[476px]">
          Stay updated by joining our newsletter
        </p>
        <p className=" text-bases md:text-xl text-[#111111] max-w-[574px] mt-5 md:mt-6 mb-10 md:mb-12">
          Subscribe to recieve updates about our blog posts and announcements
          directly in your mailbox
        </p>
        <form action="" method="post" className="flex flex-wrap">
          <input
            type="text"
            placeholder="Enter your email"
            className="border mb-4 md:mb-0 h-12 md:h-15 md:max-w-[462px] border-gray-300 text-gray-900 text-sm rounded-2xl  block w-full p-2.5 md:mr-5"
          />
          <SustainButton>Subscribe</SustainButton>
        </form>
      </div> */}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(
    "https://priv-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc"
  );

  return {
    props: {
      blogs: data,
    },
  };
};

export default BlogHome;
