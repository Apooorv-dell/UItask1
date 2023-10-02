import { Box, Heading, VStack } from "@chakra-ui/react";
// import { GoPlus } from "react-icons/go";
interface Props {
  title: String;
}

export const InfoTemplate = ({ title }: Props) => {
  return (
    <>
      <Box
        m={"70px"}
        borderRadius={"20px"}
        w={"595px"}
        bg={"white"}
        boxShadow={"lg"}
      >
        <Heading
          size={"md"}
          bg={"#D0F7FA"}
          p={"2rem"}
          borderRadius={"20px 20px 0px 0px"}
        >
          {title}
        </Heading>
        <VStack padding={"10px"}>
          {/* <Text>
            <Icon as={GoPlus} boxSize={"24px"}></Icon> add Additional question
          </Text> */}
        </VStack>
      </Box>
    </>
  );
};
