import React, { useRef } from 'react'
import { Header } from '../components'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'



const ColorPicker = () => {

  const change = (args) =>{
    myref.current.style.backgroundColor = args.currentValue.hex
  }

  const myref = useRef(null)



  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-1 bg-white rounded-3xl'>
      <Header title={"ColorPicker"} category={"App"} />
      <div className='text-center'>
        <div ref={myref} id='preview'></div>
          <div className='flex justify-center items-center gap-5 flex-wrap'>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
              <ColorPickerComponent id='inline-pallete'
                mode='Palette'
                modeSwitcher = {false}
                inline
                showButtons = {false}
                change={change}
              />
            </div>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
              <ColorPickerComponent id='inline-pallete'
                mode='Picker'
                modeSwitcher = {false}
                inline
                showButtons = {false}
                change={change}
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ColorPicker