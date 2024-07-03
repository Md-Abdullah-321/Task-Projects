## Overview

This repository contains the implementation of two classes, `Greeter` and `FormalGreeter`, which are used to generate greeting messages. The `Greeter` class provides a simple greeting message with a name and a greeting phrase, while the `FormalGreeter` class extends `Greeter` to offer a more formal greeting with a title and name.

### Greeter

The `Greeter` class generates a greeting message using a provided name and greeting phrase. If the name or greeting phrase is not provided, default values ("Anonymous" and "Hello") are used.

### FormalGreeter

The `FormalGreeter` class extends the `Greeter` class to generate a formal greeting message using a provided name and title. If the name or title is not provided, default values ("Anonymous" and "Mr./Ms.") are used.

## Fixes Made

1. **Template Literals**: Updated string concatenations to use template literals for proper variable interpolation.

   - Changed from `"${greeting}, ${name}!"` to `` `${greeting}, ${name}!` ``.
   - Changed from `"Good day, ${title} ${name}."` to `` `Good day, ${title} ${name}.` ``.

2. **Equality Check**: Corrected the equality check in the `greet` method of the `Greeter` class.

   - Changed from `if (greeting = undefined)` to `if (greeting === undefined)`.

3. **Instantiation**: Ensured the correct parameters are passed when creating instances of the classes.
   - Updated `const g = new Greeter("Md Abdullah");` to include a greeting message if needed.

## Example Usage

```javascript
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

const g = new Greeter("Md Abdullah");
console.log(g.greet()); // Output: Hello, Md Abdullah!

const fg = new FormalGreeter("John", "Dr.");
console.log(fg.greet()); // Output: Good day, Dr. John.
```
