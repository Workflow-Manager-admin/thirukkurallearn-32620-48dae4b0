# ThirukkuralLearn Web Application - Requirements Document

## 1. Purpose

ThirukkuralLearn is a web application designed to help users learn, explore, and test their knowledge about Thirukkural, the classic Tamil text. The app provides interactive browsing of Athigaarams (chapters), allows users to view Kurals (couplets) with translations and explanations, and offers quizzes to reinforce learning. Targeting both educational and casual audiences, the app aims to deliver an engaging, accessible, and visually appealing experience optimized for both mobile and desktop use.

---

## 2. Product Features

- **Home Page with Athigaarams**: The landing page displays cards for 5 clickable Athigaarams (chapters). Selecting a card shows the list of Thirukkurals (couplets) within that Athigaaram, each with its original Tamil text, an English translation, and a brief English explanation.

- **Persistent Navigation Bar**: A top navigation bar with clearly labeled links to the Home, About Thirukkural, and Quiz (Test) pages. The navigation bar is visible on all pages and remains fixed at the top.

- **About Thirukkural Page**: A static content page providing background information about the Thirukkural, its author Thiruvalluvar, and its significance.

- **Quiz Page**: An interactive page where users answer multiple-choice questions about the Thirukkural. Questions may involve selecting the correct meaning/translation for a given Kural or matching a Kural to its explanation. The system provides immediate feedback on answers.

- **Responsive Design**: The entire application layout is responsive, offering a seamless experience on both mobile and desktop platforms.

- **Consistent Visual Theme**: The UI employs primary (`#2D3A4A`), secondary (`#F5F5F5`), and accent (`#C19A6B`) colors with a modern, clean look. A subtle, transparent/faded image of Thiruvalluvar serves as the background across all screens.

- **Accessibility and Usability**: All navigation, content, and quiz features are keyboard-accessible and adhere to basic accessibility standards.

- **Local Asset Usage**: All images and visual assets, including the Thiruvalluvar illustration, are bundled and served with the app (no external fetching required).

- **Static, Client-only Implementation**: No backend services or dynamic API calls are required; all content (Athigaarams, Kurals, quizzes, and assets) is stored and displayed on the client side.

---

## 3. Functional Requirements

### 3.1 Routing & App Structure
- The application must support navigation between the following routes:
  - `/` (Home): Shows the Athigaarams grid/cards.
  - `/athigaaram/:id`: Displays all Kurals in the selected Athigaaram, with details.
  - `/about`: Static about page.
  - `/quiz`: Quiz page interface.

### 3.2 Navigation
- The navigation bar is present and fixed at the top of every page, with links to all main routes.

### 3.3 Athigaaram & Kural Interaction
- Home page lists selectable Athigaaram cards; clicking one switches to display a scrollable list (or grid) of relevant Kurals.
- Each Kural entry shows:
  - The original Tamil couplet.
  - An English translation.
  - A short explanation.

### 3.4 About Page Content
- Contains static educational content including context about Thirukkural and Thiruvalluvar.

### 3.5 Quiz Functionality
- The quiz page displays a series of multiple-choice questions covering Kurals and their interpretations.
- Each question presents feedback after the user's submission.
- Quiz should be self-contained and resettable without page reload.

### 3.6 Visual & Layout Features
- The layout is mobile-first and adapts to larger screens.
- Components are clearly visually separated, touch-friendly, and use specified theme colors.
- Background includes the Thiruvalluvar image at low opacity.

---

## 4. Non-Functional Requirements

- **Performance**: The app should load quickly, with minimal asset sizes and zero external data fetches after the initial load.
- **Responsiveness**: All features must be usable and visually optimal on both mobile and desktop/large screens.
- **Accessibility**: Follows best practices for web accessibility (semantic markup, ARIA roles where needed, color contrast, keyboard navigation).
- **Simplicity**: Codebase leverages vanilla React and CSS, with no major UI frameworks or heavy external dependencies.
- **Maintainability**: The code should be organized into logical components for easy future updates or feature additions.
- **Internationalization Ready**: Text content is to be structured so that future translation/localization is feasible.

---

## 5. Implementation Notes and Assumptions

- The application uses React JS as the sole frontend technology (per `create-react-app` or an equivalent minimal scaffold).
- No backend server or database is used; all teaching material, question sets, and assets reside directly in the client bundle and are loaded statically.
- Layout and style customization should follow the color scheme and spacing tokens outlined in the `App.css`.
- Static resources (images, data files) are bundled via the project's public or assets directory.
- The faded Thiruvalluvar image is used as an inline background for aesthetic effect but must not obscure or distort content for readability/accessibility.
- The quiz system may randomly order questions and answers on each start/reset.
- There are no user accounts, authentication, or persistent scores.

---

## 6. Constraints

- **No Backend**: The site operates fully as a client-side Single Page Application (SPA); no APIs or server-side processing.
- **Static Content**: All Kurals, Athigaarams, explanations, and quiz data must be prepared and included at build time.
- **Asset Bundling**: All images, icons, and data must be locally bundled; remote loading is not permitted.
- **Mobile Compatibility**: Must pass basic device emulation and manual checks for mobile usability.
- **Licensing**: All included images (especially Thiruvalluvar art) should be under a free-use license or created specifically for this project.

---

## 7. Out of Scope

- User login, progress tracking, or leaderboards.
- Social sharing or external integrations.
- Backend content management or remote updates.

---

## 8. References

- [Thirukkural (Wikipedia)](https://en.wikipedia.org/wiki/Tirukkuṟaḷ)
- [React documentation](https://reactjs.org/)

---

This requirements document will guide the ongoing design and development of ThirukkuralLearn. All implementation should strictly adhere to these requirements unless formally revised.
