import React from "react";

export const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairInput = React.createRef();

  const handleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairInput.current.value);

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" ref={nameInput} />
      <input type="number" name="age" placeholder="age" ref={ageInput} />
      <input
        type="text"
        name="hairColor"
        placeholder="hair color"
        ref={hairInput}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
