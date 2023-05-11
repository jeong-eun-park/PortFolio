import Main from "./pages/Main"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Background from "./components/Background"
import { useRef } from "react"

function App() {
  const contactRef = useRef(null);



  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0">
        <Background/>
        </div>
        <Main ref={contactRef}/>
        <Skills />
        <Projects />
        <Contact ref={contactRef}/>
    </>
  )
}

export default App
