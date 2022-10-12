import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category";
import "./Category.css";

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        getAllCategories().then(categories => setCategories(categories))
    }

    useEffect(() => {
        getCategories()
    },
        []
    )

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
            </div>
        </div>
    )
}