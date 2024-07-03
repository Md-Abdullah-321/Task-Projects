class Greeter {
    constructor(name, greeting) {
      this.name = name;
      this.greeting = greeting;
    }
  
    greet() {
      let name = this.name;
      let greeting = this.greeting;
      if (!name) {
        name = "Anonymous";
      }
  
      if (greeting === undefined) {
        greeting = "Hello";
      }
  
      return `${greeting}, ${name}!`;
    }
  
    static defaultGreeting() {
      return "Hello, World!";
    }
  }
  
  class FormalGreeter extends Greeter {
    constructor(name, title) {
      super(name);
      this.title = title;
    }
  
    greet() {
      let name = this.name;
      let title = this.title;
      if (!name) {
        name = "Anonymous";
      }
  
      if (!title) {
        title = "Mr./Ms.";
      }
  
      return `Good day, ${title} ${name}.`;
    }
  }
  
  const g = new Greeter("Md Abdullah"); //As first peremeter takes name and second one is greeting. so we should insert a name instead of Hi
  console.log(g.greet());
  
  const fg = new FormalGreeter("John", "Dr.");
  console.log(fg.greet());