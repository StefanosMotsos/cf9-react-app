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

// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout";
import Counter from "./components/LessonFour/Counter.tsx";


function App() {
  return (
    <>
      {/*LESSON TWO*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}

      {/*LESSON THREE*/}
        {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
        {/*<ArrowFunctionalComponentWithProps*/}
        {/*  title="Second Title"*/}
        {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*/}
        {/*/>*/}
        <Layout addClasses='bg-grey-50'>
          {/*<ArrowFunctionalComponentWithProps*/}
          {/*  title="Second Title"*/}
          {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*/}
          {/*/>*/}
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta fuga modi mollitia placeat sequi.</p>*/}
          <Counter/>
        </Layout>
    </>
  )
}

export default App
