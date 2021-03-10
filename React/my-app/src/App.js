import logo from './logo.svg';
import './App.css';
const list = [
{
title: 'React',
url: 'https://facebook.github.io/react/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://github.com/reactjs/redux',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
},
];


function App() {
  const AA = "Edit and hello world.";

  return (
    <div className="App">
{list.map(item =>
  <div>
<span>
<a href={item.url}>{item.title + ' '}</a>
</span>
<span>{item.author + ' '}</span>
<span>{item.num_comments + ' '}</span>
<span>{item.points}</span>
<span>
<button
onClick={() => this.onDismiss(item.objectID)}
type="button"
>
Dismiss
</button>
</span>

)}
</div>
);
}

export default App
