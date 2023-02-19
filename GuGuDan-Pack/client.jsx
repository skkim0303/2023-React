const React = require('react');
const ReactDom = require('react-dom');

const GuGuDan = require('./GuGuDan'); // GuGuDan 코드 불러오기

// ReactDOM.render(<GuGuDan />, document.querySelector('#root'));

// 18버전으로 try
ReactDom.createRoot(document.querySelector('#root')).render(<GuGuDan />);