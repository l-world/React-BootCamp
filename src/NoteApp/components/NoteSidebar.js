import React from 'react'

export default function Sidebar1() {

    const [rowActive,setRowActive] =React.useState('');
    const [toggle,setToggle] = React.useState('');

    const handleToggleClick = () => {
        setToggle( toggle ? '' : 'note_sidebar_toggle')
    }

    const handleClick = () => {
        setRowActive(
            rowActive === "" ? 'row--active' : ''
        );
    }

    const noteElements = new Array(10).fill(1).map( (item,index) => {
        return <div  
                    className={`note--sideba_headline_row ${rowActive}`} 
                    onClick={ handleClick }
                    key={index}
                >
                    <p className='note--sideba_headline_title'>Business Partners Work at Modern Office</p>
                    <p className='note--sideba_headline_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. </p>
                    <p className='note--sideba_headline_content date'>Feb 8, 2021</p>
            </div>
    })

    return (
        <div className='contaienr--note_sidebar'>
            <div className={`wrap--note_sidebar ${toggle}`}>
                <button className="btn note--sidebar_btn">Create Note</button>
                <div className="note--sidebar_title">Note</div>
                <div className="note--sideba_headline">
                    {noteElements}
                </div>
            </div>
            <div className="note--sidebar_switch" onClick={handleToggleClick}></div>
        </div>
    )
}
