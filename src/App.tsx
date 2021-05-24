import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { AiOutlineSave } from "react-icons/ai";
import styled from "styled-components";
import SimpleForm from "./components/SimpleForm";

function App() {
  const [isLoading, setLoading] = useState(false);

  const handleClick = (text: any) => {
    alert(text);
  };

  const handleLoadingButtonClick = (text: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(text);
    }, 2000);
  };

  const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
  `;

  return (
    <div className="App">
      <h1>Buttons come here </h1>
      {/*types of button*/}
      <ButtonsWrapper>
        <Button
          variant="primary"
          onClick={() => handleClick("Primary button clicked!")}
          text={"Primary Button"}
        />
        <Button
          variant="secondary"
          onClick={() => handleClick("Secondary button clicked!")}
          text={"Secondary Button"}
        />
        <Button
          icon={<AiOutlineSave />}
          onClick={() => handleClick("Button with icon clicked!")}
          text={"Button with icon"}
        />

        {/* Button Design from outside | Can be styled from outside*/}

        <Button
          style={{
            backgroundColor: "brown",
            width: "150px",
            borderRadius: "14px",
          }}
          onClick={() => handleClick("Custom styled button clicked!")}
          text={"Custom styled button"}
        />
        <Button
          className={"custom-button"}
          onClick={() => handleClick("Custom class button clicked!")}
          text={"Custom class button"}
        />
        <Button
          loading={isLoading}
          onClick={() => handleLoadingButtonClick("Loading button clicked!")}
          text={"Loading button"}
        />
        <Button disabled={true} text={"Disabled button"} />
      </ButtonsWrapper>
      {/*Form*/}
      <SimpleForm />
    </div>
  );
}

export default App;
