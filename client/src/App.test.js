import React from 'react';   

import { render, fireEvent } from '@testing-library/react';  
import "@testing-library/jest-dom/extend-expect";            
import "@testing-library/react/cleanup-after-each";          
import App from './App'
import FormikForm from './Form'

describe('<App/>', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
})

describe('<FormikForm/>', ()=>{
  it('counter button adds one', ()=>{
    //getbyTestId allows access from component FormikForm
    const { getByTestId } = render(<FormikForm/>)
  
    //fireEvent.click clicks on data-testid inside btn
    fireEvent.click(getByTestId('submitbtntest'));
    
    //expect what we wrote the function 
    // to do is actually the result of what we want
    expect(getByTestId('submitcounter')).toHaveTextContent('1')
  
  })
  it('clicked', () => {
    //create a imaginary function
    const click = jest.fn();
    const {getByText} = render(<FormikForm submit={click}/>)
  });
})


