const command = process.env.COMMAND;

if (command === "weather") {
    const weather = require("./weather");
    weather;

} else if (command === "address") {
    const address = require("./address");
    address;

} else if (command === "quoteday") {
    const quoteday = require("./quoteday");
    quoteday;

} else {
    const iDontUnderstand = require("./i_dont_understand");
    iDontUnderstand;
};