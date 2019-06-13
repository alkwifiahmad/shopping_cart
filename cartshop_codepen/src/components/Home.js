import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions';
import ModalInfo from './ModalInfo'
import axios from "axios"

 class Home extends Component{
    
    state = {
      data : [] 
    }
    componentDidMount(){
      axios.get("api/products").then(res => this.setState({
        data: res.data.express
      }))
    }
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.state.data.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                           
                            {/* <ModalInfo/> */}
                            <div>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
        info
      </button>
      
  
      <div class="modal" id="exampleModal" tabindex="-1">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <img src={item.img}/>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
      </div>
      </div>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)