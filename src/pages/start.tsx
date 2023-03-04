import Head from "next/head";
import React from "react";
import Form from "../../components/form";
import Navbar from "../../components/navbar1";

const Start = () => {
  return (
    <div>
      <Head>
        <title>Start Now</title>
      </Head>
      <Navbar />
      <Form />
    </div>
  );
};

export default Start;
