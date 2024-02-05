import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='h-full'>
      <div className='flex h-full w-[80px] z-30 flex-col fixed inset-y-0'>
        <Sidebar />
      </div>
      <main className='pl-[80px] h-full flex flex-col'>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
