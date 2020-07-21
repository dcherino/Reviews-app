# Comments about the project



## Redux toolkit

The application is not really big and Redux is not really necessary here. React Context should be enough managing the state in this case. However, I decided to use Redux for three main reasons:

* Mainly, to show my ability to use Redux. I think that Redux is being used within the company and I wanted to show that I'm familiar with the library.

* Redux allows us to escalate the app easily without big refactoring.

* Also, to show my ability to use the new Redux Toolkit which simplifies things and it needs much less configuration.

## Styled components

Although I think that for this project would be easier using CSS Modules, I decided to use Styled components in order to show that I'm familiar with this CSS-in-JS styling framework.

## Design

The design was created from scratch using Photoshop, Illustrator and Figma. The result, in my opinion, is a beautiful interface with a nice user-experience. Although I get some inspiration for the graph, it is a totally original design, fully responsive with very intuitive elements for the user.

## Improvements

More than improvements, I would like to add an option to sort and filter reviews but I ran out of time. For sure I will add them in my spare time independently of the recruitment process.

## Test suites coverage

Due to the short period to develop the project, I focused on testing the main functionalities of the application which are:

* Get initial state from the store.
* It should properly set loading and error state when fetching data from API.
* It should properly populate reviews in the state when fetching data from API.
* It should render the form.
* It should submit and render a confirmation message.
* It should throw an Error message when failing fetching data.
* It should add a new review to the store.

Having the proper time, I would aim to cover every component.