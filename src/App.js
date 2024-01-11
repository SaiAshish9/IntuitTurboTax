import { Container } from "./styles";
import { Header } from "./layout";
import { MainSection } from "./screens/home";

import "./App.css";
import "assets/fonts/AvenirNextforINTUIT-Bold.1.woff2";
import "assets/fonts/AvenirNextforINTUIT-Demi.1.woff2";
import "assets/fonts/AvenirNextforINTUIT-Demi.2.woff2";
import "assets/fonts/AvenirNextforINTUIT-Regular.1.woff2";
import "assets/fonts/AvenirNextforINTUIT-Regular.2.woff2";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Container>
      <Helmet>
        <title>
          TurboTax® Official Site: File Taxes Online, Tax Filing Made Easy
        </title>
      </Helmet>
      <Header />
      <MainSection />
    </Container>
  );
}

export default App;
