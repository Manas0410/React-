import React, { useState } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const Logo = () => {
  const [styles, setStyles] = useState({
    text: "Sample Text",
    height: "200px",
    width: "400px",
    bgColor: "#ffffff",
    fontSize: "16px",
    fontWeight: "normal",
    color: "#000000",
    fontStyle: "normal",
    customCSS: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStyles({ ...styles, [name]: value });
  };

  const downloadAsImage = async (format: "png" | "svg") => {
    const container = document.getElementById("preview-container");
    if (!container) return;

    const canvas = await html2canvas(container);
    if (format === "png") {
      canvas.toBlob((blob) => {
        if (blob) saveAs(blob, "styled-container.png");
      });
    } else if (format === "svg") {
      const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="${
        styles.width
      }" height="${styles.height}">
        <foreignObject width="100%" height="100%">
          ${new XMLSerializer().serializeToString(container)}
        </foreignObject>
      </svg>`;
      const blob = new Blob([svgData], { type: "image/svg+xml" });
      saveAs(blob, "styled-container.svg");
    }
  };

  return (
    <div className="style-preview">
      <form>
        <div>
          <label>Text:</label>
          <input
            type="text"
            name="text"
            value={styles.text}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type="text"
            name="height"
            value={styles.height}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Width:</label>
          <input
            type="text"
            name="width"
            value={styles.width}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Background Color:</label>
          <input
            type="color"
            name="bgColor"
            value={styles.bgColor}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Font Size:</label>
          <input
            type="text"
            name="fontSize"
            value={styles.fontSize}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Font Weight:</label>
          <input
            type="text"
            name="fontWeight"
            value={styles.fontWeight}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Text Color:</label>
          <input
            type="color"
            name="color"
            value={styles.color}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Font Style:</label>
          <input
            type="text"
            name="fontStyle"
            value={styles.fontStyle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Custom CSS:</label>
          <textarea
            name="customCSS"
            value={styles.customCSS}
            onChange={handleInputChange}
            placeholder="Enter custom CSS"
          />
        </div>
      </form>

      <div
        className="flex items-center justify-center font-edo"
        id="preview-container"
        style={{
          height: styles.height,
          width: styles.width,
          backgroundColor: styles.bgColor,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight as React.CSSProperties["fontWeight"],
          color: styles.color,
          fontStyle: styles.fontStyle as React.CSSProperties["fontStyle"],
          //   ...JSON.parse(
          //     `{"${styles.customCSS
          //       .replace(/;/g, '","')
          //       .replace(/:/g, '":"')
          //       .replace(/,\s*$/, "")}"}`
          //   ),
        }}
      >
        {styles.text}
      </div>

      <button onClick={() => downloadAsImage("png")}>Download as PNG</button>
      <button onClick={() => downloadAsImage("svg")}>Download as SVG</button>
      <button className="glowing-border-btn">Click Me</button>
    </div>
  );
};

export default Logo;
