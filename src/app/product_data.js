import { v4 } from 'uuid'

let data = [
    {
        id: v4(),
        name: 'Холодильник Samsung RB37J5220SA',
        img: './img/samsung_rb37j5220sa_ua_10.jpg',
        price: 18_499,
        rating: 5,
        reviews: [
            {
                id: v4(),
                message: 'Очень хороший холодильник из своей ценовой категории. Доставили всего за 1 день.',
                pros: [
                    'Большая вместительность',
                    'Дистанционное управление',
                    'Голосовой помощник',
                    'Тихий'
                ],
                cons: [],
                rating: 5,
                from: 'Наталья',
                date: '27.07.2021'
            }
        ]
    },
    {
        id: v4(),
        name: 'Посудомоечная машина встраиваемая Samsung DW50R4050BB',
        img: './img/samsung_dw50r4050bb_wt_2.jpg',
        price: 14_999,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Духовой шкаф + варочная панель индукционная Gorenje BOS737E10BG + IT40SC',
        img: './img/1659059_gorenje_bos737e10bg_38.jpg',
        price: 21_999,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Микроволновая печь (СВЧ) Samsung MS23K3614AW/BW',
        img: './img/_samsung_mg23k3614aw-bw_1_1.jpg',
        price: 3_399,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Плита газовая Greta 1470-00-20АА',
        img: './img/1582681_greta_1470-00-20_25.jpg',
        price: 4_444,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Блендер погружной Bosch MSM2620B',
        img: './img/1283471_bosch_msm2620b_13.jpg',
        price: 1_329,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Мясорубка Bosch MFW3640A',
        img: './img/mfw3640a_8_1.jpg',
        price: 4_199,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Гриль-барбекю электрический Tefal OptiGrill+ GC 712D34',
        img: './img/tefal_optigrill__gc712d34_images_2051917161.jpg',
        price: 7_499,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Кофемашина Delonghi ETAM29.660.SB Autentica Cap',
        img: './img/delonghi_etam29.660.sb_autentica_cap.jpg',
        price: 20_999,
        rating: 0,
        reviews: []
    },
    {
        id: v4(),
        name: 'Кофемолка Aurora AU3445',
        img: './img/bf73fc82f47afc05dabea3b9571f4fad.jpg',
        price: 289,
        rating: 0,
        reviews: []
    },
]

export default data