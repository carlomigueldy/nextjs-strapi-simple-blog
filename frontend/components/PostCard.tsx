import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";

export type PostCardProps = {
  title: string;
  publishedAt: string;
  onClick: VoidFunction;
};

const PostCard = ({ title, publishedAt, onClick }: PostCardProps) => {
  return (
    <>
      <Box
        padding="30px"
        width="500px"
        shadow="lg"
        borderRadius="md"
        marginBottom="30px"
        onClick={onClick}
      >
        <Box display="flex" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="24px">
            {title}
          </Text>
          <Button colorScheme="facebook">Read</Button>
        </Box>
        <Text size="10px">Published at {new Date(publishedAt).toLocaleDateString()}</Text>
      </Box>
    </>
  );
};

export default PostCard;
