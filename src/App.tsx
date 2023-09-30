import {  Grid, GridItem, Box} from "@chakra-ui/react";

import "./App.css";
import SideNav from "./components/SideNav";
import AvatarProfile from "./components/AvatarProfile";
import TopNav from "./components/TopNav";
import { useState } from "react";


interface Data{
  id:Number,
  title: String
}
function App() {
  const [selected, setSelected]= useState<Data | null>()

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
        <GridItem area="nav"  alignSelf={'center'}>
          <TopNav selected={selected} onSelected={(sel) => setSelected(sel)}/>
        </GridItem>
        <GridItem area="main" bg="tomato">
          hello
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
