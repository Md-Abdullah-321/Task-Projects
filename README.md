# Browser Instruction List

This project is a React application that allows users to create, manage, and rearrange a list of browser instructions. It uses the `@hello-pangea/dnd` library for drag-and-drop functionality, as well as local storage for state persistence.

## Features

- **Create Todo:** Add new browser instructions to the list.
- **Type Change:** Change the type of instruction (wait, fill, delay, click).
- **Edit Fields:** Update the selector, text, and delay fields for each instruction.
- **Remove Item:** Remove an instruction from the list.
- **Clone Item:** Clone an existing instruction.
- **Clear All:** Clear all instructions from the list.
- **Undo/Redo:** Navigate through previous and next states of the list.
- **Drag and Drop:** Reorder instructions using drag-and-drop functionality.
- **Import/Export JSON:** Import and export the list of instructions in JSON format (Still have to work on it).

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Md-Abdullah-321/Task-Projects
   cd Task-Projects
   git checkout 04_browser_automation_list_tool
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install the dependencies:

   ```bash
   npm run dev
   ```

This will start the development server. Open your browser and navigate to http://localhost:3000 to see the application.
