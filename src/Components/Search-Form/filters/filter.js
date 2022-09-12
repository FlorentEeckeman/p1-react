import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // 
import ('./filter.css')

const dataIcon = ['money-bill-wave', 'child-reaching', 'heart', 'dog']


function logo (index){
    switch(index) {
        case 'money-bill-wave':
            return (
            <div className='filterButton'>
                <div className='iconFilter'>
                <FontAwesomeIcon icon={solid('money-bill-wave')}/>
                </div>
                <div className='filterText'>Économique</div>
            </div>
                )
        case 'child-reaching':
            return (
            <div className='filterButton'>
                <div className='iconFilter'>
                <FontAwesomeIcon icon={solid('child-reaching')}/>
                </div>
                <div className='filterText'>Familial</div>
            </div>
            )
        case 'heart':
            return (
            <div className='filterButton'>
                <div className='iconFilter'>
                <FontAwesomeIcon icon={solid('heart')}/>
                </div>
                <div className='filterText'>Romantique</div>
            </div>)
        case 'dog':
            return (
            <div className='filterButton'>
                <div className='iconFilter'>
                <FontAwesomeIcon icon={solid('dog')}/>
                </div>
                <div className='filterText'>Animaux autorisés</div>
            </div>
           )
        default:
            return null
      }
}

function Filter  ({text, icone}) { 
    
    return (
        <div className='filterGroup'>
            <div className='filterText filtreP'>Filtre</div>
            {dataIcon.map((icon) => (
                <div className='filterPad'>
                {logo(icon)}
                </div>
            ))}
        </div>
    )
    
}

export default Filter