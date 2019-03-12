// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react'
import * as styles from '../hello_react/styles/hello-react.module.sass'

const Hello = props => (
  <div className={styles.helloReact}>Hello {props.name}!</div>
)

export default Hello
