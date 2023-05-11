import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_7ls285a",
        "template_c25dq5y",
        form.current,
        "lbnsa2Jy4FwWbevEt"
      )
      .then(() => {
        setSuccess(true);
      }),
      (error) => {
        console.log(error.text);
      };
  };

  return (
    <div className="flex max-w-full h-screen justify-around relative py-[144px] px-[150px]">
      <div className="flex flex-1 px-[10px]  ">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-1 justify-center flex-col text-center gap-6 mx-auto  "
        >
          <h1 className="text-6xl text-left mb-2 font-bold text-[#25385B]">
            Contact
          </h1>
          <input
            type="text"
            name="name"
            placeholder="이름"
            className="rounded p-5 border-none bg-white text-black  "
          ></input>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            className="rounded p-5 border-none"
          ></input>
          <textarea
            name="message"
            placeholder="메세지를 입력하세요"
            className="rounded p-5 border-none"
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="bg-[#25385B] rounded border-none p-5 font-bold cursor-pointer text-[#E5E5E5]"
          >
            보내기
          </button>
          {success && "메세지 전송이 완료되었습니다."}
        </form>
      </div>
      <div className="flex-1 max-w-full flex  justify-end items-end">
        <div className="flex w-[600px] h-[600px]"></div>
      </div>
    </div>
  );
};

export default Contact;