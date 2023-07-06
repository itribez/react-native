import React from 'react';
import styled from 'styled-components/native';
import { Image, ImageSourcePropType } from 'react-native';

// Define styled components
const PostContainer = styled.View`
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f2f2f2;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const PostContent = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

const PostImage = styled.Image`
  width: 100%; 
  height: 200px; 
  margin-top: 10px; 
`;

type PostProps = {
  title: string;
  content: string;
  image?: ImageSourcePropType; 
};

const Post = ({ title, content, image }: PostProps) => {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      {image && <PostImage source={image} />}
    </PostContainer>
  );
};

export default Post;
