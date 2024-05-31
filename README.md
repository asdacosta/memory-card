<div align='center'>

# Memory Card Game

</div>
<div align='center'>
    <h3>💻 Languages</h3>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML badge">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS badge">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript badge">
    <h3>🔧 Technologies</h3>
    <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux badge">
    <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code badge">
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git badge">
    <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack badge">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js badge">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm badge">
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint badge">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier badge">
    <img src="https://img.shields.io/badge/Babel-F7B93E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel badge">
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest badge">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React badge">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite badge">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel badge">
    <h4><a href="https://memory-card-snowy-three.vercel.app/">Live Preview</a></h4>
</div>

**Demo:**

![Live Demo](./readme-assets/live.gif)

<details>

**<summary>Screen views</summary>**

**Desktop View:**

<img src="./readme-assets/desktop.png" alt="desktop view">
<br>

**Tablet View:**

<img src="./readme-assets/tablet.png" alt="tablet view">
<br>

**Mobile View:**

<img src="./readme-assets/mobile.png" alt="mobile view">

</details>

## 🌐 Origin

[The Odin Project](https://www.theodinproject.com/)

## 📝 Description

Builds a memory card game.

<details>
<summary>Features</summary>

- Loads to display status - Initializing page, after loss, and win.
- Displays info on hover.
- Updates scores in real-time.
- 3d interaction effect on cards.

</details>

## 🎯 Relevance

To solidify concepts of `State and Effects` in React.

## 👥 Intended Audience

Developers, users, recruiters.

> [!NOTE]
> Users can install all dependencies using `package.json` file via:
>
> ```bash
> npm install
> ```

## 📂 Files

<details>
<summary>Invert</summary>

| File                             | Description                                                                                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/*`                          | Source files that are bundled into the output directory `dist/`.                                                                                                        |
| `src/main.jsx`                   | The main JavaScript entry point that bundling begins.                                                                                                                   |
| `src/App.jsx`                    | Main component where overall structure and other layout components of the app are contained.                                                                            |
| `src/assets/*`                   | All assets(imgs, icons, vids) used in website.                                                                                                                          |
| `src/components/Boilerplate.jsx` | All components in body assembles here.                                                                                                                                  |
| `src/components/Card.jsx`        | Creates each card.                                                                                                                                                      |
| `src/components/FetchImgs.jsx`   | Fetches all image urls.                                                                                                                                                 |
| `src/components/ids.js`          | Generates ids with [uuid](https://www.npmjs.com/package/uuid).                                                                                                          |
| `src/components/Info.jsx`        | Displays info section.                                                                                                                                                  |
| `src/components/Loading.jsx`     | Creates a loading display with two props: `gif` and `text`.                                                                                                             |
| `src/components/Score.jsx`       | Displays Score section.                                                                                                                                                 |
| `src/styles/App.css`             | Main stylesheet for entire site.                                                                                                                                        |
| `src/styles/reset.css`           | Sets style to default for consistency across different devices and browsers.                                                                                            |
| `dist/*`                         | Output files from bundling of files in directory `src/`.                                                                                                                |
| `dist/main.js`                   | Main JavaScript output file that contains the bundled JavaScript code. Code is minified and optimized for deployment (Due to mode set to production in webpack config). |
| `package*`                       | Contains details of project and dependencies versions.                                                                                                                  |
| `readme-assets/*`                | Live demo and different screen views used in `README.md`.                                                                                                               |

</details>

## ©️ Credit

<details>
<summary>Invert</summary>

| File                    | Description                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| `src/assets/banana.png` | Photo created by Meesgroothuis on [Pixabay](https://pixabay.com/).     |
| `src/assets/bg.jpg`     | Photo created by Alexas Fotos on [Pixabay](https://pixabay.com/).      |
| `Fetched Images`        | Photos created by Alexas Fotos on [Pixabay API](https://pixabay.com/). |
| `src/assets/*.gif`      | Photo from [Giphy](https://giphy.com/).                                |

</details>

## 🔄 Improvements

<details>
<summary>Invert</summary>

- [ ] Fix load resource error in console.
- [ ] Add sound.
- [ ] Use an svg favicon.
- [ ] Make flip appear 3d.
- [ ] Display remaining moves at bottom (n/8).
- [ ] Make sure images fully appear before Loading ends.
- [ ] Add difficulty level.

</details>

## 👤 Curator

1. [Abraham Da Costa Silvanus](https://github.com/asdacosta)

<br>

> [!IMPORTANT]
> Seek contributor's consent for any code usage.

**[🞁 Top](#template)**
