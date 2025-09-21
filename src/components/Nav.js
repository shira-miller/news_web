export default function Nav() {
  return (
    <aside
      style={{
        width: "200px",
        background: "#f0f0f0",
        padding: "1rem",
        height: "100vh",
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="#">news</a></li>
          <li><a href="#">sport</a></li>
          <li><a href="#">economy</a></li>
          <li><a href="#">lculture</a></li>
        </ul>
      </nav>
    </aside>
  );
}
