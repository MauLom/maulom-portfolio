import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react'
import NavBarComponent from './components/NavBar';
import BannerComponent from './components/Banner';
import OverAllComponent from './components/Overall';
import ExtraContentComponent from './components/ExtraContent';

function App() {
  return (
    <ChakraProvider>
      <NavBarComponent />
      <BannerComponent />
      <OverAllComponent />
      <ExtraContentComponent />
    </ChakraProvider>
  );
}

export default App;
