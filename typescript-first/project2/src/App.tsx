import Input from './components/Input.tsx';

function App() {
  return (
    <main>
      <Input id="name" label="your name" type="text" />
      <Input id="age" label="your age" type="number" />
    </main>
  );
}

export default App;
