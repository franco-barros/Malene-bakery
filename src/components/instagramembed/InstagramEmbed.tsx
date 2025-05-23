import React from "react";

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  const postId = url.split("/p/")[1]?.split("/")[0]; // Extrae el ID de la publicación

  if (!postId) return null;

  return (
    <iframe
      src={`https://www.instagram.com/p/${postId}/embed`}
      width="320"
      height="400"
      frameBorder="0"
      scrolling="no"
      allow="encrypted-media"
      title={`Instagram post ${postId}`}
      style={{ borderRadius: "8px" }}
    ></iframe>
  );
};

export default InstagramEmbed;
