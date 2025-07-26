import React from 'react';
import { UserProps } from '@/interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{user.name}</h3>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Website:</strong>{' '}
        <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {user.website}
        </a>
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Company:</strong> {user.company.name}
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city},{' '}
        {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;