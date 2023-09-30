import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { RiTodoLine} from "react-icons/ri";




export type LinkItemProps = {
  name: string;
  icon: IconType;
};
const LinkItems: Array<LinkItemProps> = [
    
  { name: "Home", icon: GoHome },
  { name: "", icon:RiTodoLine  },

];



export { LinkItems };
