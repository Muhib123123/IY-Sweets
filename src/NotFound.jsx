import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <title>404 Not Found</title>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', marginBottom: '1rem', marginTop: '-10rem' }}>404</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>The page you are looking for does not exist.</p>
        <Link to="/" style={{ fontSize: '1.2rem', color: '#007BFF', textDecoration: 'none' }}>Go back to Home</Link>
      </div>
    </>
  );
}