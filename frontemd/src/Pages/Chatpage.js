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
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
    {user && <SideDrawer />}
    <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
      <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
        {user && <MyChats fetchAgain={fetchAgain} />}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "75%" }}>
        {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </div>
    </div>
  </div>
  
  );
};

export default Chatpage;
