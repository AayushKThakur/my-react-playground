function Header() {
  return (
    <>
      <h1>React Playground</h1>
      <p>Where we learn and build using React</p>
    </>
  );
}

function Footer() {
  return (
    <>
      <h1>Footer</h1>
      <div>Aayush</div>
      <div>This is {new Date().getFullYear()}</div>
    </>
  );
}

function PostPreview({ number, title, summary, readTimeMinutes }) {
  return (
    <>
      <h1>Post number {number}</h1>
      <h2>{title}</h2>
      <p>{summary}</p>
      <p>{readTimeMinutes} min read</p>
    </>
  );
}
export default function App() {
  return (
    <>
      <Header />
      <br />
      <PostPreview
        number={1}
        title="Why React clicked for me"
        summary="React finally made sense when I started thinking in components instead of pages."
        readTimeMinutes={4}
      />

      <PostPreview
        number={2}
        title="React vs Next.js"
        summary="Next.js is just React with superpowers — but only if your React fundamentals are strong."
        readTimeMinutes={3}
      />
      <br />
      <Footer />
    </>
  );
}
