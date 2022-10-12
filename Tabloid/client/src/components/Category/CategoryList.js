import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category";
import "./Category.css";
import { Form, FormGroup } from "reactstrap"
import { addCategory } from "../../modules/categoryManager"
import { CreateCategory } from "./CreateCategory";

export const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const [category, update] = useState({
        Name: ""
    })

    const getCategories = () => {
        getAllCategories().then(categories => setCategories(categories))
    }

    useEffect(() => {
        getCategories()
    },
        []
    )
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        // this.setState({
        //     itemvalues: [{}]
        // });
    };

    const handleCreateButtonClick = (event) => {
        event.preventDefault()
        const categoryToSendToApi = {
            Name: category.Name
        }

        addCategory(categoryToSendToApi)
        getCategories()
        handleReset()
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
                    categories.map((category) => (
                        <Category category={category} key={category.id} />
                    ))
                }
                <Form id="addCategoryForm">
                    <FormGroup>
                        <fieldset>
                            <div className="formInputsContainer">
                                {/* <label htmlFor="name">Category Name:</label> */}
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
                {/* <Link to={"/category/create"}>CREATE CATEGORY</Link> */}
            </div>
        </div>
    )
}