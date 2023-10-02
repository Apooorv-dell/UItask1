import {
  Box,
  Heading,
  VStack,
  HStack,
  Switch,
  Text,
  Checkbox,
  Flex,
  FormLabel,
} from "@chakra-ui/react";
import { personalInfo } from "../../util/PersonalInfo";
// import { GoPlus } from "react-icons/go";
interface Props {
  title: String;
  backData: any;
}

export const PersonalInforTem = ({ title,backData }: Props) => {

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
        <VStack padding={"2rem"} align="stretch">
          {personalInfo.map((pi) => (
            <Box h={"40x"} padding={"5px"} borderBottom={"1px solid lightGrey"} margin={'10px'} key={pi.title} >
              <Flex justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>{pi.title}</Text>
                <HStack  paddingX={'10px'}>
                  <Checkbox isChecked={backData}  value="internal">Internal</Checkbox>

                  <Switch colorScheme="red" isChecked={false} />
                  <FormLabel htmlFor="isChecked">Hide</FormLabel>
                </HStack>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
};
