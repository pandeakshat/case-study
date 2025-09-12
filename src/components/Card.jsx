import React from 'react';
import {
  Card as ShadCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

export default function Card({
  title,
  caption,
  image,
  votes,
  community,
  htmlContent,
}) {
  return (
    <ShadCard className="max-w-sm w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{caption}</CardDescription>
      </CardHeader>

      {image && (
        <img
          src={image}
          alt={title}
          className="rounded object-contain h-40 w-full my-4"
        />
      )}

      <div className="grid grid-cols-2 gap-4 text-center font-medium text-gray-700 mb-4">
        <div>V: {votes ?? 0}</div>
        <div>CM: {community ?? 0}</div>
      </div>
    </ShadCard>
  );
}
