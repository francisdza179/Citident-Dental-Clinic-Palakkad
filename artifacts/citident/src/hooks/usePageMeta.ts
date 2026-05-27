import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
}

const BASE_URL = "https://citident-dental-clinic-palakkad-api.vercel.app";

export function usePageMeta({ 
  title, 
  description, 
  ogImage = "/Reception_-_Hero_Image_1776875350329.png" 
}: PageMetaProps) {
  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Update title
    const fullTitle = `${title} | Citident Dental Clinic Palakkad`;
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (attr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Construct absolute URLs
    const absoluteImage = ogImage.startsWith("http") 
      ? ogImage 
      : `${BASE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
    const absoluteUrl = `${BASE_URL}${window.location.pathname.replace(/^\/index\.html$/, "")}`;

    // Description
    setMetaTag("name", "description", description);

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", absoluteImage);
    setMetaTag("property", "og:image:secure_url", absoluteImage);
    setMetaTag("property", "og:url", absoluteUrl);

    // Image helper dimensions
    if (ogImage === "/Reception_-_Hero_Image_1776875350329.png") {
      setMetaTag("property", "og:image:type", "image/png");
      setMetaTag("property", "og:image:width", "1360");
      setMetaTag("property", "og:image:height", "768");
    }

    // Twitter
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", absoluteImage);

  }, [title, description, ogImage]);
}
