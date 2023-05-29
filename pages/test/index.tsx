import { GetStaticProps } from "next";
import React from "react";

const TestPage: React.FunctionComponent = () => {
  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = ({ locale }) => {
  console.log(locale);
  return { props: {} };
};

export default TestPage;
