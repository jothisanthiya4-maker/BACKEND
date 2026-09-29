# Tamil Nadu Citizen Services & Issue Management

A government-style React app: Categories -> Departments -> Services, plus a citizen Issues page.
Data is stored in the browser (localStorage keys: categories, departments, services, issues).

## Run
    npm install
    npm run dev
Open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production
    npm run build
    npm run preview

## Structure
- src/App.jsx                      shared state, localStorage load/save, page navigation
- src/storage.js                   readFromStorage, saveToStorage, makeId, formatDate
- src/components/Navbar.jsx        header, emblem, Home / Departments / Services / Issues
- src/components/LandingPage.jsx   banner, citizen concerns, Add Category/Department/Service cards
- src/components/CategorySection.jsx
- src/components/DepartmentSection.jsx
- src/components/ServiceSection.jsx
- src/components/IssueSection.jsx  issue form + issues table + search
