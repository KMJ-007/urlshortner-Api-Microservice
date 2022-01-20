# [URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)



## This project part of free code camp backend api module, i learned express, what is post method what is get method, how to pass data from front-end to backend.  
### live demo [here](https://urlshortner-Api-Microservice.karanmj.repl.co)
  
 
 <br>
 <details>
    <summary>User Stories:</summary>
1. You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}

2. When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

3. If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }
</details>
 <br>

# Technology used to build this project

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)



## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/KMJ-007/urlshortner-Api-Microservice.git
```

2. Change the working directory

```bash
cd urlshortner-Api-Microservice
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

5. Run the app

```bash
npm run dev
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.