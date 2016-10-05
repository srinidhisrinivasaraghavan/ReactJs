import React from 'react';

export default(props)=>{
	return(
    <div className={`col-md-12 form-group`} >
    		<label className="col-md-2 control-label">{props.label}</label>
	    	<div className="col-sm-10 col-md-6">
        		<input type='text' className='form-control' placeholder={props.label}  {...props.field} />
						{props.field.touched && props.field.error ? props.field.error: ''}
				</div>
    </div>
	);
}
