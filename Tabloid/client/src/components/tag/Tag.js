import React, { useState } from "react";
import { Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deleteTag } from "../../modules/tagManager";
import { NavLink as RRNavLink } from "react-router-dom";


const Tag = ({ tag }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const deleteButton = (id) => {
    deleteTag(id)
      .then(toggle)
  }

  return (
    <Card>
      <CardBody id="tag-cardBody">
        <section className="tagContainer">
          <div className="tagNameContainer">
            <span className="tagName">{tag.name}</span>
          </div>
          <div className="buttonContainer">
            <Button id="editButton" tag={RRNavLink} to={`/tag/edit/${tag.id}`}>EDIT</Button>
            <button outline onClick={toggle}
              className="deleteButton">
              DELETE
            </button>
          </div>
        </section>
        <Modal isOpen={modal} toggle={toggle} {...tag}>
          <ModalHeader toggle={toggle}>Delete Tag</ModalHeader>
          <ModalBody>
            <>
              <section className='quickView'>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="50em"></img>
                <br />
                <div>{tag.name}</div>
              </section>
            </>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              CANCEL
            </Button>
            <Button color="secondary" onClick={() => { deleteButton(tag.id) }} >
              CONFIRM
            </Button>
          </ModalFooter>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default Tag;
