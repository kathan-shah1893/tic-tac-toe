# React Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game built using React. It allows two players to play the classic game on a 3x3 grid. The game also includes a "Play again" button to reset the game.

## Features

- Two-player game with alternating turns.
- Display the winner when a player wins.
- "Play again" button to reset the game.
- Responsive design with a clean and modern UI.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-tic-tac-toe.git
   cd react-tic-tac-toe

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

### Usage

- Click on any square to place your marker (X or O).
- The game will automatically switch turns between X and O.
- The winner will be announced when three markers align horizontally, vertically, or diagonally.
- Click the "Play again" button to reset the game.

### Project Structure

```
react-tic-tac-toe/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Bord.js
│   │   ├── Squre.js
│   │   └── Board.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

### Custom Styles

The custom styles for the board and the "Play again" button are located in the `Board.css` file:

```css
.board-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: black; /* Background color for the board */
  border-radius: 10px; /* Rounded corners for the board */
}

.board-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.square {
  width: 100px; /* Width of each square */
  height: 100px; /* Height of each square */
  background-color: white; /* Background color for squares */
  border: 2px solid black; /* Border for squares */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px; /* Font size for X and O */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth background color transition */
}

.square:hover {
  background-color: lightgray; /* Light gray background on hover */
}

button.play-again {
  background-color: #4CAF50; /* Green background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 10px 20px; /* Some padding */
  text-align: center; /* Center the text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Make the button inline-block */
  font-size: 16px; /* Increase font size */
  margin-top: 20px; /* Add some margin on top */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer/hand icon */
  transition: background-color 0.3s; /* Smooth transition */
}

button.play-again:hover {
  background-color: #45a049; /* Darker green on hover */
}
```

### Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

### Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).