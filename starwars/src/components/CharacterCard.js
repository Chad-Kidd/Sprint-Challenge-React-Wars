import React from 'react';


const CharacterCard = props => {
  return (
    <div className="character-card">
      {/* <img src={props.studentProp.img} alt={props.studentProp.name} /> */}

      <div className="character-info">
        <h3>{props.characterData.name}</h3>
        <p>
          <strong>Name:</strong> {props.characterData.name};
        </p>
        <p>
          <strong>Birth Year:</strong> {props.characterData.birth_year};
        </p>
        <p>
          <strong>Height:</strong> {props.characterData.height};
        </p>
        <p>
          <strong>Homeworld:</strong> {props.characterData.homeworld};
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;