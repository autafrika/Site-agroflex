import React from "react";
import chatai_1 from "../../assets/images/ai/ai_res_1.png";

function ChatAi() {
  return (
    <section className="w-full h-[60vh] flex justify-center items-center">
      <h2 className="text-3xl font-bold">Chat AI Component</h2>
      <div>
        {/* Chat AI functionality will be implemented here */}
        Chat AI coming soon!
        <img
          height={90}
          width={160}
          src={chatai_1}
          alt="Ai assistant conversation"
        />
      </div>
    </section>
  );
}

export default ChatAi;
