# Todo App

## Overview
This Todo App is a simple yet effective task management application built using React and Vite. It provides an intuitive interface for users to manage their daily tasks efficiently. Users can add new tasks, edit existing ones, and delete tasks that are no longer needed. This project demonstrates the use of modern web development technologies and best practices in React.

## Features
- **Add Tasks:** Users can enter new tasks in the input field and click the "Add" button to add them to the task list.
- **Edit Tasks:** Each task in the list has an "Edit" button. Clicking this button fills the input field with the task's current value, allowing the user to update it.
- **Delete Tasks:** Each task has a "Delete" button that removes the task from the list when clicked.
- **Conditional Button:** The "Add" button changes to "Update" when a task is being edited, and it is only enabled when the input field is not empty.

## Project Structure
The project is divided into three main components:
- **App Component:** The main component that manages the overall state of the application, including the list of tasks and the current editing state.
- **Search Component:** Handles user input for adding or updating tasks, with validation to ensure tasks are not empty.
- **File Component:** Displays the list of tasks, with options to edit or delete each task.

## State Management
The application uses React's `useState` hook to manage the state:
- `arr` holds the list of tasks.
- `edit` is a boolean indicating if a task is being edited.
- `editData` holds the index and value of the task being edited.

## Adding and Updating Tasks
When adding a new task, the input value is appended to the `arr` state. When editing a task, the corresponding task in the `arr` state is updated with the new value. After adding or updating a task, the input field is cleared, and the edit mode is reset.

## Deleting Tasks
Tasks can be deleted by clicking the "Delete" button next to them. This action filters out the task from the `arr` state, effectively removing it from the list.

## User Experience
The app ensures a smooth user experience by providing immediate feedback on actions:
- The input field is dynamically populated when editing a task.
- The button text changes based on the current action (adding or updating).
- The add/update button is disabled if the input field is empty or contains only whitespace.

## Conclusion
This Todo App is a practical example of how to build a task management application with React. It covers essential React concepts such as state management, props, and conditional rendering. The use of a component-based architecture makes the code clean and maintainable, and the user interface is designed to be responsive and user-friendly. This project is an excellent starting point for anyone looking to learn React and build more complex applications.
