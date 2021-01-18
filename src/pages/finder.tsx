import React from "react";
import DefaultLayout from "../layouts";

import Finder from "../components/Finder/Finder";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema.
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const FinderPage = ({ data }: IndexPageProps) => {
  return (
    <DefaultLayout>
      {/* <EditPreview /> */}
      <Finder />
    </DefaultLayout>
  );
};

export default FinderPage;
