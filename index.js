if (process.env.COMMAND === "weather") {
    const weather = require("./weather");
    weather;

} else if (process.env.COMMAND === "address") {
    const address = require("./address");
    address;

} else if (process.env.COMMAND === "quoteday") {
    const quoteday = require("./quoteday");
    quoteday;

} else {
    const iDontUnderstand = require("./i_dont_understand");
    iDontUnderstand;
};