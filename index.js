if (process.env.COMMAND === "weather") {
    console.log("40° today");
    
} else if (process.env.COMMAND === "address") {
    console.log("241 chemin du bout de code");
    
} else if (process.env.COMMAND === "quoteday") {
    console.log("You see in this world there's two kinds of people, my friend. Those with loaded guns, and those who dig. You dig.");
    
} else {
    console.log("Désolé, je n'ai pas compris.");
};
