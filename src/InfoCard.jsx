const InfoCard = ({ imgUrl, title, info, toShowModal }) => {
    return (
        <section className="card">
            <img className="card__image"
                src={imgUrl}
                alt="img"
            />
            <p className="card__text--title">{title}</p>
            <p className="card__text">
                {info}
            </p>
            <button className="card__button" onClick={() => toShowModal()}>Замовити</button>
        </section>
    )
}

export default InfoCard