import React, { Component } from 'react';

class ModalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            title: '',
            img: '',
            desc: '',
            price: ''
        }
    }
    onSelect = id=>{
        /* sessionStorage.setItem('productID',id) */
        console.log(id); 
        /* const imageData = images.filter(image => {
            return image.id == id;
        }); */
       /*  console.log(imageData);
        this.setState({
            name: imageData[0].name,
            src: imageData[0].src,
            price: imageData[0].price,
            info: imageData[0].info

        }) */
    } 
    render() { 
        return (<div>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={(id)=>this.onSelect(`${id}`)}>
        info
      </button>
      
  
      <div class="modal" id="exampleModal" tabindex="-1">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
      </div>
      </div>);
    }
}
 
export default ModalInfo;