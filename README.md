# Interfaces vs Types in TypeScript

When working with TypeScript, a common question developers ask is: Should I use an interface or a type? While both are used to describe the shape of data, they have different strengths and best-use scenarios. This guide explains the key differences to help you choose the right one for your situation.

---

## What They Have in Common

Before diving into the differences, it's important to understand what interfaces and types share in common:

1. They can both describe the structure of an object.
2. They can be used to define function types.
3. They work with classes and arrays.

For example, both of the following snippets define the same shape:

```ts
interface User {
  name: string;
  age: number;
}

type User = {
  name: string;
  age: number;
};
```

---

## Key Differences

### 1. Extension and Declaration Merging

* **Interfaces** support declaration merging and inheritance via `extends`:

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

interface Dog extends Animal {
  breed: string;
}
```

* **Types** do not allow declaration merging. Once a type is declared, you can't define it again:

```ts
type Animal = { name: string };
// Cannot declare 'Animal' again
```

### 2. Union and Intersection Types

* **Types** are more powerful when working with union (`|`) and intersection (`&`) types:

```ts
type Status = "active" | "inactive";
type ID = string | number;
type UserWithID = User & { id: ID };
```

* **Interfaces** don't support unions directly. You'd need a type for that.

### 3. When to Use What

* Use **interface** when you're defining the shape of objects or working with class-like structures.
* Use **type** when you're dealing with complex types, unions, primitives, or combining multiple types.

---

# The Power of `keyof` in TypeScript

The `keyof` operator allows you to create a union of string literals based on the keys of an object type. It plays a crucial role in building type-safe utilities and generic components.

### Why Use `keyof`?

Using `keyof` ensures that you're accessing only valid keys of an object, reducing runtime errors and improving developer experience.

### Example:

```ts
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "email"

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

const user: Person = { name: "Alice", age: 30, email: "alice@example.com" };
const name = getValue(user, "name"); //  Works fine
// const invalid = getValue(user, "address"); // Error: 'address' is not a valid key
```

### Benefits of Using `keyof`:

* Prevents invalid key access at compile time
* Boosts IDE support like autocompletion and hints
* Helps write reusable, generic code

