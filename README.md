## PreCSS Test

Testing out [preCSS](https://github.com/jonathantneal/precss) (A postCSS plug-in) for using SASS-like syntax in CSS modules.

## Notes
Webpack loader configuration for generating scoped classnames: 
```js
module.exports = {
//...
{
    test:/\.css$/,
    exclude: /node_modules/,
    loader:'style/useable!css?modules=true&localIdentName=[local]--[hash:base64:10]!postcss'
}
//...
postcss(webpack){
        return[
            require('postcss-import')({addDependencyTo: webpack}),
            require('postcss-url'),
            require('postcss-discard-comments'),
            require('precss'),
            require('postcss-color-function')
        ];
    }
```
`style/useable` will enable adding/removing style tags dynamically with reference counting so that only the imported styles that are `.use()` | `.unuse()`d by a component will be added to the DOM. Something like 
```js
//require styles
import styles from './Paneset.css'

//...within react component class...
componentWillMount(){
  styles.use();
}
componentWillUnmount(){
  styles.unuse();
}
//...
```
It would also be possible to do this using a Higher-Order Component...
Each component that requires styling has its own dedicated stylesheet.  
## To Run...

```sh
npm install
npm start
```
Then open a web-browser pointed to `localhost:8080`
