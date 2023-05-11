const Main = () => {
    return (
      <div className="relative z-30 flex max-w-full h-[100vh] justify-start items-center py-[144px] px-[150px]">
        <div className="flex flex-col items-start text-[#FFF]">
          <p className="text-6xl text-left ">Hello.</p>
          <span></span>
          <div className="text-4xl mt-[20px]">
            developer
            <span className="text-[#25385B]">박정은</span>의 포토폴리오 입니다.
          </div>
  
          <button
            type="button"
            className=" bg-[#A2B0FF]] text-3xl rounded w-[200px] mt-[20px]"
          >
            contact me
          </button>
        </div>
      </div>
    );
  };
  
  export default Main;