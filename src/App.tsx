import {  Grid, GridItem, Box} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import  axios from "axios";

import "./App.css";
import SideNav from "./components/SideNav";
import AvatarProfile from "./components/AvatarProfile";
import TopNav from "./components/TopNav";
import { InfoTemplate } from "./components/InfoTemplate";
import { PersonalInforTem } from "./components/inputTemplate/PersonalInforTem";




interface Data{
  id:Number,
  title: String
}



function App() {
  const [selected, setSelected]= useState<Data | null>(null);
  const [backData,setBackData] = useState<any>();
  useEffect(()=>{
         axios.get("http://127.0.0.1:4010/api/441.9110323947733/programs/reprehenderit/application-form").then((res)=> setBackData(res.data.data) )
    

  },[])



  return (
    <>
      <Grid
        templateAreas={`"side nav nav "  "side main main" `}
        gridTemplateColumns={"72px"}
        gridTemplateRows={'250px 1fr'}
      >
        <GridItem area="side"  height={"100vh"} boxShadow="xl" display={'grid'} justifyContent={'center'}>

            <Box alignSelf={'start'}><SideNav/></Box>
            <Box  placeSelf={'center'} ><AvatarProfile/></Box>

        </GridItem>
        <GridItem area="nav"  alignSelf={'center'}  >
          <TopNav selected={selected} onSelected={(sel) => setSelected(sel)}/>
        </GridItem>
        <GridItem area="main">
          {/* <FileUpload/> */}
          <InfoTemplate title={"upload Image"}/>
          <PersonalInforTem  backData={backData} title={"Personal Information"}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
