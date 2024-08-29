
function Modal({open,onClose}) {
    if(!open){
        return 
    }
  return ReactDOM.createPortal(
    <>
    <div>
    <span onClick={onClose}>close</span>
      modal modal modal
    </div>
    </>,document.getElementById('portal')
  )
}

export default Modal
