import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById('preview').style
      .backgroundColor = args.currentValue.rgba
  }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Приложения' title='Выбор цвета' />

      <div className='text-center bg-white rounded-2xl w-full p-10'>
        <div id="preview" />

        <div className='flex justify-center gap-20 items-start flex-wrap'>
          <div>
            <p className='text-center text-2xl font-semibold mt-2 mb-4'>Палитра</p>
            <ColorPickerComponent
              id='inline-palette'
              inline
              showButtons={false}
              mode='Palette'
              modeSwitcher={false}
              change={change}
            />
          </div>

          <div>
            <p className='text-center text-2xl font-semibold mt-2 mb-4'>Пипетка</p>
            <ColorPickerComponent
              id='inline-picker'
              inline
              showButtons={false}
              mode='Picker'
              modeSwitcher={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker