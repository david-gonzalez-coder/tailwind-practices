import { Slider, Card, Hero, Calculator, Profile,Sizing, Typography } from "./components";

const App = () => {
  return (
    <>
      <Slider>
        <Hero />
        <Card className="flex-center flex bg-stone-150">
          <Calculator  />
        </Card>
        <Card>
          <Profile />
        </Card>
        <Card>
          <Typography />
        </Card>
        <Card>3</Card>
      </Slider>
    </>
  );
};
export default App;
