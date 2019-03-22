import React from 'react';

const Character = props => {
  return (
    <div className="character-card">
      {/* <img src={props.studentProp.img} alt={props.studentProp.name} /> */}

      <div className="character-info">
        <h3>{props.characterData.name}</h3>
        <p>
          <strong>Name:</strong> {props.studentProp.name}
        </p>
        <p>
          <strong>Birth Year:</strong> {props.studentProp.birth_year}
        </p>
        <p>
          <strong>Height:</strong> {props.studentProp.height}
        </p>
        <p>
          <strong>Homeworld:</strong> {props.studentProp.homeworld}
        </p>
      </div>
    </div>
  );
}

export default Character;