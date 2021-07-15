import React, { useState } from 'react';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const modalStyle = {
        width: '75%',
        height: '75%'
    }

    const onSubmit = () => {
        console.log(message, tech, attention);
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className='active'>
                            Log Message
                        </label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">Sam Smith</option>
                            <option value="Sam Smith">John Doe</option>
                            <option value="Sara Will">Sara Will</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className='filled-in' checked={attention} value={attention}
                                onChange={e => setAttention(!attention)}/>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className='modaal-close waves-effect waves-green btn-flat'>Enter</a>
            </div>
        </div>
    );
};

export default AddLogModal;