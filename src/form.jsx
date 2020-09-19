import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import Button from '@material-ui/core/Button';
import './scss/form.scss';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
    
        
      
      <form className ="contactForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/mnqgezjo"
        method="POST"
        noValidate autoComplete="off"
      >
     
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle className="icon"/>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid"  label="Ingresa el correo" name="email" />
          </Grid>
        </Grid>
        <br/><br/>
        <Grid container spacing={1} alignItems="flex-start" >
          <Grid item >
            <MessageIcon className="icon"/>
          </Grid>
          <Grid item>
          <TextField
           id="input-with-icon-grid" 
          label="Ingresa el mensaje"
          placeholder="Ingresa el mensaje"
          multiline
          rows={4}
          variant="outlined"
         
          name="message" 
          className="msg"
        />
          </Grid>
        </Grid>
        
        
        {status === "SUCCESS" ? <p>Gracias!</p> : <div><Button className="button">Contactar</Button></div>}
        {status === "ERROR" && <p>Hubo un error</p>}
      </form>
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}