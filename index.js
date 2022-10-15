const command = process.env.COMMAND;
const weather = require("./weather");
const address = require("./address");
const quoteday = require("./quoteday");
const iDontUnderstand = require("./i_dont_understand");

if (command === "weather") {
    weather();

} else if (command === "address") {
    address();

} else if (command === "quoteday") {
    quoteday();

} else {
    iDontUnderstand();
};