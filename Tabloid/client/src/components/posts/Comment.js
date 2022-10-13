import { Card, CardBody, Row } from "reactstrap"

export const Comment = ({postComment}) => {
    return (
        <Card>
            <CardBody>
                <strong>Subject: {postComment.subject}</strong>
                <p>{postComment.content}</p>
                <Row>
                <p>By: {postComment.commenter?.displayName}</p>
                <p><img src={postComment.commenter?.imageLocation} /></p>
                </Row>
                <p>{postComment.createDateTime}</p>
            </CardBody>
        </Card>
    )
}