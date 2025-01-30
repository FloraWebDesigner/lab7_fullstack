import './App.css'
import Header from "./components/Header"
import ReasonList from "./components/Reasonlist"
import Footer from './components/Footer'
import Todolist from './components/Todolist'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <Header />
      <Menu />
      <main>
        <ReasonList />
        <Todolist />
      </main>
      <Footer />
    </>
  )
}

export default App
