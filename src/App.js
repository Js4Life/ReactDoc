import "./App.css";

import { HelloWorld } from "./components/HelloWord";
import Timer from "./components/Timer";
import ToDo from "./components/todo";
import MarkDown from "./components/MarkDown";
import IntroduceJSX from "./components/IntroduceJSX";
import ComponentR from "./components/componentR";
import CommentComponent from "./components/extractingComp";
import Clock from "./components/Clock";
import EventHandler from "./components/formHandlers";
// import LoginComp from './components/loginComp'
import LoginControl from "./components/loginCtrl";
import { MailBox } from "./components/Mailbox";
import Page from "./components/Page";
import NumberList from "./components/NumberList";
import NameForm from "./components/NameForm";
import Calc from "./components/Calc";
import TempInput from "./components/TempInput";
import Debonce from "./components/Debouce";
import Search from "./components/Search";
import SignUpDialog from "./components/containment";
import AppContext from "./advanced/app";
import { AppHookz } from "./advanced/allhooks/App";
import ErrApp from "./advanced/ErrorBoundaries";
import Parent from "./advanced/portals";
import { ToDoList } from "./advanced/ToDoList";
import { CustomText } from "./advanced/RefReact";
import UseRef from "./advanced/useofRefs";
import MouseTracker from "./advanced/renderPrps";
import Cat from "./advanced/catCmpt";
import { Greetingz } from "./advanced/hooks/greetingC";
import GreetingClass from "./advanced/hooks/greeting";
import { useCallback, useMemo, useReducer, useState } from "react";
import { Hello1 } from "./advanced/allhooks/Hello1";
import { Squarez } from "./advanced/allhooks/Square";
import { useFetch } from "./advanced/allhooks/useFetch";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserGreeting from "./components/usergreeting";
import { userContext } from "./advanced/UserContext";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning react",
  author: {
    name: "Hello Raghu",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

const messages = ["React", "Re:React", "Re:re", "re"];

const numb = [1, 2, 3, 4, 5];

const doubled = numb.map((n) => n * 2);

console.log("doubled", doubled);

// eslint-disable-next-line array-callback-return
const listItems = doubled.map((numbers) => <li>{numbers}</li>);

console.log("listItems", listItems);

const posts = [
  {
    id: 1,
    title: "Hello World",
    content: "Welcome to learning react",
  },
  {
    id: 2,
    title: "Installation",
    content: "you can install react from npm.",
  },
];

function Blogs(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id}>
      {post.title}
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}

function App() {
  const [user, setUser] = useState("Hello from context");

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();

  const [count, setCount] = useState(0);

  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );
  console.log("respo", data);
  const favNums = [7, 21, 37];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
      //  return count
    },
    [setCount]
  );

  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }

    let longestWord = "";
    console.log("input data", arr);

    JSON.parse(arr).forEach((sentence) =>
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );
    return longestWord;
  }, []);

  const longestword = useMemo(
    () => computeLongestWord(data),
    [computeLongestWord, data]
  );

  return (
    <div>
      <p>useContext</p>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Link</Link>
              </li>
            </ul>
          </nav>
          {/* <userContext.Provider value={value}>
            <Route path="/" exact component={HelloWorld} />
            <Route path="/about" exact component={UserGreeting} />
          </userContext.Provider> */}
        </div>
      </Router>

      <p>useReducer</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <div>number of todos: {todoCount}</div>
      </form>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{
            textDecoration: t.completed ? "line-through" : "",
          }}
        >
          actual : {t.text}
        </div>
      ))}
      <pre>{JSON.stringify(todos, null, 2)}</pre>

      <button onClick={() => dispatch({ type: "increment" })}>
        incre-Reducer
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        decre-Reducer
      </button>

      <p>usememo</p>
      <div>count memo:{count}</div>
      <button onClick={() => setCount(count + 1)}>increment memo</button>
      <div>{longestword}</div>

      <Hello1 increment={increment} />
      {/* <div>Count : {count}</div> */}

      {favNums.map((n) => {
        return <Squarez increment={increment} n={n} key={n} />;
      })}
      <AppHookz />
      <GreetingClass />
      <Greetingz />
      <MouseTracker
        render={(mouse) => (
          <>
            <p>
              The mouse position is {mouse.x}, {mouse.y}
            </p>
            {/* <Cat mouse={mouse} /> */}
          </>
        )}
      />
      <UseRef />
      {/* <CustomText/> */}
      <ToDoList />
      {/* <Parent/> */}
      {/* <div id="modal-root"></div> */}
      <ErrApp />
      {/* <AppContext/> */}
      <SignUpDialog />
      {/* <cDebonce/> */}
      {/* <Search/> */}
      {/* <Debonce/> */}
      <TempInput scale="c" />
      <TempInput scale="f" />

      <Calc />

      <NameForm />

      <Blogs posts={posts} />
      <NumberList numbers={numb} />
      {/* <ul>{listItems}</ul> */}
      <Page />
      <MailBox unreadMsg={messages} />
      <LoginControl />
      {/* <LoginComp isLogged={false} /> */}

      <EventHandler />

      <Clock date={new Date().toLocaleTimeString()} />
      <CommentComponent
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <ComponentR name="Sara" />
      <ComponentR name="Sara2" />
      <ComponentR name="Sara3" />
      <HelloWorld name="raghavendra" />
      <Timer />
      <ToDo />
      <MarkDown />
      <IntroduceJSX />
    </div>
  );
}

export default App;
