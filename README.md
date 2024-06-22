###Project: Web Scraper for Tax News
Description
This project is a web scraper built using Node.js and Express.js to fetch articles related to "tax" from various news websites. It utilizes Axios for HTTP requests and Cheerio for web scraping.

Installation
To run this project locally, follow these steps:

Clone the repository: git clone <repository-url>
Navigate into the project directory: cd <project-directory>
Install dependencies: npm install
Usage
Start the server: npm start
Open your browser or use an API client (like Postman) to access the endpoints.
Endpoints
GET /news: Retrieves all articles related to "tax" from all configured news websites.
GET /news/
: Retrieves articles related to "tax" from a specific news website identified by :newsPageId.
Configuration
The scraper is configured to fetch data from the following news websites:

news24: https://www.news24.com/fin24/money
dailymaverick: https://www.dailymaverick.co.za/business-maverick
enca: https://www.enca.com/business
ewn: https://www.ewn.co.za/topics/Business
Notes
Ensure Node.js and npm are installed on your system.
The scraper fetches articles containing the keyword "tax" from each news website.
Adjust PORT variable in index.js or via environment variable to change the server port.
Dependencies
Express.js: Web framework for Node.js
Axios: Promise-based HTTP client
Cheerio: Fast, flexible, and lean implementation of jQuery core for server-side HTML parsing
License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Sakhile Buthelezi

Acknowledgments
Inspiration or resources used
