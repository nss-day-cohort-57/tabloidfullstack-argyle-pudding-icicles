import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Category = ({ category }) => {
    return (
        <Card>
            <CardBody id="category-cardBody">
                <section className="categoryContainer">
                    <div className="categoryNameContainer">
                        <span className="categoryName">{category.name}</span>
                    </div>

                    <div className="buttonContainer">
                        <Link to={`/category/edit/${category.id}`} className="categoryEditButton">EDIT</Link>
                        <span className="categoryDeleteButton">DELETE</span>
                    </div>
                </section>
            </CardBody>
        </Card>
    )
}

