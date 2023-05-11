import {BsGithub} from 'react-icons/bs'

const Projects = () => {
    return (
      <div className="relative z-30">
        <div className="flex max-w-full h-[100vh] justify-start items-center py-[144px] px-[150px]">
          <div className="flex w-[100%] flex-col px-[10px] ">
            <div className="flex flex-col mb-3">
              <div className=" text-6xl mb-2 font-bold text-[#25385B]">
                Projects
              </div>
            </div>
            <div className="flex max-w-full justify-between mt-[30px]">
              {projects.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="flex rounded-2xl w-[350px] h-[450px] p-5 bg-[#25385B] relative "
                  >
                    <div className="rounded flex flex-col relative w-full h-full text-[#FFF]">
                      <div className=" group relative ">
                        <img
                          alt='image'
                          src={project.img}
                          className="rounded-2xl object-cover w-[100%] h-[215px]  group-hover:opacity-50"
                        />
                        <a href={project.link} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all transform opacity-0 group-hover:opacity-100 '>
                          <BsGithub className='text-4xl'/>
                        </a>
                      </div>
                      <div className="text-[20px] font-bold  mt-[10px]">
                        {project.title}
                      </div>
                      <div className="h-[70px] mt-[8px]">
                        <div className="text-[15px]">{project.content}</div>
                      </div>
                      <div className="flex ">
                        <ul className="grid grid-cols-3 row-auto">
                          {project.skills.map((skill, index) => {
                            return (
                              <li key={index} className="rounded ">
                                {skill}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* <div className="bg-[#25385B] rounded-3xl absolute w-full h-full translate-x-2 translate-y-2 p-5 -z-10 "></div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  
  const projects = [
    {
      img: "/images/weat.png",
      title: "Weat",
      content: "고기 판매사이트 모델링",
      skills: ["#html", "#css", "#javacript", "#react", "#scss"],
      link:'https://github.com/jeong-eun-park/41-1st-Weat-frontend',
    },
    {
      img: "/images/wehicle.png",
      title: "Wehicle",
      content: " 기간별 시세 데이터 보여주는 중고차량 판매 사이트 모델링",
      skills: ["#html", "#css", "#javacript", "#react", "#styled-component"],
      link:'https://github.com/jeong-eun-park/41-2nd-wehicle-frontend',
    },
    {
      img: "/images/dashBoard.png",
      title: "Dashboard",
      content: "매출이익 데이터 시각화, excel 데이터 파싱",
      skills: [
        "#html",
        "#css",
        "#typescript",
        "#react",
        "#tailwind",
        "#zustand",
        "#react-query",
      ],
      link:'',
    },
  ];
  