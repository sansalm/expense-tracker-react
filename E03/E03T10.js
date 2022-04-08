const greeter = (function () {
    let greeting = 'Hello';
    const exclaim = msg => `${msg}!`;
    const greet = name => exclaim(`${greeting} ${name}`);
    const salutation = (newGreeting) => {
      greeting = newGreeting;
    };
    return {
      greet: greet,
      salutation: salutation,
    };
    
  }());
  