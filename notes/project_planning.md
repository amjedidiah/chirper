# Project Planning Guide

1. [Identify What Each View Should Look Like](#identify-what-each-view-should-look-like)
2. [Break Each View Into a Hierarchy of Components](#break-each-view-into-a-hierarchy-of-components)
3. [Determine What Events Happen in the App](#determine-what-events-happen-in-the-app)
4. [Determine What Data Lives in the Store](#determine-what-data-lives-in-the-store)

## Identify What Each View Should Look Like

Draw each view to know what information and data will live on each page.
Use a mockup app.

## Break Each View Into a Hierarchy of Components

Do this by: :

- drawing boxes around every component
- arranging components into a hierarchy

## Determine What Events Happen in the App

Determine and list what event(s) happens in each component.
This will also help identify what actions each component will consume

## Determine What Data Lives in the Store

- Data that is required by just one component should live in that component.
- Data that is required by multiple components or will pass through a component(that doesn't need it) to another(that does need it) should live in the store

### Rules of Normalization

These are the rules to use for normalizing state data

- Each type of data gets its own "table" in the state.
- Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
- Any references to individual items should be done by storing the item's ID.
- Arrays of IDs should be used to indicate ordering.

### Accessing the Store From An Action Creator

Generally, accessing the store from an action creator is considered an anti-pattern. Dan Abramov says that the few use cases where it's acceptable to do that are:

> to check cached data before you make a request or to check whether you are authenticated (in other words, doing a conditional dispatch).
