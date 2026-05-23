// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";


// type PropsA = {
//     title: string;
//     description: string;
// }
//
// type PropsB = {
//     title: string;
//     description: string;
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// //Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// //Intersection
// type Props = PropsA & PropsB;
//
// interface PropsTwo {
//     title: string;
//     description: string;
// }
//
// interface PropsTwo {
//     price: number;
//     sort: number;
// }
//
// // PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//     image: string;
// }
//
// // PropsThree = {title, description, price, sort, image}

import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";


function App() {
  return (
    <>
      {/*LESSON TWO*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}

      {/*LESSON THREE*/}
      <ArrowFunctionalComponentWithProps title="Heading 1"/>
      <ArrowFunctionalComponentWithProps
          title="Second Title"
          description="This is a description"
      />
    </>
  )
}

export default App
