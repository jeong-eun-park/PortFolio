import Main from "./pages/Main"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Background from "./components/Background"

function App() {

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0">
        <Background/>
        </div>
        <Main />
        <Skills />
        <Projects />
        <Contact />
    </>
  )
}

export default App
