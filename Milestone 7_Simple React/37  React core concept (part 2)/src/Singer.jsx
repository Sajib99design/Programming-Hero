import './App.css';

export default function Singer({singer}) {
    console.log(singer);
    return (
        <div className='border'>
            <h2>Singer Details here </h2>
            <h2>Name is : {singer.name} </h2>
            <h3>age is : {singer.age} </h3>
        </div>
    )
}