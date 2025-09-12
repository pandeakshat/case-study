import React from "react";

export default function FocusCard({
  title,
  image,
  readUrl,
  description, // Added description prop
}) {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-6 max-w-full">
      {/* Left side with image + read button */}
      <div className="flex flex-col items-center w-48 mr-6">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded mb-4 object-contain h-40 w-full"
          />
        )}
        <a
          href={readUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 w-full bg-blue-600 text-white rounded text-center hover:bg-blue-700"
        >
          Read
        </a>
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-grow min-w-0">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {description && (
          // Render description as HTML safely if it contains HTML tags
          <div
            className="prose prose-sm overflow-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  );
}
