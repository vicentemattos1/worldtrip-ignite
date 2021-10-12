import { Header } from "../../components/Header";
import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { ContinentBanner } from "../../components/continent/Banner";
import { Content } from "../../components/continent/Content";

export default function Continent() {
  return (
    <Flex as="main" flexDirection="column">
      <Header />
      <ContinentBanner />
      <Content />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
};
