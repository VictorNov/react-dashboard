import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { ECommerce, Area, Calendar, Bar, ColorMapping, ColorPicker,
  Editor, Pie, Customers, Employees, Kanban, Financial, Orders,
  Pyramid, Line, Stacked } from './pages'
import './App.css'

import { useStateContext } from './contexts/ContextProvider'

const App = () => {
  const { activeMenu } = useStateContext()

  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>

        {/* Кнопка настроек */}
        <div className='fixed right-4 bottom-4'
             style={{ zIndex: '1000' }}
        >
          <TooltipComponent
            content='Settings'
            position='TopCenter'
            animation={{
              open: { effect: 'FadeIn', duration: 500, delay: 500 },
              close: { effect: 'FadeOut', duration: 500, delay: 500 }
            }}
          >
            <button
              type='button'
              className='text-3xl p-3
              hover:drop-shadow-xl
              hover:bg-light-gray text-white'
              style={{
                background: 'blue',
                borderRadius: '50%'
            }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {/* Сайдбар */}
        {activeMenu ? (
          <div className='w-72 fixed sidebar bg-white
          dark:bg-secondary-dark-bg'
          >
            <Sidebar />
          </div>
        ) : (
          <div className='w-0
          dark:bg-secondary-dark-bg'
          >
            <Sidebar />
          </div>
        )}

        <div className={
          `dark:bg-main-bg bg-main-bg min-h-screen w-full
          ${activeMenu ? ' md:ml-72' : ' flex-2'}`
        }>

          {/* Навигационная панель */}
          <div className='fixed md:static bg-main-bg
          dark:bg-main-dark-bg navbar w-full'
          >
            <Navbar />
          </div>

          {/* Основной контент страницы */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={ <ECommerce /> } />
              <Route path='/ecommerce' element={ <ECommerce /> } />

              {/* Страницы */}
              <Route path='/orders' element={ <Orders /> } />
              <Route path='/employees' element={ <Employees /> } />
              <Route path='/customers' element={ <Customers /> } />

              {/* Приложения */}
              <Route path='/kanban' element={ <Kanban /> } />
              <Route path='/editor' element={ <Editor /> } />
              <Route path='/calendar' element={ <Calendar /> } />
              <Route path='/color-picker' element={ <ColorPicker /> } />

              {/* Графики */}
              <Route path='/line' element={ <Line /> } />
              <Route path='/area' element={ <Area /> } />
              <Route path='/bar' element={ <Bar /> } />
              <Route path='/pie' element={ <Pie /> } />
              <Route path='/financial' element={ <Financial /> } />
              <Route path='/color-mapping' element={ <ColorMapping /> } />
              <Route path='/pyramid' element={ <Pyramid /> } />
              <Route path='/stacked' element={ <Stacked /> } />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App