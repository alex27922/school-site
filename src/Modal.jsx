const Modal = ({ isItShows, toCloseModal }) => {

    return (
        isItShows ?
            <>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close" id="closeModalBtn" onClick={() => toCloseModal()}>&times;</span>
                        <div className="modal-block">
                            <p>Вкажіть ваш мобільний номер та очікуйте на дзвінок!</p>
                            <input className="modal-block__input" type="numbers" placeholder="+380 63 496 2362" />
                        </div>
                    </div>
                </div>

            </>
            : null
    )
}

export default Modal