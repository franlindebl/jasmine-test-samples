const Teenager = require("./teenager");

describe("Bob", () => {
  beforeEach(function() {
    teenager = new Teenager();
  });

  it("stating something", () => {
    const result = teenager.talk("Tom-ay-to, tom-aaaah-to.");
    expect(result).toEqual("Psss...");
  });

  it("shouting", () => {
    const result = teenager.talk("WATCH OUT!");
    expect(result).toEqual("¡Eh tío… relájate!");
  });

  it("shouting gibberish", () => {
    const result = teenager.talk("FCECDFCAAB");
    expect(result).toEqual("¡Eh tío… relájate!");
  });

  it("asking a question", () => {
    const result = teenager.talk(
      "Does this cryogenic chamber make me look fat?"
    );
    expect(result).toEqual("Claro");
  });

  it("asking a numeric question", () => {
    const result = teenager.talk("You are, what, like 15?");
    expect(result).toEqual("Claro");
  });

  it("asking gibberish", () => {
    const result = teenager.talk("fffbbcbeab?");
    expect(result).toEqual("Claro");
  });

  it("talking forcefully", () => {
    const result = teenager.talk("Let's go make out behind the gym!");
    expect(result).toEqual("Psss...");
  });

  it("using acronyms in regular speech", () => {
    const result = teenager.talk("It's OK if you don't want to go to the DMV.");
    expect(result).toEqual("Psss...");
  });

  it("forceful question", () => {
    const result = teenager.talk("WHAT THE HELL WERE YOU THINKING?");
    expect(result).toEqual("¡Cálmate tronco! Sé lo que hago");
  });

  it("shouting numbers", () => {
    const result = teenager.talk("1, 2, 3 GO!");
    expect(result).toEqual("¡Eh tío… relájate!");
  });

  it("only numbers", () => {
    const result = teenager.talk("1, 2, 3");
    expect(result).toEqual("Psss...");
  });

  it("question with only numbers", () => {
    const result = teenager.talk("4?");
    expect(result).toEqual("Claro");
  });

  it("shouting with special characters", () => {
    const result = teenager.talk(
      "ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!"
    );
    expect(result).toEqual("¡Eh tío… relájate!");
  });

  it("shouting with no exclamation mark", () => {
    const result = teenager.talk("I HATE YOU");
    expect(result).toEqual("¡Eh tío… relájate!");
  });

  it("statement containing question mark", () => {
    const result = teenager.talk("Ending with a ? means a question.");
    expect(result).toEqual("Psss...");
  });

  it("non-letters with question", () => {
    const result = teenager.talk(":) ?");
    expect(result).toEqual("Claro");
  });

  it("prattling on", () => {
    const result = teenager.talk("Wait! Hang on. Are you going to be OK?");
    expect(result).toEqual("Claro");
  });

  it("silence", () => {
    const result = teenager.talk("");
    expect(result).toEqual("¿Holaaaa?");
  });

  it("prolonged silence", () => {
    const result = teenager.talk("          ");
    expect(result).toEqual("¿Holaaaa?");
  });

  it("alternate silence", () => {
    const result = teenager.talk("\t\t\t\t\t\t\t\t\t\t");
    expect(result).toEqual("¿Holaaaa?");
  });

  it("multiple line question", () => {
    const result = teenager.talk(
      "\nDoes this cryogenic chamber make me look fat?\nno"
    );
    expect(result).toEqual("Psss...");
  });

  it("starting with whitespace", () => {
    const result = teenager.talk("         hmmmmmmm...");
    expect(result).toEqual("Psss...");
  });

  it("ending with whitespace", () => {
    const result = teenager.talk("Okay if like my  spacebar  quite a bit?   ");
    expect(result).toEqual("Claro");
  });

  it("other whitespace", () => {
    const result = teenager.talk("\n\r \t");
    expect(result).toEqual("¿Holaaaa?");
  });

  it("non-question ending with whitespace", () => {
    const result = teenager.talk(
      "This is a statement ending with whitespace      "
    );
    expect(result).toEqual("Psss...");
  });
});
