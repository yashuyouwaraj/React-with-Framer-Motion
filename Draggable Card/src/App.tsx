import DraggableCards from "./components/DraggableCards"

const App = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] bg-[#f3f3f3] ">
        <DraggableCards style={{background:'linear-gradient(135deg, #f093fb 0%,#f5576c 100%)'}}>Card 1</DraggableCards>
        <DraggableCards style={{background:'linear-gradient(135deg, #5ee7df 0%,#b490ca 100%)'}}>Card 2</DraggableCards>
        <DraggableCards style={{background:'linear-gradient(135deg, #ff9a9e 0%,#fecfef 100%)'}}>Card 3</DraggableCards>
      </div>
    </div>
  )
}

export default App