import React from 'react'

const ModalPDF = ({ btnName,title, pdf,body }) => {
    return (
        <>

            {/* this should be added to any button to be lined with this modal component */}
            {/* btnName should be a string that is unique for each button that will open a modal */}
            {/*  data-bs-toggle="modal"  data-bs-target="#exampleModalbtnName"*/}


            <div className="modal fade"  id={`exampleModal${btnName}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${btnName}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:'mist'}}>
                            <h1 className="modal-title fs-5" id={`exampleModalLabel${btnName}`}>{title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div style={{backgroundColor:'#554d56'}}>
                            {body}
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href={pdf} download type="button"  className="btn btn-primary">download</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalPDF


