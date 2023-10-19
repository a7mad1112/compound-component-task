import './App.css';
import Tab from './components/tab';
function App() {
  return (
    <div className="App">
      <center><h1>Compound Component Task</h1></center>
      <hr />
      <div style={{ width: "50%", margin: "50px auto" }}>
        <h2>Tap Component:</h2>
        <Tab>
          <Tab.List>
            <Tab.Item>C#</Tab.Item>
            <Tab.Item>JS</Tab.Item>
            <Tab.Item>TS</Tab.Item>
            <Tab.Item>React</Tab.Item>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              C# is known for its strong type system and is a popular choice for building web applications.
            </Tab.Panel>
            <Tab.Panel>
              JavaScript is the primary scripting language for web development, allowing developers to create interactive and dynamic content in browsers.
            </Tab.Panel>
            <Tab.Panel>
              TypeScript is a statically typed superset of JavaScript, providing enhanced tooling and type safety during development.
            </Tab.Panel>
            <Tab.Panel>
              React is a JavaScript library for building user interfaces, known for its component-based architecture and efficient virtual DOM rendering.
            </Tab.Panel>
          </Tab.Panels>
        </Tab>
        <hr />
      </div>

    </div>
  );
}
export default App;
