import { useState } from 'react';

import { addBlogPost, NewBlogPost } from '@/firebase/addData';
import { Input } from './Input';

export const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: NewBlogPost = {
      title,
      content,
      author    
    };

    try {
      await addBlogPost(newPost)
      console.log(`New blog post ${title} added to Firestore!`);
    } catch (error) {
      console.error('Error adding blog post:', error);
      // TODO: log error
    }

    // reset form fields
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <Input title="Title" value={title} setValue={setTitle} required />
        <Input title="Content" type="textarea" value={content} setValue={setContent} required />
        <Input title="Author" value={author} setValue={setAuthor} required />
        <button type="submit">Submit</button>
    </form>
  );
};