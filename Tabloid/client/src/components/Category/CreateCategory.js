
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup } from "reactstrap"
import { addCategory } from "../../modules/categoryManager"
import "./Category.css"
import { getAllCategories } from "../../modules/categoryManager";


export const CreateCategory = () => {
    const navigate = useNavigate()
    const [category, update] = useState({
        Name: ""
    })


    const handleCreateButtonClick = (event) => {
        event.preventDefault()
        const categoryToSendToApi = {
            Name: category.Name
        }
        // navigate("/category")
        return addCategory(categoryToSendToApi)
    }
    return (
        <>
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
        </>
    )
}
