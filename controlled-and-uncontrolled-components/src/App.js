import { useState } from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={goToNext({ name: "John" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <button onClick={goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  //   const [shouldShowModal, setShouldShowModal] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [onboardingData, setOnboardingData] = useState({});

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <ControlledOnboardingFlow
      onFinish={(data) => console.log(data)}
      currentIndex={currentIndex}
      onNext={onNext}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </ControlledOnboardingFlow>
  );

  // <UncontrolledOnboardingFlow onFinish={(data) => console.log(data)}>
  //   <StepOne />
  //   <StepTwo />
  //   <StepThree />
  // </UncontrolledOnboardingFlow>

  //   return (
  //     <>
  //       <UncontrolledForm />
  //       <ControlledForm />
  //       <UncontrolledModal />
  //       <ControlledModal
  //         shouldShow={shouldShowModal}
  //         onRequestClose={() => {
  //           setShouldShowModal(false);
  //         }}
  //       >
  //         <h1>Controlled Modal</h1>
  //       </ControlledModal>
  //       <button onClick={() => setShouldShowModal(!shouldShowModal)}>
  //         {shouldShowModal ? "Hide Modal" : "Show Modal"}
  //       </button>
  //     </>
  //   );
}

export default App;
