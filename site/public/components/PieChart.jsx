import React from 'react'
import { render } from 'react-dom'
import PieChart from 'c/pieChart/index.jsx'


export default React.createClass({

  getInitialState() {
    return {
      post: window.post
    }
  },  
  componentDidMount() {   
    var config = {
      name:'访问来源',
      hoverColor:'#9D9D9D', 
      data:[    
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:848,name:'搜索引擎'},
                {value:348,name:'百分点'}
            ]
    };
    render(<PieChart config={config} />, document.getElementById('demo'))
  },

  render() {
    return <div className="markdown" dangerouslySetInnerHTML={{__html: this.state.post}}></div>
  }
})