import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterMap = props => {
    return(
        <div>
            {props.data.map(character => 
                <CharacterCard characterData={character} />
                
                )}
        </div>
    )
}

export default CharacterMap;