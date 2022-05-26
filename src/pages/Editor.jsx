import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent,
  Toolbar, Resize } from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Приложения' title='Редактор' />

      <RichTextEditorComponent
        height={600}
        toolbarSettings ={{
          items: [ 'Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
            'CreateLink', 'Image', '|','ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Formats', 'Alignments',
            'OrderedList', 'UnorderedList', 'Outdent', 'Indent', '|',
            'Undo', 'Redo' ],
          enableFloating: true,
        }}
        enableResize={true}
      >
        <EditorData  />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar, Resize]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor