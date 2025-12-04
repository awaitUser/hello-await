# 🏗️ hello-await

A personal CLI tool to display your developer profile card with an Arch Linux ASCII art logo. Perfect for sharing your skills and contact info in the terminal!

**Note:** This is a personal project created for `await`. While others can customize and use it, it's primarily designed for individual use.

## ✨ Features

- 🎨 **Beautiful Terminal UI** - Colorful output with ASCII art logo
- 🔧 **Fully Customizable** - Edit `src/config.js` to personalize your profile
- ⚡ **Minimal Mode** - Compact one-liner view with `--minimal` flag
- 📦 **Easy Installation** - Available on npm
- 🎯 **Multiple Sections** - Display skills, tools, databases, and DevOps expertise

## 📦 Installation

Install globally:
```bash
npm install -g hello-await
```

Or use directly with npx:
```bash
npx hello-await
```

## 🚀 Usage

### Full Profile View
Display your complete profile with ASCII art:
```bash
hello-await
```

or

```bash
npx hello-await
```

### Minimal Compact View
Show a condensed single-line version without ASCII art:
```bash
hello-await --minimal
```

or

```bash
hello-await --m
```

## ⚙️ Configuration

Edit `src/config.js` to customize your profile:

```javascript
module.exports = {
  profile: {
    name: "Your Name",
    bio: "Your Bio",
    github: "Your GitHub URL",
    discord: "Your Discord Handle"
  },
  skills: ["Skill1", "Skill2", ...],
  tools: ["Tool1", "Tool2", ...],
  databases: ["DB1", "DB2", ...],
  devops: ["DevOps1", "DevOps2", ...]
};
```

### Configuration Sections

- **Profile** - Your name, bio, GitHub profile, and Discord handle
- **Skills** - Programming languages and frameworks (e.g., JavaScript, ReactJS, TypeScript)
- **Tools and Platforms** - Development tools and platforms (e.g., Git, VS Code, Postman)
- **Database and Storage** - Database systems (e.g., MongoDB, PostgreSQL)
- **DevOps and Cloud** - DevOps tools and cloud services (e.g., Docker, AWS)

## 📋 Default Configuration

The package comes with a sample profile featuring:
- **Skills**: JavaScript, ReactJS, NextJS, ExpressJS, TypeScript, Tailwind CSS
- **Tools**: Git & GitHub, VS Code, Postman, Arch Linux, OpenAI
- **Databases**: MongoDB, PostgreSQL
- **DevOps**: Docker, Apache, AWS, CI/CD with GitHub Actions

## 🎯 Project Structure

```
hello-await/
├── bin/
│   └── hello-await.js     # CLI entry point
├── src/
│   ├── index.js           # Display logic
│   └── config.js          # Profile configuration (edit this!)
├── package.json           # Package metadata
└── README.md             # This file
```

## 🛠️ Development

Clone the repository and install dependencies:
```bash
git clone https://github.com/awaitUser/hello-await.git
cd hello-await
npm install
```

Run locally:
```bash
node bin/hello-await.js
```

Test with minimal flag:
```bash
node bin/hello-await.js --minimal
```

## 📝 License

MIT - Feel free to use and modify!

## 👤 Author

Created for [await](https://github.com/awaitUser)

---

**Made with ❤️ for the terminal**
