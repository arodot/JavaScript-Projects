# JavaScript Projects Portfolio

Welcome to my JavaScript projects! This repository serves as a showcase of my journey, experiments using core JavaScript during my study period

---
# Projects
- Basic Calculator
- Basic jQuery 
- ARODOT Pizza & Grills
- React Learning Projects Collection
- ARODOT Todo List

# Basic Calculator
## Overview
A simple, responsive, and easy-to-use web-based calculator built with HTML, CSS, and JavaScript.

## Features

**Standard Operations:**
- Supports addition, 
- subtraction, 
- multiplication, and division.
- Tic Tac Toe Game
-    

**Screen Controls:**
Features a clear screen (C) button to reset the input and a delete (DEL) button to remove the last entered character.   

**Decimal Support:**
 Allows for floating-point calculations using the decimal point (.) button.   

**Responsive Layout:** 
Designed with a structured grid of buttons for seamless interaction.   
Project StructurePlaintext├── calculator.html        

## Main HTML file containing the calculator layout and button triggers
├── CSS/
│   └── Calculator_CSS.css # External stylesheet for styling the calculator interface
└── JS/
    └── Calculator_JS.js   # JavaScript logic for calculator functionality

---

# Basic jQuery 
A lightweight demonstration page showcasing basic jQuery selectors, DOM manipulation, event handling, and animation effects using a CDN-hosted jQuery library.   

## Features
**DOM Manipulation:**
- Dynamically structures and appends nested HTML elements via jQuery on document load.   

**Element Styling:**
- Selects specific elements by ID to modify styles (e.g., changing text color).   

**Event Handling & Actions:**
- Hides header elements (<h1>) upon clicking specific paragraph elements.   
- Displays hidden message content (#msg) when clicking the "Click Me" button.   

**Animations:**
- Smoothly hides a colored visual box element over a duration of 1 second (1000ms) via a dedicated button click.   

## Project Structure

└── jQuery.html        # Single-file HTML document containing embedded jQuery logic, scripts, and interface elements

---

# ARODOT Pizza & Grills
A modern, responsive web application for a fictional restaurant featuring an interactive menu, a custom pizza builder, a shopping cart drawer, user authentication modals, and an "About/Careers/Contact" structure.   

## Features
**Navigation & Quick Actions:**
- Fixed header featuring brand identification, navigation links (Home, Menu & Builder, About Us, Careers, Contact), user sign-in/account creation triggers, and a live cart count badge.   

**Hero Section:**
- Engaging landing view with a call-to-action button redirecting users straight to the ordering experience.   

**Signature Menu Grid:**
- Preset gourmet options available to view with imagery, descriptions, pricing, and "Add to Cart" functionality (e.g., Margherita Supreme, BBQ Chicken Grill, Meat Lover's Feast, and Grilled Steak Sizzle).   

**Custom Pizza Builder:**
- Interactive form allowing customers to select pizza sizes (Personal up to Extra Large) and customize meat toppings with automated pricing rules (e.g., first meat topping free, additional meats costing $1.00 each) and a receipt preview generator.   

**Interactive Shopping Cart Drawer:**
- Slide-out panel providing a real-time summary of added items, grand total calculation, and checkout actions.   

**User Authentication Modal:**
- Built-in tabbed popup allowing users to sign in or create an account.   

**Company & Community Sections:**
- Includes dedicated segments for company background, career openings (with functional application prompts), and a contact form.   

## Project Structure

├── Pizza.html               # Main HTML file housing the structural layout and application interface
├── Pizza_CSS/
│   └── Pizza.css            # External stylesheet for layout, styling, cards, and modal components
└── Pizza_JavaScript/
    └── Pizza.js             # JavaScript logic managing carts, builders, modals, and user interactions

---

# React Learning Projects Collection
A collection of lightweight HTML and JavaScript files demonstrating various foundational React concepts, ranging from legacy local scripts to modern JSX and CLI-based setups.   

## Overview
**React_1.html:**
- Demonstrates a legacy-style React component and factory using local script files (JS/react.js and JS/react-dom.js) to render a live counter tracking the elapsed time since the page loaded.   

**React_2.html:** 
- Illustrates a basic stateful ES6 React component (LikeButton) loaded via unpkg CDN scripts, rendering an interactive button that toggles its state upon being clicked.  

**React_3.html:**
- Showcases the use of Babel (@babel/standalone) directly in the browser to enable JSX syntax, rendering a parameterized Greeting component ("Hello, World").   

**React_4.html:**
- Contains CLI terminal commands required to initialize, navigate into, and start a standard modern React application using create-react-app and npm.   

## Project Structure
├── React_1.html        # Legacy local React script implementation with a live time counter
├── React_2.html        # CDN-powered React component demonstrating state and click events
├── React_3.html        # Browser-compiled JSX example using Babel standalone 
├── React_4.html        # Terminal commands for initializing a React app via Create React App
└── JS/                 # (Required for React_1.html) Local directory containing react.js and react-dom.js

---

# Tic Tac Toe Game
A responsive, web-based Tic Tac Toe game featuring an HTML5 canvas overlay for dynamic win lines, an interactive table-based grid, and external stylesheet and JavaScript implementations.   

## Features

**Interactive Game Grid:** 
- A standard 3x3 table layout allowing players to click and place moves directly on individual cells (0 through 8).   

**Canvas Win Lines:**
- Utilizes an HTML5 <canvas> element overlay (608x608 dimensions) to visually draw winning lines across the game board.   

**Modular Architecture:**
- Separates style definitions, page structure, and game logic into distinct assets.   

## Project Structure
├── TicTacToe.html       # Main HTML file containing the game table, header, and canvas overlay
├── css/
│   └── game.css         # External stylesheet for styling the game interface and layout
└── js/
    └── tictactoe.js     # External JavaScript logic managing turns, move placement, and win states

---

# ARODOT Todo List
A lightweight, web-based task management application featuring an interactive task input interface and a dedicated container for dynamic todo items.   

## Features

**Task Input & Management:**
- Features a task input field and an "Add Item" button to capture and manage daily tasks.  

**Dynamic Todo Display:**
- Includes a dedicated container (#todos) for rendering added tasks dynamically.   

**Clean Architecture:**
- Organizes styles and scripts into separate external asset directories.   

## Project Structure

├── index.html        # Main HTML file containing the user interface, input elements, and footer
├── css/
│   └── todo.css      # External stylesheet for styling the todo application interface
└── js/
    └── todo.js       # External JavaScript logic handling task creation and interaction

