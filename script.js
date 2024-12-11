document.getElementById("search-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const query = document.getElementById("query").value;
    const apiKey = "bd5c98ec-81a3-4efa-a0ba-0a2c6eb80406"; // Your API Key
    const apiUrl = `https://api.goperigon.com/v1/all?apiKey=bd5c98ec-81a3-4efa-a0ba-0a2c6eb80406&q="Elon Musk" AND "Jeff Bezos"&showReprints=false&from=2024-01-01&to=2024-01-31`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch news articles.");
      
      const data = await response.json();
  
      // Clear previous results
      const resultsDiv = document.getElementById("news-results");
      resultsDiv.innerHTML = "";
  
      // Display articles
      data.articles.forEach((article) => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
  
        articleDiv.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description || "No description available."}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        resultsDiv.appendChild(articleDiv);
      });
    } catch (error) {
      alert(error.message);
    }
  });
  