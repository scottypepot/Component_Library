import './App.css'

import { useState } from 'react'
import Appbar from './components/appbar'
import Breadcrumbs from './components/Breadcrumbs'
import Container from './components/Container'
import Closeicon from './components/closeicon'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Appbar/>
      <Breadcrumbs/>
      <Container/>
      <Stack spacing={2} alignItems={'center'} marginTop={10}>
      <Pagination count={1} shape="rounded" />
      </Stack>
      <Closeicon/>

    </>
  )
}

export default App
