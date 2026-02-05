# Star Wars Character & Movie Guide

An interactive web application that fetches and displays Star Wars characters and their associated films using the Star Wars API (SWAPI). Users can browse iconic characters and explore all the movies they appeared in, with detailed information including movie posters, opening crawls, and production details.

![Star Wars](images/star-wars-logo-png.png)

## 🌟 Project Overview

This project creates an immersive character and movie guide for the Star Wars universe. Users can browse 10 iconic characters, click on any character to see all films they appeared in, and view detailed information about each movie including the famous opening crawl text.

## ✨ Features

### Core Functionality
- **Dynamic Character Loading**: Fetches 10 Star Wars characters from SWAPI using AJAX
- **Interactive Character Cards**: Click any character to explore their filmography
- **Multi-Film Display**: View all movies a character appeared in with numbered buttons
- **Detailed Movie Information**: 
  - Movie poster
  - Title and episode number
  - Director and producer
  - Release date
  - Complete opening crawl text
- **Seamless Navigation**: Back button to return from movie details to film list
- **Responsive Design**: Fully responsive layout from mobile (375px) to desktop (1200px+)
- **Loading Indicators**: Visual feedback during both AJAX calls
- **Error Handling**: Graceful error handling with user-friendly messages
- **Template-Based Rendering**: Efficient DOM manipulation using HTML `<template>` elements

### User Experience
- **Hover Effects**: Interactive card animations on hover
- **Visual Feedback**: Selected state for active character cards
- **Smooth Transitions**: Professional UI transitions between states
- **Accessibility**: Semantic HTML and proper alt text for images

## 🛠 Technologies Used

- **HTML5**: Semantic markup, Template elements
- **CSS3 / SASS**: Custom styling with BEM methodology, responsive grid system
- **JavaScript ES6+**: 
  - ES6 Modules for code organization
  - Fetch API for AJAX requests
  - Arrow functions and modern syntax
  - Template literals for dynamic content
- **SWAPI**: Star Wars API (https://swapi.info)
## 📖 Usage Guide

### Step 1: Browse Characters
- The page automatically loads 10 iconic Star Wars characters from SWAPI
- Each character card displays:
  - Character portrait
  - Character name
  - Gender

### Step 2: Select a Character
- Click on any character card to view their filmography
- The character card highlights with a "selected" state
- A lightbox opens showing:
  - Character's circular profile image
  - Character name
  - Total number of film appearances
  - Numbered film buttons (Film 1, Film 2, etc.)

### Step 3: Explore Movies
- Click any film button to view that movie's details:
  - Movie poster (Episodes 1, 2, 3, 4, 5, 6)
  - Movie title
  - Episode number
  - Director name
  - Producer name(s)
  - Release date
  - Complete opening crawl text (scroll to read)

### Step 4: Navigate
- **Back Button**: Return to the character's film list
- **Close Button (X)**: Exit the lightbox
- **Click Another Character**: Explore different filmographies

## 🌐 API Information

This project uses the Star Wars API (SWAPI):

### Base URL
```
https://swapi.info/api
```
## 👥 Credits
Ajay Chakaravarthy Antony Raj

Zakia Sultana 

---
### Data Sources
- **API**: [SWAPI - The Star Wars API](https://swapi.info)
- **Images**: Character portraits and movie posters

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details
---

**May the Force be with you!** ⭐