import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category";
import "./Category.css";
import { Form, FormGroup } from "reactstrap"
import { addCategory } from "../../modules/categoryManager"

export const CategoryList = () => {
    const [initialCategories, setInitialCategories] = useState([])
    const [upToDateCategories, setUpToDateCategories] = useState([])
    const [category, update] = useState({
        Name: ""
    })

    const getCategories = () => {
        getAllCategories().then(categories => setInitialCategories(categories))
    }

    useEffect(() => {
        getCategories()
    },
        []
    )

    const getUpToDateCategories = () => {
        getAllCategories().then(categories => setUpToDateCategories(categories))
    }

    useEffect(() => {
        getUpToDateCategories()
    },
        [initialCategories]
    )

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        )
    };

    const handleCreateButtonClick = (event) => {
        event.preventDefault()
        const categoryToSendToApi = {
            Name: category.Name
        }

        return addCategory(categoryToSendToApi)
            .then(getCategories())
            .then(handleReset())
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="logoContainer">
                    <span className="logoCircle">
                        <img className="quillLogo" src={process.env.PUBLIC_URL + "/quill-logo.png"} />
                    </span>
                </div>
                <h1 className="categoryPageHeader">CATEGORY MANAGEMENT</h1>
                {
                    upToDateCategories.map((category) => (
                        <Category category={category} key={category.id} />
                    ))
                }
                <Form id="addCategoryForm">
                    <FormGroup>
                        <fieldset>
                            <div className="formInputsContainer">
                                <input type="name"
                                    className="createCategoryInput"
                                    placeholder="Create a new category.."
                                    onChange={
                                        (evt) => {
                                            let copy = { ...category }
                                            copy.Name = evt.target.value
                                            update(copy)
                                        }
                                    } />
                                <button onClick={(clickEvent) => { handleCreateButtonClick(clickEvent) }}
                                    className="categorySaveButton" >SAVE</button>
                            </div>
                        </fieldset>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}