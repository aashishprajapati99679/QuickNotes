# QuickNotes – React Notes Management App

QuickNotes is a modern and responsive notes management application built using React, Redux Toolkit, React Router, and Tailwind CSS. The application allows users to create, update, delete, search, view, and copy notes with data persistence using Local Storage.

## Features

* Create new notes instantly
* Update existing notes
* Delete notes
* Search notes by title
* Copy notes to clipboard
* View notes in a separate page
* Persistent data storage using LocalStorage
* Responsive and modern UI
* Toast notifications for user actions
* Dynamic routing with React Router

## Tech Stack

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Hot Toast
* Lucide React Icons

## Project Structure

```bash
src/
│
├── components/
│   ├── Home.jsx
│   ├── Paste.jsx
│   ├── ViewPaste.jsx
│   └── Navbar.jsx
│
├── redux/
│   ├── pasteSlice.js
│   └── store.js
│
├── data/
│   └── Navbar.js
│
├── utils/
│   └── formatDate.js
│
└── App.jsx
```

## Main Functionalities

### Create Notes

Users can create notes with:

* Title
* Content
* Auto-generated unique ID
* Timestamp

### Update Notes

Existing notes can be edited and updated dynamically.

### Search Notes

Search functionality filters notes by title in real-time.

### Copy to Clipboard

One-click copy functionality for note content.

### View Notes

Each note can be opened in a dedicated route using dynamic routing.

### Data Persistence

All notes are stored in browser LocalStorage so data remains even after refreshing the page.

## Routing

| Route         | Description                          |
| ------------- | ------------------------------------ |
| `/`           | Home page for creating/editing notes |
| `/pastes`     | Displays all saved notes             |
| `/pastes/:id` | View single note                     |

## Installation

Clone the repository:

```bash
git clone https://github.com/aashishprajapati99679/QuickNotes.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Learning Outcomes

This project helps in understanding:

* React Hooks
* State Management with Redux Toolkit
* Routing using React Router
* CRUD Operations
* LocalStorage Handling
* Component-Based Architecture
* Tailwind CSS Styling
* Toast Notifications

## Future Improvements

* Dark Mode
* Authentication System
* Cloud Database Integration
* Markdown Support
* Categories and Tags
* Export Notes Feature

## Author

Developed by Aashish Prajapati
