import './App.css';
import BaseView from './layout/base';
import HomepageView from './pages/homepage/homepage';
function App() {
  return (
    <div className="App">
      <BaseView>
        <main>
          <HomepageView></HomepageView>
        </main>
      </BaseView>
    </div>
  );
}

export default App;
