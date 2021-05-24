import React from "react";
import Button from "../Button";
import styled from "styled-components";

const SimpleForm = () => {
    const handleSubmit = (e) => {
        alert("Form submitted!")
    }
    const handleReset = (e) => {
        alert("Form reset!")
    }

    const FormWrapper = styled.div`
        display: flex;
        justify-content: center;
        form {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .form-footer {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 10px;
            }
        }
    `;

    return (
        <FormWrapper>
            <form onSubmit={(e) => handleSubmit(e)} onReset={(e) => handleReset(e)}>
                <h3>Form</h3>
                <div>
                    <input placeholder="Enter first name"/>
                </div>
                <div>
                    <input placeholder="Enter last name"/>
                </div>
                <div className="form-footer">
                    <Button
                        type={"submit"}
                        text={"Submit"}
                    />
                    <Button
                        style={{backgroundColor: "gray", marginLeft: "5px"}}
                        type={"reset"}
                        text={"Reset"}
                    />
                </div>
            </form>
        </FormWrapper>
    )
}

export default SimpleForm