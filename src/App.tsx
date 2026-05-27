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
//import Layout from "./components/Layout";
//import PreviousValue from "./components/LessonSix/PreviousValue.tsx";
// import {Route, Routes} from "react-router";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import HomePage from "./pages/HomePage.tsx";
//import WindowSize from "./components/LessonSix/WindowSize.tsx";
//import FocusInput from "./components/LessonSix/FocusInput.tsx";
//import AutoRedirect from "./components/LessonSix/AutoRedirect.tsx";
//import AutoRedirectAdvanced from "./components/LessonSix/AutoRedirectAdvanced.tsx";
//import NameChanger from "./components/LessonFive/NameChanger.tsx";
//import CounterButton from "./components/LessonFour/CounterButton.tsx";
//import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
//import NameChangerWithTitle from "./components/LessonFive/NameChangerWithTitle.tsx";
//import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";


import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import UserPage from "./pages/UserPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import MultiFieldForm from "./components/LessonNine/MultiFieldForm.tsx";
import MultiFieldFormValidation from "./components/LessonNine/MultiFieldFormValidation.tsx";

function App() {

    // useEffect(() => {
    //   history.pushState({}, "", "/about");
    // }, []);

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
        {/*<Layout addClasses='bg-grey-50'>*/}
        {/*  /!*<ArrowFunctionalComponentWithProps*!/*/}
        {/*  /!*  title="Second Title"*!/*/}
        {/*  /!*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*!/*/}
        {/*  /!*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta fuga modi mollitia placeat sequi.</p>*!/*/}
        {/*  /!*<Counter/>*!/*/}
        {/*    <CounterAdvanced/>*/}
        {/*</Layout>*/}

        {/*LESSON FIVE*/}
        {/*<Layout>*/}
        {/*    <NameChangerWithTitle/>*/}
        {/*</Layout>*/}

        {/*LESSON SIX*/}
        {/*<Layout addClasses="bg-grat-50">*/}
        {/*    /!*<AutoRedirectAdvanced />*!/*/}
        {/*    /!*<WindowSize/>*!/*/}
        {/*    /!*<FocusInput/>*!/*/}
        {/*    <PreviousValue />*/}
        {/*</Layout>*/}

        {/*/*/}
        {/*/examples/*/}
        {/*/examples/name-changer*/}
        {/*/examples/counter*/}
        {/*/examples/counter-advanced*/}

        {/*LESSON SEVEN*/}
        {/*<Routes>*/}
        {/*  <Route index element={<HomePage />} />*/}
        {/*  /!*<Route path="/" element={<HomePage />} />*!/*/}
        {/*  <Route path="name-changer" element={<NameChanger />} />*/}
        {/*  <Route path="counter" element={<Counter />} />*/}
        {/*  <Route path="counter-advanced" element={<CounterAdvanced />} />*/}
        {/*</Routes>*/}

        {/*/*/}
        {/*/examples/*/}
        {/*/examples/name-changer*/}
        {/*/examples/counter*/}
        {/*/examples/counter-advanced*/}

        <Routes>
            <Route element={<RouterLayout />}>
                <Route index element={<HomePage />} />
                {/*<Route path="examples?">*/}
                {/*<Route path="examples">*/}
                {/*  <Route index element={<NameChanger />} />*/}
                {/*  <Route path="name-changer" element={<NameChanger />} />*/}
                {/*  <Route path="counter" element={<Counter />} />*/}
                {/*  <Route path="counter-advanced" element={<CounterAdvanced />} />*/}
                {/*</Route>*/}

                <Route path="users">
                    {/*<Route index element={<UserListPage />} />*/}
                    <Route path=":userId" element={<UserPage />} />
                    {/*  /users/15  Path Params  */}
                    {/*  /users?id=15  Query Params  */}
                    {/*  /users?page=2&sort=asc  Query Params  */}
                </Route>

                <Route path="search" element={<SearchPage />} />

                <Route path='multifield-form' element={<MultiFieldForm/>} />
                <Route path="multifield-form-validation" element={<MultiFieldFormValidation />} />


            </Route>
            {/* /files/* */}
            {/*<Route path="files/*" element={<File />} />*/}
            {/*let params = useParams();*/}
            {/*let filepath = params["*"]*/}
            {/*<Route path="*" element={<NotFoundPage />} />*/}

        </Routes>

    </>
  )
}

export default App
