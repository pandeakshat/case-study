import React from "react";

export default function ClickableCard({
  title,
  caption,
  image,
  votes,
  community,
  readUrl,
}) {
  return (
    <a
      href={readUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="bg-white p-6 flex flex-col h-full">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded mb-4 object-contain h-40 w-full"
          />
        )}
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-gray-500 mb-4">{caption}</p>

        <div className="grid grid-cols-2 gap-4 font-medium text-center text-gray-700 mt-auto">
          <div>Votes: {votes ?? 0}</div>
          <div>Community: {community ?? 0}</div>
        </div>
      </div>
    </a>
  );
}
