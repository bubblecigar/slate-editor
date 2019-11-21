import store from 'store-js'
import { Value } from 'slate'

const importer = () => {
  const storedJsonStr = store.get('slateJs-demo')
  const json = storedJsonStr ? JSON.parse(storedJsonStr) : ''
  const initialValue = Value.fromJSON(json || {
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              text: ' A line of text in a paragraph.'
            }
          ]
        }
      ]
    }
  })
  return initialValue
}

const exporter = change => {
  const jsonStr = JSON.stringify(change.value.toJSON())
  store.set('slateJs-demo', jsonStr)
}

export default { importer, exporter }