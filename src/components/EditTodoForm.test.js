import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditTodoForm } from './EditTodoForm';
import '@testing-library/jest-dom';


describe('EditTodoForm Component', () => {
  const mockEditTodo = jest.fn(); // Mock function for editTodo
  const task = { id: '1', task: 'Test Task' }; // Example task

  it('renders with initial value', () => {
    const { getByDisplayValue } = render(<EditTodoForm editTodo={mockEditTodo} task={task} />);
    expect(getByDisplayValue('Test Task')).toBeInTheDocument(); // Check if the input field has the initial value
  });

  it('submits the form with new value', () => {
    const { getByPlaceholderText, getByText } = render(<EditTodoForm editTodo={mockEditTodo} task={task} />);

    // Simulate user changing the task
    const input = getByPlaceholderText('Update task');
    fireEvent.change(input, { target: { value: 'New Task' } });

    // Simulate form submission
    const submitButton = getByText('Add Task');
    fireEvent.click(submitButton);

    // Check if the mockEditTodo function was called with the new value and task ID
    expect(mockEditTodo).toHaveBeenCalledWith('New Task', '1');
  });
});