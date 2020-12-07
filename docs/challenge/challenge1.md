# Lesson Challenge 1

Read these articles: The what and why of Redux and Leveling Up with React: Redux. Answer the following questions (in your own words) and share your answers with your classmates:

1. What are the [advantages of using Redux](#advantages-of-using-redux)

2. Describe the [3 principles Redux follows](#3-principles-of-redux).

## Advantages of Using Redux

- It provides a single source of truth for the **_model_** layer
- It provides uni-directional data flow from **_model_** to **_view_** layer
- It creates a more predictable application state by implementing an application architecture that allows data to only flow in one direction
- As data follows a strict channel, it is much easier to pinpoint where an error is should a bug show up
- It prevents app state from getting intertwined by separating the view and the models for the views

## 3 Principles of Redux

### 1. Single Source of Truth

This is an object tree that contains all the application state, making it easier to implement changes to the application state, keep track of changes as well as implement Undo/Redo

### 2. State is read-only

Mutations/updates to the state are carries out by dispatching actions.
Actions are event objects with a `type` property and any other data.
The `type` property describes what update is to be made and any other data passed into the action is necessary for the update.
Actions are created by functions called **_Action Creators_**.

### 3. Reducer

This is a pure function responsible for handling the dispatched action.
A reducers has 2 arguments

- The current state

- The action

A reducer returns a **_new state_** based on the **_action_** that was passed to it.
For every percivable action type, a set of instructions on how to update the application state is defined in the reducer.
Such that when the action is dispatched, the reducer reads off the action type.
Then, based on the preset set of instructions for that action type and the data supplied by the action, the reducer transform the current state to a new state.

Things to never do in a reducer:

- Mutate its arguments
- Perform side effects like API calls and routing transitions
- Call non-pure functions
