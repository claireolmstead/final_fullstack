import React, {Component} from "react";
import Form from "./form";
import CompleteForm from "./completeForm";
export default class Main extends Component{
    render() {
        return(
            <div>
                <CompleteForm />
                <Form/>
            </div>
        )
    }
}