import { useChat } from "ai/react";

const HomePage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({ api: "api/genai" });

  return (
    <div className="flex flex-col items-center w-full min-h-screen lg:gap-y-10 p-20">
      {RenderForm()}
    </div>
  );

  function RenderForm() {
    return <div>rf</div>;
  }
  function RenderMessage() {
    return <div>rm</div>;
  }
};

export default HomePage;
