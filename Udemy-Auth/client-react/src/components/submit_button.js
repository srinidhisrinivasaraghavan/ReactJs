import React from 'react';

export default(props)=>{
	return(
    <div>
      <div className='col-md-offset-2 col-md-1'>
        <button type='submit' className='btn-outline-primary btn-sm'>{props.text}</button>
      </div>
    </div>
	);
}
