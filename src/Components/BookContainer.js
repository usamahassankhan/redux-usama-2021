import React from 'react'
import {buyBook} from './Redux/index';
import {connect } from 'react-redux'; 
const BookContainer = (props) => {
    return (
        <div>
            <h1>{props.numberofBooks}</h1>
            <button onClick={props.buyBook}>add</button>
        </div>   
    )
}
   
const mapStatetoProps=(state)=>{
    return{
    numberofBooks:state.numberofBooks
    }
}
const mapDispatchotoProps=(dispatch)=>{
    return {
        buyBook:function(){
            dispatch(buyBook());
        }
    }
}
export default connect(mapStatetoProps,mapDispatchotoProps)(BookContainer)
