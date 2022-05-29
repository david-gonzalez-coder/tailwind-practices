import {Slider, Card, Hero, Calculator} from './components'

const App = () => {
  return (
    <>
      <Slider>
        <Hero />
        <Card className="bg-stone-150  flex justify-center items-center">
          <Calculator />
        </Card>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </Slider>
      
    </>
  )
}
export default App