# 🧾 Gob Sheet – Frontend Assignment

This is a frontend implementation of a spreadsheet-style UI inspired by a Figma design. Built using modern React (with Vite), Tailwind CSS, and TypeScript (strict mode).

## 🚀 Live Demo

[🔗 Deployed Project Link] is https://gob-sheet-uvdl.vercel.app/  

---

## 📦 Tech Stack

- ⚛️ **React 18** (Vite)
- 🛠️ **TypeScript** (strict mode)
- 🎨 **Tailwind CSS** (used throughout the project)
- 🧮 **Custom table/grid component** (no `react-table`)
- ❌ No state management library — used local component state

---

## 🧱 Component Structure

- `Header.tsx` – Top header/navigation bar
- `Row.tsx` – Toolbar with actions like Hide Fields, Sort, Filter, etc.
- `Spreadsheet.tsx` – Main spreadsheet-like grid with dummy content
- `App.tsx` – Root component combining the above

---

## ⚙️ Setup & Running Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/DivyaKumarJha/gob-sheet.git
   cd gob-sheet

2. **Install dependencies**

     ```bash
     npm install
     Start the development server

     ```bash
     npm run dev
     Run ESLint

     ```bash
     npm run lint
     Run TypeScript type-check

     ```bash
     npm run type-check