import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import utils from 'mineko-utils';


function App() {
    console.log(utils.TextUtil.toLowerAndStrip('DFDFDFDFF sfasd fa'))
    console.log(utils.TextUtil.firstCharToUpperCase('sdfasfasdfa'))

    return(
        <div>
            <h1>App name</h1>
            <ArticleList articles={articles} />
        </div>
    )
}

export default App
