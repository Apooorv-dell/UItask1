import { Box, HStack, Button } from "@chakra-ui/react";

interface Data{
  id:Number,
  title: String
}
interface Props{
  selected?:Data | null
  onSelected:(sel:Data |null)=> void;
}


const TopNav = ({selected,onSelected}:Props) => {
  const navData:Data[] = [
  { id:1, title: "Program Details"},
   {id:2 ,title:"Application"},
   {id:3 ,title:"workflow"},
   {id:4, title:"Preview"}
 ];


  return (
    <>
      <HStack boxShadow={"lg"} >
        {navData.map((data) => (
          <Box
            w={"100%"}
            h={"130px"}
            key={data.title}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            as={Button}
            bg={selected?.id !== data.id?'white':'teal'}
            fontWeight={"medium"}
            color={selected?.id !== data.id?'black':'white'}
            colorScheme='teal'
            fontSize={"lg"}
            onClick={()=>onSelected(data)}

          >
            {data.title}
          </Box>
        ))}
          
          
      </HStack>
    </>
  );
};

export default TopNav;
