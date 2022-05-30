import {Slider, Card, Hero, Calculator, Profile} from './components'

const App = () => {
  return (
    <>
      <Slider>
        <Hero />
        <Card className="bg-stone-150 flex flex-center">
          <Calculator />
        </Card>
        <Card>
          <Profile />
        </Card>
        <Card>2</Card>
        <Card>3</Card>
      </Slider>
      
    </>
  )
}
export default App