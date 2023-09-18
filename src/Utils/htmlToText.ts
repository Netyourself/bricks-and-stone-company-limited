import { htmlToText } from 'html-to-text';

export const htmlToTextUtil = (htmlContent: string) => {
  // Extract and convert HTML content to plain text.
  const textContent = htmlToText(htmlContent, {
    wordwrap: 130,
    //ignoreImage:true,
    //ignoreHref: true,
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } },
    ],
  });

  return textContent;
};
