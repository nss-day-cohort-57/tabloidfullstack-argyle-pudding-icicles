import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup } from "reactstrap"
import { addTag } from "../modules/tagManager"


export const TagCreate = () => {
//create a use state to hold tag obj value that will be set upon the users click of button
const navigate = useNavigate()
const [tag, update] = useState({
    Name: ""
  })

  const handleCreateButtonClick = (event) => {
    event.preventDefault()
    const tagToSendToApi = {
      // image needs to be converted to a blob
      Name: tag.Name
    }
    navigate("/tag")
    return addTag(tagToSendToApi)
}
    return (
        //this form will take input data from the user and set those values to a object
        //then a create post video button will post to the database and the video list will rerender will the added video
        <>
            <Form>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
                
                <button    onClick={(clickEvent) => { handleCreateButtonClick(clickEvent)}}
                className="btn-UpdateImage" >Save Tag</button>
                <FormGroup>
                    <fieldset>
                        <div className="form-description">
                            <label htmlFor="name">Tag Name:</label>
                            <input type="name"
                                className="form-control"
                                onChange={
                                    //take current obj value and update with user selected value
                                    (evt) => {
                                        let copy = { ...tag }
                                        copy.Name = evt.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                </FormGroup>
            </Form>
        </>
    )
}
