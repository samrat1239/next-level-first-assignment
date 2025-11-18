# Blog Post

## 1. Difference between Interface and Type in TypeScript

Interface হলো TypeScript এর একটি structure যা object বা class এর properties এবং methods এর structure define করতে প্রয়োজন হয়।

Onnodike Type হলো TypeScript এর একটি নাম যা কোনো type কে represent করে, এটি শুধু object এ নয়, অন্য দিকে union, tuple, primitive কে ও define করতে পারে।

Interface কে extend করা যায় কিন্তু Type alias কে extend করতে হলে intersection (&) দরকার হয়।

---

## 2. Use of `keyof` keyword in TypeScript

`keyof` keyword ব্যবহার করা হয় কোনো object type-এর property নাম পাওয়ার জন্য। এর মাধ্যমে type-safe ভাবে key নিয়ন্ত্রণ করতে পারি।  

**Example:**

```ts
type Student = {
    name: string;
    age: number;
};

type StudentKeys = keyof Student;

const key1: StudentKeys = "name";
const key2: StudentKeys = "age";
