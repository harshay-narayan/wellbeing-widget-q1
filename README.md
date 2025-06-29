# WellbeingWidget Component

A responsive, interactive UI component built with **React**, **TypeScript**, **Tailwind CSS** and **Vite** that allows users to check in on their current emotional state.

The feeling set to the state will be logged to console which can further be consumed by API endpoints.

---

## 📁 File Location

```bash
src/components/WellbeingWidget.tsx
```

---

## 🚀 Overview

The `WellbeingWidget` presents a list of predefined feelings, allowing the user to select one. Upon selection, the button is visually highlighted, and the "Continue" button updates to indicate readiness.

---

## 🧩 Features

* Responsive and mobile-friendly
* Visually indicates selected feeling
* Selection is toggleable (select again to deselect)
* Tailwind-based styling with `clsx` and `tailwind-merge`
* Accessibility-friendly with keyboard focus support

---

## 📦 Dependencies

* [`lucide-react`](https://lucide.dev) – Icons
* [`clsx`](https://github.com/lukeed/clsx) + `tailwind-merge` – Class merging via custom `cn()` function
* Tailwind CSS
* React (`useState`)
* Vitest
* React Testing Library

---

## 📄 Props

**None.**

All state and data are internally managed.

---

## 🧠 State

| State Variable    | Type      | Description |                            |
| ----------------- | --------- | ----------- | -------------------------- |
| `selectedFeeling` | \`Feeling | null\`      | Currently selected feeling |

---

## 🧱 Type Definitions

```ts
export type Feeling = {
  id: number;
  name: string;
  iconUrl: string;
};
```

---

## 🗂️ Data Source

Located in `src/lib/data.ts`:

```ts
export const feelings: Feeling[] = [
  { id: 1, name: "Terrible", iconUrl: "..." },
  { id: 2, name: "Bad", iconUrl: "..." },
  // etc.
];
```

---

## ⚙️ Core Logic

### `handleSelectFeeling(feeling: Feeling)`

Toggles selection:

```ts
setSelectedFeeling((prev) => (prev?.id === feeling.id ? null : feeling));
```

---

## 🎨 Styling

Tailwind CSS has been used to ensure responsive design and provide utility-first styling for consistent layout and appearance.

---

## 🧪 Testing

Tests written using **Vitest** + **React Testing Library**:

```tsx
it("selects a feeling on click", () => {
  render(<WellbeingWidget />);
  const button = screen.getByText("Alright");
  fireEvent.click(button);
  expect(button).toHaveClass("bg-[#e2f1ffb3]");
});
```

---

## ♿ Accessibility

* Interactive elements (`button`, `div`) include `tabIndex={0}` for keyboard focus
* `alt` text added for icons

---

## 🤝 Contributing

We welcome contributions! To contribute to this project, follow these steps:

1. **Fork the repository**
   Click the "Fork" button on GitHub and clone your fork locally.

2. **Install dependencies**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then:

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Create a new feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**

   * Add or modify the component or tests
   * Ensure code follows existing formatting and style conventions
   * Run linter and tests before committing

   ```bash
   npm run lint
   npm run test
   ```

6. **Commit your changes**

   ```bash
   git commit -m "feat: add [your feature or fix description]"
   ```

7. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   Open a PR to the `main` branch of the original repo and describe your changes clearly.

---
