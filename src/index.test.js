import React from 'react'
import {renderToString} from 'react-dom/server'
import Loader, {Loader as NamedLoader} from './index'

it ('should export a default & named Loader', () => {
	expect(Loader).toBeDefined()
	expect(NamedLoader).toBeDefined()
})

it ('should render some html', () => {
	let loaderHtml = renderToString(<Loader type='line-scale' />)
	expect(loaderHtml).toContain('class="loader-inner line-scale"')
})
