# Lesson Challenge 4

Read these articles: [Component State vs Redux Store](https://medium.com/netscape/component-state-vs-redux-store-1eb0c929277) and [React + Redux Architecture : Separation of Concerns](https://medium.com/prod-io/react-redux-architecture-part-1-separation-of-concerns-812da3b08b46).
Answer the following questions and share your answers with your classmates:

1. Explain [how React interplays with Redux](#how-react-interplays-with-redux)

2. Give an example that illustrates the Separation of Concerns Principle

## How React Interplays with Redux

React is a Javascript library which excels at rendering UI elements, using **_components_**.
Components render UI based on the state of the different pieces of data in that component.
These components could have **_children components_** and they themeselves be children of a **_parent component_**.

To avoid repetition of data, data could be stored in the parent component and then passed on different childrenn componnets that require them.
These children components that do nothing but render UI elements with or without data from their parents are called **_Presentational Components_**.

When one or more pieces of data in a component(whether parent or child component) changes over time, the component is said to have multiple **_state_**.
Such components are said to be **_Smart Components_**.

Sometimes, multiple components depend on a Smart components's data for their state.
To help us better handle this scenario, we use **_Redux store_**

Redux store provides a state tree to house all shared state data.
Components that require connection to the redux store are referred to as **_Container components_**.
