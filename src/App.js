import "./App.css";

import HelloWorld from "./components/HelloWord";
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
import TempInput from './components/TempInput'
import Debonce from './components/Debouce'
import Search from './components/Search'
import SignUpDialog from './components/containment'
import AppContext from './advanced/app'
import ErrApp from './advanced/ErrorBoundaries'
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
      {props.posts.map((post)=><li key={post.id}>
        {post.title}
      </li>)}
    </ul>
  )


  const content = props.posts.map((post)=><div key={post.id} >
    {post.title}
  <p>
    {post.content}
    </p>  
  </div>)  


    return (
      <div>
        {sidebar}
        <hr/>
        {content}
      </div>
    )

}





function App() {
  return (
    <div>
      <ErrApp/>
        {/* <AppContext/> */}
      <SignUpDialog/>
       {/* <cDebonce/> */}
       {/* <Search/> */}
      {/* <Debonce/> */}
      <TempInput scale="c" />
      <TempInput scale="f" />

      <Calc/>

      <NameForm/>

      <Blogs posts={posts}/>
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
