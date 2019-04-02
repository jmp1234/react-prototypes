import React from 'react';


export default props => {
  console.log(props.info);
  const {info} = props;
  return(
    <div>
      <a target="_blank" href={info.id.label}><img src={info['im:image'][2].label}/></a>
      <h3>{info['im:name'].label}</h3>
      <h4>{info['im:rentalPrice'].label}</h4>
      <p>{info.summary.label}</p>
    </div>
  )

}
