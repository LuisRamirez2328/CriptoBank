import Title from "../components/atoms/Title"
import Text from "../components/atoms/Text"
import Header from "../components/molecules/Header"

function App() {
  return (
    <>
      <h1 className="bg-red-100">Hola sin componente</h1>
      <Title title="Hola mundo desde componente" tailClass="bg-blue-100"/>
      <Text text="hola mundo" tailClass="bg-green-200" />
      <Header tailClass="bg-yellow-100 h-96 grid gap-5" />
    </>
  )
}

export default App
