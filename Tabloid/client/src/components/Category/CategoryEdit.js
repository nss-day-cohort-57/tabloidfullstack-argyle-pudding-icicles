import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup } from "reactstrap"
import { updateCategory, getCategoryById } from "../../modules/categoryManager"
import "./Category.css"

export const CategoryEdit = () => {
    const { categoryId } = useParams()
    const navigate = useNavigate()

    const [updatedCategory, update] = useState({
        id: categoryId,
        Name: ""
    })
    const [selectedCategory, setSelectedCategory] = useState({})

    const handleEditButtonClick = (category) => {
        navigate("/category")
        return updateCategory(category)
    }

    const getSelectedCategory = () => {
        getCategoryById(categoryId).then(category => setSelectedCategory(category))
    }

    useEffect(
        () => {
            getSelectedCategory()
        },
        []
    )

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <Form>
                        <h1 className="categoryPageHeader">EDIT CATEGORY</h1>
                        <FormGroup>
                            <fieldset>
                                <div className="form-description">
                                    <div className="categoryEditNameLabelAndInput">
                                        <label htmlFor="name">NAME:</label>
                                        <input type="name"
                                            className="form-control"

                                            placeholder={`${selectedCategory.name}`}
                                            onChange={
                                                (evt) => {
                                                    let copy = { ...updatedCategory }
                                                    copy.Name = evt.target.value
                                                    update(copy)
                                                }
                                            } />
                                    </div>
                                    <div className="categoryEditFormButtons">
                                        <button onClick={() => { handleEditButtonClick(updatedCategory) }}
                                            className="categoryEditSaveButton">SAVE</button>
                                        <button onClick={() => navigate("/category")} className="categoryCancelButton">CANCEL</button>
                                    </div>
                                </div>
                            </fieldset>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </>
    )
}
