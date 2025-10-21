# 🚀 Learning TypeScript with React — 5 Days, 5 Projects

This repository documents my **TypeScript learning journey** guided by ChatGPT, where I explored TypeScript concepts and applied them in **five progressively challenging React projects**.

Each project focuses on a specific TypeScript concept — from typing props and generics to working with async data and reducers — helping me understand how TypeScript makes React development safer and more predictable.

---

## 📘 What’s Inside

- **`/pdfs/TypeScript_Concepts_ChatGPT.pdf`** — my personal learning notes and explanations of TypeScript concepts discussed with ChatGPT (day-wise breakdown).
- **`/projects/`** — contains the five TypeScript + React projects I built during this series.
- **Step-by-step implementations** with incremental commits for better understanding.

---

## 🧩 Projects Built

| Day | Project | Core TypeScript Concept |
|-----|----------|--------------------------|
| **1** | 📝 Todo App | State & Props typing, event types, modular components |
| **2** | 🌐 API Dashboard | Generics, async/await typing, discriminated unions |
| **3** | ⚙️ UI Component Playground | Reusable components, `keyof`, and generics |
| **4** | 🧾 Form Validation | Utility types, schema inference with Zod |
| **5** | 🗂 Notes App with Context + Reducer | Type-safe reducers, discriminated unions, architecture patterns |

---

## 📚 Topics I Learned

- Understanding `interface`, `type`, `enum`, and `union`  
- Using `useState<T>` and `useReducer` with generics  
- Typing component props, events, and callbacks  
- `keyof`, `Omit`, `Pick`, `Partial`, and `Record` utility types  
- Writing reusable generic components (`<Table<T>>`, `<Select<T>>`)  
- Type-safe API fetching with `fetch<T>()` and `Promise<T>`  
- Context API with strict type inference  
- Zod + React Hook Form integration for runtime validation  

---

## 🧠 Why This Project Exists

I wanted to **build my understanding from zero to fluency** in TypeScript — not just reading documentation, but writing, breaking, and fixing real code.  
Each day I paired **ChatGPT-based guided learning** with **hands-on coding exercises**.

The attached PDF (`TypeScript_Concepts_ChatGPT.pdf`) summarizes key concepts, explanations, and code snippets discussed with ChatGPT throughout the journey.

---

## 🛠️ Scripts

Each project runs independently. You can navigate into any project folder and use:

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Start dev server (Vite)
npm run dev

# 3️⃣ Build for production
npm run build

# 4️⃣ Preview the production build
npm run preview

# 5️⃣ Lint & type check (recommended)
npm run lint
