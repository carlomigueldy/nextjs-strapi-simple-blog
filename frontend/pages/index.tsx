import { GetServerSideProps, GetStaticProps } from "next";
import { Box, Center, Heading, VStack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import axios from "axios";
import PostCard from "../components/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: any;
  updated_at: any;
  published_at: any;
}

interface PostJsonResponse {
  data: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:1337/posts", {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Post[] = response.data;

  return {
    props: {
      data,
    },
  };
};

const IndexView = ({ data }: PostJsonResponse) => {
  const router = useRouter();
  const toPostView = (id: number) => router.push(`/posts/${id}`);
  const posts = data.map((post) => (
    <PostCard
      key={post.id}
      title={post.title}
      publishedAt={post.published_at}
      onClick={() => toPostView(post.id)}
    />
  ));

  return (
    <>
      <Box height="100vh" padding="10">
        <Heading>My Blog</Heading>

        <Center>
          <VStack>{posts}</VStack>
        </Center>
      </Box>
    </>
  );
};

export default IndexView;
