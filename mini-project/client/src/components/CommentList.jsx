const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "The content is pending moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return renderedComments;
};

export default CommentList;
