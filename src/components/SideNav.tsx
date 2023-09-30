import {
  List,
  ListIcon,
  ListItem,
  Center,
  Button,

} from "@chakra-ui/react";
import { LinkItems, LinkItemProps } from "../util/iconData";
import { GiHamburgerMenu } from "react-icons/gi";

const SideNav = () => {
  return (
    <>
      <Center>
        <List margin={"24px"}>
          <Center
            width={"48px"}
            height={"48px"}
            mb={"32px"}
            as={Button}
            bg={"white"}
          >
            <ListIcon as={GiHamburgerMenu} boxSize={"24px"} m={"auto"} />
          </Center>
          {LinkItems.map((link: LinkItemProps) => (
            <Center
              key={link.name}
              width={"48px"}
              height={"48px"}
              mb={"24px"}
              as={Button}
              bg={"white"}
            >
              <ListItem>
                <ListIcon as={link.icon} boxSize={"24px"} m={"auto"} />
              </ListItem>
            </Center>
          ))}

        </List>
      </Center>
    </>
  );
};

export default SideNav;
