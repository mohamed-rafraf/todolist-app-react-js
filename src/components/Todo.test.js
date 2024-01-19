import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Todo } from './Todo';
import '@testing-library/jest-dom';

describe('Todo Component', () => {
  const mockDeleteTodo = jest.fn();
  const mockEditTodo = jest.fn();
  const mockToggleComplete = jest.fn();
  const task = { id: '1', task: 'Test Task', completed: false };

  it('renders todo item', () => {
    const { getByText } = render(<Todo task={task} deleteTodo={mockDeleteTodo} editTodo={mockEditTodo} toggleComplete={mockToggleComplete} />);
    expect(getByText('Test Task')).toBeInTheDocument();
  });

  it('toggles completion status', () => {
    const { getByText } = render(<Todo task={task} deleteTodo={mockDeleteTodo} editTodo={mockEditTodo} toggleComplete={mockToggleComplete} />);
    fireEvent.click(getByText('Test Task'));
    expect(mockToggleComplete).toHaveBeenCalledWith('1');
  });
});
