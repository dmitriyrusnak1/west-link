declare module '*.jpg';
declare module '*.svg';
declare module '*.png';
declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}