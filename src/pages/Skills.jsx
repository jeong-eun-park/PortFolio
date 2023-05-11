import { Canvas } from "@react-three/fiber";
import TagCloud from "../components/TagCloud";

const Skills = () => {
  return (
    <div className=" flex max-w-full h-screen relative z-30 py-[144px] px-[150px]">
      <div className="flex flex-1 px-[10px] ">
        <div className="flex flex-col  justify-center mx-auto">
          <p className="text-6xl mb-2 font-bold text-[#25385B]">
            Skills & Experience
          </p>
          <div className="mt-[20px]">
            <p>
              웹 개발에 필수적인 HTML, CSS, JavaScript를 비롯하여, React와 같은
              프론트엔드 프레임워크 및 라이브러리들을 다룰 수 있습니다. SCSS와
              Styled-Components를 이용하여 스타일링을 효과적으로 구현할 수
              있으며, TypeScript를 사용하여 더욱 안전하고 직관적인 코드 작성을
              지향합니다. React-Query와 Zustand와 같은 상태 관리 라이브러리를
              사용하여 애플리케이션의 상태 관리를 보다 간편하고 유지보수가
              용이하게 처리할 수 있습니다.
            </p>
            <p>
              또한, Tailwind CSS를 이용하여 빠르고 일관된 디자인 시스템을 구축할
              수 있으며, Three.js를 이용하여 3D 그래픽스를 구현할 수 있습니다.
              Jest와 같은 테스트 프레임워크를 이용하여 테스트를 작성하고, Git을
              이용하여 협업을 효과적으로 진행할 수 있습니다. 작업 계획 및 일정
              관리에는 Notion과 Trello를 이용하여 팀원들과 협업하여 일정을
              관리하고, 작업 내용을 공유할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-full">
      <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
          <TagCloud count={4} radius={23} />
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;