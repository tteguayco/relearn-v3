

import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { QueryEditor } from '../pages/QueryEditor'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index path="editor" element={<QueryEditor />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  )
}
