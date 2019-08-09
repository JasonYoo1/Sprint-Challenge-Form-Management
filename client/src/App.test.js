import React from 'react';   

import { render, fireEvent } from '@testing-library/react';  
import "@testing-library/jest-dom/extend-expect";            
import "@testing-library/react/cleanup-after-each";          
import App from './App'



describe('<App/>', ()=>{
  it('counter button adds one', ()=>{
    //getbyTestId allows access from component App
    const { getByTestId } = render(<App/>)

    //fireEvent.click clicks on data-testid inside btn
    fireEvent.click(getByTestId('formsubmit'));
    
    //expect what we wrote the function 
    // to do is actually the result of what we want
    expect(getByTestId('submitcounter')).toHaveTextContent('1')

  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
})

