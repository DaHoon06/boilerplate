export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        const theme = localStorage.getItem("theme");
        const preferredTheme = theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        document.documentElement.style.setProperty("color-scheme", preferredTheme);
      `,
      }}
    />
  );
}
