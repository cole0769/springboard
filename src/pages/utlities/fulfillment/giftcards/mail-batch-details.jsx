import React from 'react';

class MailBatchClaimGiftcardAssign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="claim-giftcard-join">
                <h1>Log Claims and Gift Cards</h1>
                <form className='claim-giftcard-input' onSubmit={this.handleSubmit}>
                    <label>Card Number:
                        <input type="text" name="card-number" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>Claim Id:
                        <input type="text" name="claim-id" />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );        
    }
}

export default MailBatchClaimGiftcardAssign;
