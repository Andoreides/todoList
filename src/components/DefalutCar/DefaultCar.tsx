import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import './DefaultCar.css';
import {MyButton} from "../../uiKit/MyButton/MyButton";
import {Props} from "../../types/types";


type StoreType = {
    carsState: Props
}
const DefaultCar = () => {

    const {cars} = useSelector((store: StoreType) => store.carsState);
    const params = useParams();
    const history = useHistory();
    const id: number = Number (params.id);
    console.log(id)
    const cardToShow = cars.find(c => c.id === id)
    const handleClick = () => {
        history.push('/cars')
    }

    return (
        <div className={'car__div'}>
            <h3 className={'car__h3'}>Машина</h3>
            <p className={'car__p'} > Марка: {cardToShow.description}</p>
            <p className={'car__p'} > Номер в списке: {cardToShow.id}</p>
            <a href={cardToShow.link}> <img src={cardToShow.img} alt={'картинка'} className={'car__img'} /> </a>
            <MyButton onClick={handleClick}  title={'Назад'} />
        </div>
    );
};

export default DefaultCar;