const initialState = {
    cars: [
        {
            description: 'toyota',
            id: 1,
            link: 'https://www.avito.ru/moskva/avtomobili/toyota_camry_2019_2812705329',
            img: 'https://20.img.avito.st/image/1/1.hmVfBba4KoxprOiJX2vVW2inKIrhpKiEKaEoju-sIobp.ipdH_Kvh9C2QnKjVFifHxhq362NTbh_GTv821ZtqYv8'
        },
        {
            description: 'audi',
            id: 2,
            link: 'https://www.avito.ru/moskva/avtomobili/audi_q5_2011_2921413549',
            img: 'https://80.img.avito.st/image/1/1.YPGZRba4zBiv7A4d1TBErKTnzh4n5E4Q7-HOGinsxBIv.9vBDFt5QEFv5L1S1zHYFMsoQbhzNBZH3FfLWvP18gpc'
        },
        {
            description: 'bmw',
            id: 3,
            img: 'https://80.img.avito.st/image/1/1.LJ0YkLa4gHQuOUJxTOgm9CMygnKmMQJ8bjSCdqg5iH6u.hh7RZZ339URvvdr9YHwdh31-xhvy3ZhLJdZ4EMGwQCA',
            link: 'https://www.avito.ru/koshehabl/avtomobili/bmw_x6_2009_2971907631'
        },
    ]
}

export const CARS_REDUCER = 'CARS_REDUCER'

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARS_REDUCER:
            return state;

        default:
            return state;
    }
}