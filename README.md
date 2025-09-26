# Auto-Presser

An automated key-pressing tool for World of Warcraft, built with Electron for macOS.

## 🎯 Objective

This project was created to explore how far one can progress in World of Warcraft using only a single-button rotation system. The application automates key presses at regular intervals, allowing you to test game mechanics with minimal manual interaction.

## ⚠️ Warning

**Important:** Using automation tools may violate World of Warcraft's Terms of Service. Use this tool at your own risk. This project is for educational and experimental purposes only.

## 🌟 Features

- **Configurable auto-press**: Define which key to press automatically
- **Adjustable frequency**: Configure the interval between each key press
- **Control shortcut**: Quickly enable/disable auto-pressing with a keyboard shortcut
- **Simple interface**: Intuitive user interface for configuration
- **macOS optimized**: Specifically designed for macOS with Electron

## 🛠️ Technologies Used

- **Electron**: Framework for creating native desktop applications
- **TypeScript**: For type-safe development
- **Vite**: Modern and fast build tool
- **Electron Forge**: Complete toolchain for Electron development

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- macOS (optimized for this platform)

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/frederic-mamath/auto-presser.git
cd auto-presser
```

2. Install dependencies:

```bash
npm install
```

3. Start the application in development mode:

```bash
npm start
```

## 📦 Build and Distribution

### Development

```bash
npm start
```

### Package for distribution

```bash
npm run package
```

### Create installer

```bash
npm run make
```

## 🎮 Usage

1. **Key configuration**: Select the key you want to automate
2. **Frequency adjustment**: Set the interval in milliseconds between each key press
3. **Activation shortcut**: Configure a global keyboard shortcut to start/stop automation
4. **Control**: Use the shortcut to enable/disable auto-pressing during gameplay

## ⚙️ Configuration

The application allows you to configure:

- **Target key**: The key to press automatically (default: Space)
- **Interval**: Time in milliseconds between each press (default: 1000ms)
- **Global shortcut**: Key combination to enable/disable (default: Cmd+Shift+A)

## 🏗️ Project Architecture

```
src/
├── main.ts          # Electron main process
├── preload.ts       # Preload script for security
├── renderer.ts      # User interface logic
├── index.css        # Application styles
└── ...
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🧪 Experimental Development

This project is part of an experiment to see how far one can progress in World of Warcraft with simplified rotation mechanics. Results and observations will be documented as testing progresses.

## 📞 Contact

Frederic MAMATH - fredericmamath@gmail.com

Project Link: [https://github.com/frederic-mamath/auto-presser](https://github.com/frederic-mamath/auto-presser)

---

_Reminder: Use this tool responsibly and in compliance with the terms of service of the games involved._
