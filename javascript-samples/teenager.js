class Teenager {
  constructor() {}

  talk(message) {
    message = message.replace(/\s/g, "");

    const replies = {
      neutral: "Psss...",
      query: "Claro",
      forcefulQuery: "¡Cálmate tronco! Sé lo que hago",
      shout: "¡Eh tío… relájate!",
      blank: "¿Holaaaa?"
    };

    let statement = "neutral";

    if (message.toUpperCase() === message && /[A-Z]/.test(message)) {
      statement = "shout";

      if (/[A-Z]+[?]$/.test(message)) {
        statement = "forcefulQuery";
      }
    } else if (/\?$/.test(message)) {
      statement = "query";
    } else if (/\?$/.test(message)) {
      statement = "query";
    } else if (!message) {
      statement = "blank";
    }

    return replies[statement];
  }
}

module.exports = Teenager;

// Sure. // Claro
// Whoa, chill out! // ¡Eh tío… relájate!
// Calm down, I know what I'm doing! // ¡Cálmate tronco! Sé lo que hago
// Fine. Be that way! // ¿Holaaaa?
// Whatever. // Psss...
