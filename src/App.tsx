import styled from "styled-components";
import "./App.css"
import "./index.css"
import MainLayout from "./components/MainLayout";
import Views from "./views";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
    return (
            <MainLayout>
        <Container>
          <Views/>
        </Container>
            </MainLayout>
    );
}

export default App;
