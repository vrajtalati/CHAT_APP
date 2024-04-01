import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const [loading,setLoading] =useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%"  }}>
      {user && <SideDrawer />}
      <Box display="flex"  w="100%" h="100vh" p="10px">
       {/* <Box flexDirection="row"> */}
        {user && <MyChats fetchAgain={fetchAgain} />}
        {/* </Box> */}
        
       {/* <Box flexDirection="row" > */}
        {user && 
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          
        }

        {/* </Box> */}
       
      </Box>
    </div>
  );
};

export default Chatpage;
