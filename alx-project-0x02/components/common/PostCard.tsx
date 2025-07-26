import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 capitalize">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{body}</p>
      </div>
      <div className="text-right text-sm text-gray-500">User ID: {userId}</div>
    </div>
  );
};

export default PostCard;