import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import styled from 'styled-components/native';

const NewPostContainer = styled.View`
  padding: 15px;
  background-color: #cccccc; 
  margin-bottom: 10px;
  border-radius: 5px;
`;

const PostInput = styled.TextInput`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const NewPost = () => {
  const [content, setContent] = useState('');

  const submitPost = () => {
    // Here handle the submission of the post
    console.log({ content });
  };

  return (
    <NewPostContainer>
      <PostInput placeholder="What's on your mind?" value={content} onChangeText={setContent} multiline numberOfLines={4} />
      <Button title="Post" onPress={submitPost} />
    </NewPostContainer>
  );
};

export default NewPost;
