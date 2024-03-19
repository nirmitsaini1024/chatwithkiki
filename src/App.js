import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const projectID = "c4b4c1fb-e238-408c-9edb-f1957c9e20dd";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
      <SpeedInsights />
    </>
  );
};

export default App;
