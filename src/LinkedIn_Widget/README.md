

# LinkedIn Profile Enhancer Chrome Extension

## Overview

The **LinkedIn Profile Enhancer** Chrome extension injects a widget into LinkedIn profiles that displays a match score and account status for the viewed profile. The extension allows users to toggle the visibility of the widget and customize its appearance based on profile data.

This extension is ideal for users who want to track their LinkedIn profile match scores and account status with ease. It offers a simple, non-intrusive interface that can be toggled on or off at any time.

---

## Features

- **Match Score**: Displays a profile match score, indicating how well the profile matches predefined criteria (e.g., 86% match).
- **Account Status**: Shows whether the profile is a "Target" (green) or other status (red).
- **Toggle Visibility**: A button to show or hide the widget.
- **Close Button**: Close the widget permanently or temporarily.
- **Persistent State**: The visibility of the widget is stored in Chrome's local storage and persists between sessions.

---

## Installation

### Steps to Install the Extension:

1. **Download the Files**: Clone or download the repository to your local machine.
   
   ```bash
   git clone https://github.com/yourusername/linkedin-profile-enhancer.git
   ```

2. **Load the Extension into Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** in the top right corner.
   - Click **Load unpacked** and select the folder where the extension files are located.
   
3. **Use the Extension**:
   - Once installed, go to any LinkedIn profile (`https://www.linkedin.com/in/*`).
   - You should see a floating widget displaying the match score and account status.

---

## Configuration

The match score and account status in the widget are set by default. You can modify the `content.js` file to dynamically fetch this data based on your own criteria.

```js
const data = {
  companyName: "TechCorp",
  matchScore: 86,
  accountStatus: "Target"
};
```

- **companyName**: The company or profile name you want to display.
- **matchScore**: A numeric value representing the profile match percentage.
- **accountStatus**: The current status of the account, either "Target" (green) or another status (red).

---

## Files

- **`manifest.json`**: Configuration file for the Chrome extension.
- **`content.js`**: JavaScript file that manages the creation and behavior of the widget.
- **`styles.css`**: The CSS file that styles the widget's appearance.
- **`icon.png`**: An optional icon for your extension (48px x 48px).

---

## Contributing

Feel free to fork the repository, open issues, and submit pull requests. If you have suggestions for improving the extension or additional features you'd like to see, let us know!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or feedback, reach out to the repository owner or open an issue on GitHub.

--- 

This README will provide users with the necessary steps to install and use the extension, as well as a brief explanation of its features and configuration options. Feel free to modify it according to your needs!