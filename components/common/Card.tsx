import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded-lg p-4 shadow">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-40 object-cover rounded"
    />
    <h2 className="text-xl font-bold mt-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
