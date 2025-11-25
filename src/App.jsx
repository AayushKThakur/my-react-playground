import { useEffect, useState } from "react";

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

//CHILDREN, (CHILD OF CARD)
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

//CHILDREN
function Card({ title, children }) {
  // console.log(children);
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

//CUSTOM INPUT
function NameInput() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
      />

      <h3>
        Your name is {firstName} + {lastName}
      </h3>
    </>
  );
}

// function DebugInput() {
//   return (
//     <input
//       onChange={(e) => {
//         console.log("EVENT:", e);
//         console.log("TARGET:", e.target);
//         console.log("VALUE:", e.target.value);
//       }}
//     />
//   );
// }

//USE EFFECT
function CounterWithEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The count is now:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}> Increase </button>
    </div>
  );
}

function PostList() {
  const posts = [
    {
      id: 1,
      title: "Learning React",
      summary: "Understanding components and JSX.",
      readTimeMinutes: 3,
    },
    {
      id: 2,
      title: "Why Next.js is powerful",
      summary: "Server components and routing system.",
      readTimeMinutes: 5,
    },
    {
      id: 3,
      title: "How useEffect works",
      summary: "Side effects explained clearly.",
      readTimeMinutes: 4,
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} title={post.title}>
          <PostPreview
            number={post.id}
            title={post.title}
            summary={post.summary}
            readTimeMinutes={post.readTimeMinutes}
          />
        </Card>
      ))}
    </div>
  );
}

function LikeList() {
  const items = [1, 2, 3];

  return (
    <div>
      {items.map((num) => (
        <LikeButton key={num} />
      ))}
    </div>
  );
}

function TodoList() {
  const todos = ["go to gym", "learn react", "go fro a run"];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

//CONDITIONAL RENDERING
function WelcomeMessage() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <h2>Welcome User!</h2> : <h2>Please Login</h2>}

      <button onClick={() => setisLoggedIn(!isLoggedIn)}>Toggle Login</button>
    </div>
  );
}

export default function App() {
  return (
    // <>
    //   <Header />

    //   {/* <DebugInput /> */}

    //   <br />

    //   <CounterWithEffect />

    //   {/* <PostList /> */}

    //   <LikeList />

    //   <NameInput />
    //   <Card title="Featured Post">
    //     <PostPreview
    //       number={1}
    //       title="Why React clicked for me"
    //       summary="React finally made sense when I started thinking in components instead of pages."
    //       readTimeMinutes={4}
    //     />
    //     <LikeButton />
    //   </Card>

    //   <Card>
    //     <PostPreview
    //       number={2}
    //       title="React vs Next.js"
    //       summary="Next.js is just React with superpowers — but only if your React fundamentals are strong."
    //       readTimeMinutes={3}
    //     />
    //     <LikeButton />
    //   </Card>

    //   <br />
    //   <Footer />
    // </>

    // <>
    //   <TodoList />
    //   <WelcomeMessage />
    // </>
    <></>
  );
}
