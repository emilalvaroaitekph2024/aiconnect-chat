# Telegram UI Clone

This project is a replica of the Telegram messaging application, created as part of a 48-hour assignment to demonstrate UI/UX skills and React expertise. The application features both desktop and mobile views, utilizing ReactJS and MUI for a professional and responsive design.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Demo

Check out the live demo of the project [here](https://telegram-ui-clone.vercel.app/).

## Features

- Responsive design for both desktop and mobile views.
- Displays a list of chats with pagination support.
- Displays messages for selected chats.
- Functional chat input with attachments and camera for sending messages (UI only).
- Uses bootstrap for consistent and professional styling.

## Technologies Used

- React + Vite (tempelate)
- ReactJS
- Bootstrap and Bootstrap Icons
- React Router DOM

## Setup and Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/zeeshan-akhter/telegram-ui-clone.git
    cd telegram-ui-clone
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Usage

1. **Home Page**: Displays a list of chats.
2. **Chat Page**: Displays messages for a selected chat. Accessible via `/chat/:id` where `:id` is the chat ID.

## API Endpoints

- **Get all chats (paginated):**
    - **URL**: `https://devapi.beyondchats.com/api/get_all_chats?page=1`
    - **Method**: GET

- **Get messages for a chat:**
    - **URL**: `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`
    - **Method**: GET


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
