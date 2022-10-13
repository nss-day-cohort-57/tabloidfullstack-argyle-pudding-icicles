import React from "react";
import { Card, CardBody } from "reactstrap";

export const Category = ({ category }) => {
    return (
        <Card>
            <CardBody id="category-cardBody">
                <section className="categoryContainer">
                    <div className="categoryNameContainer">
                        <span className="categoryName">{category.name}</span>
                    </div>

                    <div className="buttonContainer">
                        <span className="categoryEditButton">EDIT</span>
                        <span className="categoryDeleteButton">DELETE</span>
                    </div>
                </section>
            </CardBody>
        </Card>
    )
}

