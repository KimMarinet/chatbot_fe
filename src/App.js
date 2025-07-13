import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
import IntroPage from './chat/pages/IntroPage';

const MainLayout = loadable(() => import('./global/layouts/MainLayout'));
const NotFoundPage = loadable(() => import('./global/pages/NotFoundPage'));
const ChatPage = loadable(() => import('./chat/pages/ChatPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<IntroPage/>} />
          <Route path="/chatbot" index element={<ChatPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
