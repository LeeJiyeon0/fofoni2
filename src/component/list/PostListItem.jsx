import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: White;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props) {
    const { post, onClick } = props;

    if (!post) {
        return <div>No post available</div>;
    }

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title  || 'No title available'}</TitleText>
        </Wrapper>
    );
}
PostListItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func
};
export default PostListItem;