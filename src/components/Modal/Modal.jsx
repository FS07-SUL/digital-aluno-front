const MODAL_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const Modal = ({ isOpen, children }) => {

    if(isOpen) {
        return(
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-alpha-40 z-2">
                <div style={MODAL_STYLE} className="flex flex-column bg-white w-11 lg:w-5 xl:w-3 border-round-3xl p-4 sm:w-8 sm:gap-3 md:gap-4">
                    {children}
                </div>
            </div>
    )}

    return null
}

export default Modal