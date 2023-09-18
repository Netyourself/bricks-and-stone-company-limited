import { htmlToTextUtil } from './htmlToText';

interface PageContent {
  id: string;
  title: { rendered: string };
  content: {
    rendered: string;
  };
  // Add any other properties you need
  imageUrl: string;
}

export const transformedServiceContent = (servicesAPI: any) => {
  return servicesAPI?.map((item: PageContent) => {
    // Use regular expressions to extract the image URL from the HTML content
    const imageUrlMatch = item?.content.rendered.match(
      /<img[^>]*src="([^"]*)"[^>]*>/
    );
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : ''; // Extracted image URL

    return {
      id: item.id,
      shortTitle: htmlToTextUtil(item.title.rendered), // Use the title as shortTitle
      title: htmlToTextUtil(item.title.rendered),
      description: htmlToTextUtil(item.content.rendered),
      //icon: 'building',
      //imageUrl: 'image4.jpeg',
      imageUrl: imageUrl || 'image4.jpeg',
    };
  });
};
