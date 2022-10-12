import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup } from "reactstrap"
import { updateTag } from "../../modules/tagManager"
import { getTagById } from "../../modules/tagManager"


export const TagEdit = () => {
    const tagId = useParams()
//create a use state to hold tag obj value that will be set upon the users click of button
const navigate = useNavigate()
const [tag, update] = useState({
    Name: ""
  })
  const tagObject = getTagById(tagId) 

  const handleEditButtonClick = (event) => {
    event.preventDefault()
    const tagToSendToApi = {
      Name: tag.Name
    }
    navigate("/tag")
    return updateTag(tagToSendToApi)
}
    return (
        //this form will take input data from the user and set those values to a object
        //then a create post video button will post to the database and the video list will rerender will the added video
        <>
            <Form>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
                <FormGroup>
                    <fieldset>
                        <div className="form-description">
                            <label htmlFor="name">Name:</label>
                            <input type="name"
                                className="form-control"
                                placeholder={`${tagObject?.Name}`}
                                onChange={
                                    //take current obj value and update with user selected value
                                    (evt) => {
                                        let copy = { ...tag }
                                        copy.Name = evt.target.value
                                        update(copy)
                                    }
                                } />
                                <button    onClick={(clickEvent) => { handleEditButtonClick(clickEvent)}}
                                className="editButton" >Edit Tag</button>
                        </div>
                    </fieldset>
                </FormGroup>
            </Form>
        </>
    )
}
