import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  fillColor?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = 700,
  letterSpacing = 2,
  fillColor = 'currentColor',
}) => {
  // Measure text width by calculating approximate character width
  const charWidth = fontSize * 0.6;
  const textWidth = text.length * charWidth + (text.length - 1) * letterSpacing;
  const padding = fontSize * 0.2;
  const svgWidth = textWidth + padding * 2;
  const svgHeight = fontSize * 1.5;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={text}
    >
      <text
        x={padding}
        y={fontSize}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill={fillColor}
        dominantBaseline="middle"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
