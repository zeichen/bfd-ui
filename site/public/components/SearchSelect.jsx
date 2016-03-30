import React from 'react'
import { SearchSelect } from 'c/SearchSelect'
import Pre from '../Pre'
import { Props, Prop } from '../Props'


const App = React.createClass({

	getInitialState() {
			return {
				selected: []
			}
		},

	handleChange(result) {
		console.log(result);
		this.setState({	selected: result });
	},

  render() {
    return (
        <SearchSelect url="/data/searchSelect.json" onChange={this.handleChange}></SearchSelect>      
    )
  }
})


export default React.createClass({
  render() {
    return (
      <div>
        <h1>查询组件框</h1>
        <Pre>
{`
import { SearchSelect } from 'bfd-ui/lib/SearchSelect'

const App = React.createClass({
	getInitialState() {
		return {
			selected: []
		}
	},
	handleChange(result) {
		console.log(result);
		this.setState({	selected: result });
	},
  render() {
    return (
        <SearchSelect url="/data/searchSelect.json?search=" onChange={this.handleChange}>
        </SearchSelect>      
    )
  }
})
`}
        </Pre>

        <App/>  

        <Props>
          <Prop name="Data" required>
            <p>返回数据格式</p>  
            <h5>键值对数据格式：</h5>
            <Pre>
          
{`
{
  "code": 200,
  "data": [{
    "key": "mi",
    "value": "小米"
  }, {
    "key": "huawei",
    "value": "华为"
  }, {
    "key": "apple",
    "value": "苹果"
  }, {
    "key": "letv",
    "value": "乐视"
  }, {
    "key": "samsung",
    "value": "三星"
  }, {
    "key": "meizu",
    "value": "魅族"
  }, {
    "key": "lenove",
    "value": "联想"
  }, {
    "key": "sony",
    "value": "索尼"
  }]
}
`}
            </Pre>  
            <h5>字符串数据格式：</h5>
            <Pre>
{`
{
  "code": 200,
  "data": ["小米1","小米2","小米3","小米4","三星1","三星2","三星3","三星4","乐视1","乐视2","乐视3"]
}
`}
            </Pre>  
          	</Prop>
          	<Prop name="url" required>
            	<p>请求接口</p>  
          	</Prop>
         	<Prop name="onChange" type="Function" required>
            	<p>选择后的回调</p>    
          	</Prop>

            </Props>    
             
          </div>
    )
  }
})
