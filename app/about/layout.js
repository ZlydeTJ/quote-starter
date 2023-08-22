export default function AboutLayout({ children }) {
  return (
    <div>
      About Layout!
      <nav className="nav">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/about/me">Me</a>
        </li>
      </nav>
      {children}
    </div>
  );
}
