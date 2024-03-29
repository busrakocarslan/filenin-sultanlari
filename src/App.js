import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import LegendContainer from "./components/Legends/LegendContainer";

function App() {
  return (
    <Container>
      {/*div clasname=container yerine geçiyor  */}
     
      <Header />
      <LegendContainer />
    </Container>
  );
}

export default App;
