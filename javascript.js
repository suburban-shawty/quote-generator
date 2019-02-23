var quotes = [
    "So, I guess we are who we are for alot of reasons. And maybe we'll never know most of them. But even if we don't have the power to choose where we come from, we can still choose where we go from there. We can still do things. And we can try to feel okay about them.-The Perks of Being a Wallflower",
    "There comes a point where it all becomes too much. When we get too tired to fight anymore. So we give up. That’s when real work begins: to find hope where there seems to be absolutely none at all. -Grey's Anatomy",
    "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. -Unkown",
    "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light. – Harry Potter and the Prisoner of Azkaban",
    "“There’s something disturbing about recalling a warm memory and feeling utterly cold. -Gone Girl",
    "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible. -When Harry Met Sally",
    "The Way Get Started Is To Quit Talking And Begin Doing.-Walt Disney",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.-Winston Churchill",
    "Stay Foolish. Stay hungry. -Steve Jobs",
    "Knowing that we can be loved exactly as we are gives us all the best opportunity for growing into the healthiest of people.-Fred Rogers",
    "Don’t Let Yesterday Take Up Too Much Of Today. - Will Rogers",
    "We May Encounter Many Defeats But We Must Not Be Defeated. -Maya Angelou"
]
function newQuote(){
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
