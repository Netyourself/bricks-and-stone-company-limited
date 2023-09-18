import axios from 'axios';

const fetchPageContent = async (urlParams: string) => {
  // Example page with id 9 /pages/9 https://cain-masonry.com.marksawards.com/wp/wp-json/wp/v2/pages/9
  const apiURL = `https://cain-masonry.com.marksawards.com/wp/wp-json/wp/v2/${urlParams}`;
  try {
    const response = await axios.get(apiURL);
    if (response.status !== 200) {
      throw new Error('Failed to fetch data from WordPress');
    }

    return response.data;
  } catch (error) {
    // cpature error and do nothing since the clients will have the hardcoded data displayed instead of the api data
    // throw new Error('Internal Server Error');
  }
};

export { fetchPageContent };
