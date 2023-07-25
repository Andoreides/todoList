import {FC} from 'react';
import {Link, useParams} from "react-router-dom";
import './CarsList.css';


type CarsType = {
    id: number,
    description: string,
}

type Props = {
    cars: CarsType[]
}
const CarsList: FC<Props> = (props) => {


    console.log('AAA')
    return (
        <div className='carslist__div'>
            <h2>Список машин</h2>
            {props.cars.map((car: CarsType) => {
                return <Link to={`/cars/${car.id}`} className='carslist__link' >
                       Link to {car.description}
                   </Link>})}
        </div>
    );
};

export default CarsList;