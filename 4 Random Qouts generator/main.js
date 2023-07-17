//immediate invoked function expression
function Quates() {
  const quotes = [
    {
      quote:
      "The Pessimist Sees Difficulty In Every Opportunity.The Optimist Sees Opportunity In Every Difficulty.",
      author: "  Winston Churchill"
    },
    {
      quote:
      "Don’t Let Yesterday Take Up Too Much Of Today.",
      author: " Will Rogers"
    },
    {
      quote:
      "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
      author: "Unknown"
    },
    {
      quote:
      "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
      author: "Vince Lombardi"
    },
   
    
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".quote-author").textContent = quotes[random].author;
  });
};
Quates();