export function staticBlurDataUrl() {
  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
        <filter id='b' color-interpolation-filters='sRGB'>
            <feGaussianBlur stdDeviation='20'/>
        </filter>

        <rect preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
        stroke-width="3" stroke="#7b9fa6" fill="#426874" />  
    </svg>
`;

  const toBase64 = (content: string) =>
    typeof window === "undefined"
      ? Buffer.from(content).toString("base64")
      : window.btoa(content);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}
