# The Odditorium - Artisan Marketplace Website

## Project Overview

A 5-page responsive e-commerce website showcasing bizarre handmade goods from eccentric artisans. Built as a web development project demonstrating HTML5, CSS3, and vanilla JavaScript skills.

**Live Site:** [Coming Soon]  
**Developer:** Kim  
**Course:** FIT Web Development Apprenticeship  
**Institution:** Mastercard Dublin

---

## Project Purpose

This website serves as a proof-of-concept for a local cooperative of independent artisans who create unique, handmade products. The site demonstrates:

- Modern HTML5 semantic structure
- CSS3 advanced features and animations
- Vanilla JavaScript for interactivity
- Shopping cart functionality with localStorage
- Responsive design principles
- Search engine optimization techniques

---

## Assignment Requirements

### Task 1: Design & Planning (35 marks)
- Wireframes for all 5 pages
- Site navigation diagram
- Interactive features documentation
- HTML5 feature implementation plan
- 3 SEO strategies outlined

### Task 2: Build & Implementation (50 marks)
- 5 functional webpages using HTML, CSS, JavaScript
- Working shopping cart system
- Product filtering and sorting
- Form validation
- Interactive animations
- Responsive layout

### Task 3: Technical Report (15 marks)
- Hardware and software components explanation
- Web 1.0, 2.0, 3.0 comparison
- Responsive vs non-responsive design analysis

---

## Tech Stack

### Core Technologies
- **HTML5** - Semantic markup, modern elements
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** - Classes, modules, localStorage API

### External Resources
- **Google Fonts** - Bowlby One SC (display), DM Mono (body)
- **Unsplash** - Placeholder product images
- **CodePen Assets** - Background texture

### No Frameworks
This project uses pure vanilla JavaScript and CSS - no libraries or frameworks. This demonstrates fundamental web development skills and keeps the codebase lightweight and understandable.

---

## Site Structure

```
/
├── index.html           (Home page)
├── products.html        (Shop/Browse page)
├── about.html           (About the artists)
├── cart.html            (Shopping cart)
├── contact.html         (Contact form)
├── css/
│   ├── variables.css    (Design tokens)
│   ├── base.css         (Foundation styles)
│   ├── components.css   (Buttons, cards)
│   ├── pages.css        (Page-specific styles)
│   ├── responsive.css   (Media queries)
│   └── main.css         (Imports all CSS)
├── js/
│   ├── products-data.js (Product catalog)
│   ├── cart.js          (Cart functionality)
│   ├── products.js      (Product rendering)
│   └── main.js          (Initialization)
└── images/              (Product images)
```

---

## Design System

