import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup } from "reactstrap"
import { updateTag } from "../../modules/tagManager"

export const TagEdit = () => {
    const tagId = useParams()
    const navigate = useNavigate()
    
    //create a use state to hold tag obj value that will be set upon the users click of button
const [updatedTag, update] = useState({
    Id: tagId,
    Name: ""
  })

  const handleEditButtonClick = (tag) => {
    // event.preventDefault()
    updateTag(tag)
   return navigate("/tag")
}
    return (
        //this form will take input data from the user and set those values to a object
        //then a edit tag button will put to the database and the tag list will rerender will the edited tag
        <>
            <Form>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
                <FormGroup>
                    <fieldset>
                        <div className="form-description">
                            <label htmlFor="name">Name:</label>
                            <input type="name"
                                className="form-control"
                                placeholder="Enter tag name..."
                                onChange={
                                    //take current obj value and update with user selected value
                                    (evt) => {
                                        let copy = { ...updatedTag }
                                        copy.Name = evt.target.value
                                        update(copy)
                                    }
                                } />
                                <button onClick={() => {handleEditButtonClick(updatedTag)}}
                                className="editButton" >Edit Tag</button>
                        </div>
                    </fieldset>
                </FormGroup>
            </Form>
        </>
    )
}
