import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const Post = ({post, user }) => {
    return (
        <Card>
            <p className="text-left px-2">Posted by: {user.fullName}</p>
            <CardBody>
                <p>
                    <strong>Post: <Link to={`/post/${post.id}`}>{post.title.toUpperCase()}</Link></strong>
                </p>
                <p>Category: {post.category.name}</p>
            </CardBody>
        </Card>
    )
}