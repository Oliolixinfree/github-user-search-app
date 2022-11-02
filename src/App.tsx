import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import React from 'react';

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
    </Container>
  );
}

export default App;
