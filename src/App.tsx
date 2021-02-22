import React, { Fragment } from 'react';
import { Button } from './components/Button';
import './styles/global.css';
import {ExperienceBar} from './components/ExperienceBar';

function App() {
  return (
    <div className="container">
      <ExperienceBar></ExperienceBar>
    </div>
  );
}

export default App;
