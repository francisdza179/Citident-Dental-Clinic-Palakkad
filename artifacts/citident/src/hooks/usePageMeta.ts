import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
}

export function usePageMeta({ title, description, ogImage = "/attached_assets/Reception_-_Hero_Image_1776875350329.png" }: PageMetaProps) {
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

    // Description
    setMetaTag("name", "description", description);

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:url", window.location.href);

    // Twitter
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

  }, [title, description, ogImage]);
}
