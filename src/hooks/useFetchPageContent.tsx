import { useEffect, useState } from 'react';
import { htmlToText } from 'html-to-text';
import { fetchPageContent } from '@/services/wordpressService';
import { htmlToTextUtil } from '@/Utils/htmlToText';

const useFetchPageContent = (pageURL: string) => {
  const [pageContent, setPageContent] = useState<string | string[] | {} | null>(
    null
  );
  useEffect(() => {
    async function fetchPage() {
      const data: any = await fetchPageContent(pageURL);
      if (Array.isArray(data)) {
        // array of ex services, testimonials ,etc
        return setPageContent(data);
      } else if (pageURL === 'pages/59') {
        // special case to handle the gallery page
        // Extract images, alt text, and captions using regular expressions
        const extractImagesAndInfo = () => {
          const imageRegex =
            /<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"[^>]+(title="([^"]+)")?[^>]*>/g;

          const images = [];
          const altText = [];
          const captions = [];

          let match;

          while ((match = imageRegex.exec(data.content.rendered))) {
            const imageUrl = match[1];
            const alt = match[2];
            const caption = match[4];

            images.push(imageUrl);
            altText.push(alt);
            captions.push(caption);
          }

          return { images, altText, captions };
        };
        const { images, altText, captions } = extractImagesAndInfo();
        const imageInfo = extractImagesAndInfo();

        setPageContent(imageInfo);
      } else if (typeof data === 'object') {
        // simple text decriptions
        const htmlContent = data.content.rendered;
        const textContent = htmlToTextUtil(htmlContent);
        return setPageContent(textContent);
      }
    }

    fetchPage();
  }, [pageURL]);

  return pageContent;
};

export default useFetchPageContent;
