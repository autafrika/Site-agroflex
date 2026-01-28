import React from "react";
import chatai_1 from "../../assets/images/ai/ai_res_1.png";

function ChatAi() {
  return (
    <section className="w-full h-[60vh] flex justify-center items-center">
      <h2 className="font-semibold pt-4  pb-10 px-5 text-center text-slate-600 text-2xl lg:text-3xl">
        Chat AI Component
      </h2>
      <div className="w-full h-[60vh] bg-gradient-to-r from-green-50 to-green-100 p-10 flex flex-col gap-5 justify-center items-center">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          nesciunt molestiae unde nemo repudiandae laborum nam aut expedita
          porro eius rem, ab quo saepe culpa error itaque fuga! Fuga aut hic,
          veritatis doloribus sint quod quas et alias exercitationem illum ipsa
          itaque nulla facilis ea? Maiores id molestias quaerat ducimus?
        </p>
      </div>
      <div>
        <img src={chatai_1} alt="chat ai response example" />
      </div>
    </section>
  );
}

export default ChatAi;
