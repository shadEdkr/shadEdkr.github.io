# 🔍 Suspicious Unicode Character Detector

**Suspicious Unicode Character Detector** is a browser-based tool designed to identify potentially deceptive Unicode characters in text. This specialized security tool helps detect hidden characters, homoglyphs, and other special symbols that could be exploited in phishing attacks, URL spoofing, or other security threats. The tool scans input text for non-standard characters, providing real-time feedback to ensure the safety and integrity of your data.

---

## 🔍 Key Features

- **Hidden Character Detection:** Identify zero-width and invisible Unicode characters that might be used to obfuscate text or URLs.
- **Homoglyph Identification:** Spot characters that visually resemble standard ASCII characters but are actually different Unicode characters, making them ideal for deceptive purposes.
- **Character Classification:** Automatically categorize suspicious characters by type (e.g., homoglyphs, invisible characters).
- **Visual Analysis:** Results are color-coded for easy identification and understanding, with character counts and detailed descriptions.
- **Unicode Code Point Display:** Each suspicious character's Unicode code point is shown in the format **U+XXXX**, making the detection process more transparent.
- **Real-Time Scanning:** Get instant feedback as text is analyzed, with immediate identification of potential threats.
- **Character Count Statistics:** Track occurrences of each suspicious character type across the analyzed text, offering deeper insights into potential issues.

---

## 💻 Technical Implementation

- **Tech Stack:** Developed using **HTML**, **CSS**, and **JavaScript**. No external libraries or dependencies are required, making the tool lightweight and fast.
- **Pattern Matching:** Uses **regular expressions** to efficiently detect non-standard characters, ensuring quick and accurate results.
- **Unicode Range Analysis:** Specifically targets problematic Unicode ranges that are known for causing security risks, such as zero-width characters, control characters, and homoglyphs.
- **Client-Side Processing:** All analysis is performed locally within the browser, ensuring no sensitive data is sent to external servers.
- **Responsive Design:** The tool’s interface adapts seamlessly to both desktop and mobile devices, ensuring accessibility and ease of use across various platforms.

---

## 🚀 How to Use

1. **Input Text:** Paste or type the text you wish to analyze in the input area.
2. **Scan for Hidden Characters:** Click the "Scan for Hidden Characters" button or press **Enter** to start the analysis.
3. **Review Results:** Examine the highlighted suspicious characters, with detailed information on each one.
4. **Character Information:** View the Unicode code points and descriptions for any detected suspicious characters.

---

## 📊 Output Information

The tool provides the following analysis:

- **Overall Security Assessment:** A general evaluation of the text’s security based on detected issues.
- **Suspicious Characters List:** A detailed list of all suspicious characters found in the input text.
- **Unicode Code Points:** Displays the Unicode code points for each detected character in **U+XXXX** format.
- **Character Type Classification:** Classifies detected characters into categories (e.g., homoglyphs, invisible characters).
- **Character Occurrences:** A count of how many times each suspicious character appears in the text.
- **Visual Representation:** Color-coded highlighting to visually separate different types of suspicious characters for easier review.

---

## 🔧 Technical Details

The detector works by performing the following operations:

- **Scans Text Against Unicode Ranges:** The tool scans input text for characters outside the standard ASCII range (0x00-0x7F).
- **Targets Problematic Unicode Ranges:** Specifically looks for:
    - **Zero-width characters (U+200B to U+200D):** These characters are invisible and can be used to obfuscate URLs or text.
    - **Control characters (U+2060 to U+206F):** Non-printing characters that may affect how text is displayed or interpreted.
    - **Byte Order Mark (U+FEFF):** A special character used to indicate byte order in text encoding, which could be malicious if placed incorrectly.
    - **Full-width characters (U+FF00 to U+FFFF):** Characters that are wider than standard ASCII characters, often used to disguise malicious links.
- **Creates Detailed Reports:** After scanning, a comprehensive report is generated, listing all detected suspicious characters, their Unicode code points, and their types.

---

## 🎓 Security Value

This tool serves as both a practical utility and a valuable security resource:

- **Phishing Prevention:** Helps identify potential phishing attempts by detecting invisible characters in URLs or email addresses.
- **URL Spoofing Detection:** Flags deceptive characters that could be used to disguise malicious URLs in phishing campaigns.
- **Secure Copy/Paste Operations:** Protects against hidden characters that could be inadvertently copied and pasted, potentially introducing vulnerabilities.
- **Unicode Security Education:** Educates users about the risks of deceptive Unicode characters and how they can be used for social engineering attacks.
- **Forensic Text Analysis:** Aids in the forensic analysis of suspicious text in cybersecurity investigations, helping experts identify and mitigate threats.

---

## 💾 Installation

1. **Download the HTML File:** Download the provided HTML file.
2. **Open in a Browser:** Open the file in any modern web browser (Chrome, Firefox, Safari, Edge).
3. **No Server Required:** This tool works entirely client-side, so there’s no server or installation required.

---

## 🔜 Future Enhancements

Future features may include:

- **Batch Analysis:** Support for analyzing multiple text samples at once for quicker security assessments.
- **Export Functionality:** Allow users to export their analysis results for documentation or sharing purposes.
- **Extended Unicode Range Coverage:** Broader support for additional Unicode characters beyond the currently targeted ranges.
- **Severity Scoring:** Add a severity score to detected issues based on their potential security risk.
- **URL Safety Checking:** Integration with URL safety services to provide deeper analysis of detected suspicious characters in URLs.

---

## 📝 License

© 2025 **Yoonsung Ed Cho**. All Rights Reserved.

Created as part of a **cybersecurity portfolio project** aimed at identifying deceptive text and preventing Unicode-based attacks. This tool is designed to assist both cybersecurity professionals and everyday users in recognizing and mitigating the risks of hidden characters and homoglyphs.

---
