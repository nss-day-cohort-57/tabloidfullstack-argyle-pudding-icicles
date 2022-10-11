import React from "react";
import { Card, CardBody } from "reactstrap";

export const Post = ({post}) => {
    return (
        <Card>
            <p className="text-left px-2">Posted by: {post.userProfile.FullName}</p>
            <CardBody>
                <p>
                    <strong>Post: {post.title}</strong>
                </p>
                <p>Category: {post.category.name}</p>
            </CardBody>
        </Card>
    )
}