### Color Palette
- **Primary Orange** (#ff7347) - Main brand color, CTAs
- **Secondary Lime** (#d9f154) - Accents, highlights
- **Accent Blue** (#4876ff) - Cart, interactive elements
- **Dark Gray** (#27272a) - Text, borders
- **Off-White** (#fffdf9) - Backgrounds

### Typography
- **Headings:** Bowlby One SC - Bold, uppercase, geometric
- **Body:** DM Mono - Monospace, technical, readable
- **Fluid Sizing:** Uses CSS clamp() for responsive text

### Spacing Scale
Consistent spacing system using CSS custom properties:
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 2rem (32px)
- LG: 4rem (64px)
- XL: 6rem (96px)

---

## Key Features

### 1. Shopping Cart System
- Add/remove products
- Quantity adjustment
- Real-time total calculation
- Persistent storage using localStorage
- Cart counter badge in navigation

### 2. Product Filtering & Sorting
- Filter by category (Teeth, Hair, Tears, Nails, Misc)
- Sort by price (low to high, high to low)
- Sort alphabetically
- Live results counter

### 3. Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Fluid typography
- Touch-friendly interfaces

### 4. Interactive Animations
- Scroll reveal effects
- Hover state transitions
- Button press effects
- Smooth navigation

---

## Unconventional Styling Techniques

### The Chunky Button Effect

This project features a unique button design with jagged edges and a 3D push effect. The technique was learned and adapted from CodePen examples.

**How it works:**

#### 1. The Base Button
```css
background: linear-gradient(to bottom, orange 33%, lime 66%) 
            50% 0% / 100% 400% no-repeat;
```
- Creates a gradient 4x taller than the button
- Most of the gradient is hidden below the button
- On hover, we shift it upward to reveal the lime color

#### 2. The Black Outline
```css
filter: drop-shadow(0 1px 0 #000)      /* top */
        drop-shadow(-1px 0 0 #000)     /* left */
        drop-shadow(1px 0 0 #000)      /* right */
        drop-shadow(0 -1px 0 #000)     /* bottom */
        drop-shadow(5px 5px 0 #000);   /* 3D shadow */
```
- First 4 shadows create a pixel-perfect border
- Fifth shadow creates the 3D offset effect

#### 3. The Jagged Edges
```css
.chunky-button::before {
    clip-path: polygon(
        100% 0,    /* top right */
        74% 28%,   /* jagged indent */
        100% 29%,  /* back out */
        ...
    );
}
```
- Uses CSS pseudo-elements (::before and ::after)
- Creates 1rem wide rectangles on each side
- clip-path cuts them into jagged shapes
- They inherit the gradient background

#### 4. The 3D Push Effect
```css
.chunky-button:hover {
    transform: translate(5px, 5px);  /* Move to where shadow was */
    filter: /* Remove 3D shadow, keep border */
}
```
- On hover, button moves down and right
- Shadow disappears
- Creates illusion of pressing down

**Credit:** Technique inspired by button designs on CodePen. Adapted and customized for this project.

### CSS Custom Properties (Variables)

Instead of repeating colors and values throughout the CSS, we define them once:

```css
:root {
    --primary: #ff7347;
    --spacing-md: 2rem;
}

.button {
    background: var(--primary);
    padding: var(--spacing-md);
}
```

**Benefits:**
- Change one value, updates everywhere
- Easier to maintain
- Self-documenting code

### Fluid Typography

Uses CSS clamp() for responsive text sizing without media queries:

```css
--text-xl: clamp(1.62rem, 1.5rem + 0.58vw, 1.95rem);
```

**How it works:**
- Minimum size: 1.62rem (mobile)
- Grows with viewport: 1.5rem + 0.58vw
- Maximum size: 1.95rem (desktop)
- Text smoothly scales between breakpoints

---

## HTML5 Features Used

### Semantic Elements
- `<nav>` - Navigation menu
- `<main>` - Main content wrapper
- `<section>` - Thematic content groupings
- `<article>` - Self-contained product cards
- `<footer>` - Footer information

### Benefits for SEO
- Search engines better understand page structure
- Screen readers can navigate more effectively
- Improves accessibility scores
- Better indexing by Google

---

## SEO Strategy

### 1. Semantic HTML Structure
Using proper HTML5 semantic elements helps search engines understand content hierarchy and importance.

### 2. Meta Tags
```html
<title>The Odditorium - Bizarre Handmade Goods</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
```
- Title appears in search results and browser tabs
- Description shows in search snippets
- Keywords help categorize content

### 3. Performance Optimization
- Minimal CSS and JavaScript file sizes
- Efficient image loading
- No heavy frameworks
- Fast page load times improve search rankings

---

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Note:** Uses modern CSS features (CSS Grid, Custom Properties, clamp). Internet Explorer is not supported.

---

## Installation & Setup

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No build process required - pure HTML/CSS/JS

**For development:**
- Use VS Code with Live Server extension
- Or run a local server: `python -m http.server 8000`

---

## Project Timeline

**Phase 1: Planning & Design** (Complete)
- Wireframes created
- Design system defined
- Color palette selected

**Phase 2: HTML Structure** (Complete)
- index.html skeleton created
- Navigation and footer markup
- Semantic HTML5 structure

**Phase 3: CSS Foundation** (Complete)
- CSS variables system
- Base styles and typography
- Navigation and footer styling
- Chunky button component

**Phase 4: Components** (In Progress)
- Hero section
- Product cards with wiggly borders
- Feature cards
- Forms

**Phase 5: JavaScript** (Upcoming)
- Shopping cart functionality
- Product filtering
- Form validation

**Phase 6: Polish** (Upcoming)
- Animations
- Responsive refinements
- Testing and fixes

---

## Learning Outcomes

### Technical Skills Developed
- Advanced CSS techniques (clip-path, filters, custom properties)
- CSS Grid and Flexbox layouts
- JavaScript ES6 classes and modules
- localStorage API for data persistence
- Responsive design principles

### Design Skills
- Creating a cohesive design system
- Color theory and palette selection
- Typography hierarchy
- User experience considerations

### Problem Solving
- Implementing complex CSS effects
- Managing state in vanilla JavaScript
- Debugging across browsers
- Performance optimization

---

## Credits & Acknowledgments

**Developer:** Kim Hanlon
**Course:** FIT Web Development Apprenticeship  
**Instructor:** Alan Hartnett

**Design Inspiration:**
- CodePen community for button techniques
- Suburbia website for wiggly border concept

**Assets:**
- Google Fonts for typography
- Unsplash for placeholder images
- CodePen assets for textures

---

## Future Enhancements

Potential features for future versions:
- Backend integration (Node.js/Express)
- User authentication
- Payment processing
- Product reviews and ratings
- Wishlist functionality
- Email notifications

---

## License

This project is created for educational purposes as part of the FIT Web Development Apprenticeship program.

---

## Contact

For questions or feedback about this project:
- Email: [kim@devdactyl.ie]
- GitHub: [https://github.com/kimatron]
- LinkedIn: [https://www.linkedin.com/in/kimhanlon291354/]

---

**Last Updated:** January 2026